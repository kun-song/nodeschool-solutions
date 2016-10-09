'use strict';
// 3rd party
const assert = require('better-assert');
const Router = require('koa-router');
const debug = require('debug')('app:routes:index');
// 1st party
const db = require('../db');
const pre = require('../presenters');
const mw = require('../middleware');
const config = require('../config');
const belt = require('../belt');
const paginate = require('../paginate');
const cache = require('../cache');

const router = new Router();

// Show login form
router.get('/login', function*() {
  yield this.render('login', {
    ctx: this,
    title: 'Login',
    recaptchaSitekey: config.RECAPTCHA_SITEKEY
  });
});

// Create login session
//router.post('/login', mw.ensureRecaptcha, function*() {
router.post('/login', mw.ensureRecaptcha, function*() {

  // Validate

  this.validateBody('uname')
    .required('登录失败，用户名或密码错误')
    .isString()
    .trim();
  this.validateBody('password')
    .required('登录失败，用户名或密码错误')
    .isString();
  this.validateBody('remember-me')
    .toBoolean();

  const user = yield db.getUserByUname(this.vals.uname);
  this.check(user, '登录失败，用户名或密码错误');
  this.check(yield belt.checkPassword(this.vals.password, user.digest), '登录失败，用户名或密码错误');

  // User authenticated

  const session = yield db.insertSession(user.id, this.ip, this.headers['user-agent'], this.vals['remember-me'] ? '1 year' : '2 weeks');

  this.cookies.set('session_id', session.id, {
    expires: this.vals['remember-me'] ? belt.futureDate({ years: 1 }) : undefined
  });
  this.flash = { message: ['success', '登录成功'] };

  this.redirect('/');
});

// Show register form
router.get('/register', function*() {
  yield this.render('register', {
    ctx: this,
    title: 'Register',
    recaptchaSitekey: config.RECAPTCHA_SITEKEY
  });
});


// Create user
router.post('/users', mw.ensureRecaptcha, function * () {

  // Validation

  this.validateBody('uname')
    .isString('请输入用户名')
    .trim()
    .isLength(3, 15, '用户名至少为 2 个字符')
    .match(/^[a-z0-9_-]+$/i, '不合法的字符')
    .checkNot(yield db.getUserByUname(this.vals.uname), '用户名已经存在');

  this.validateBody('password2')
    .isString('请确认密码')
    .checkPred(s => s.length > 0, '请确认密码');

  this.validateBody('password1')
    .isString('请输入密码')
    .checkPred(s => s.length > 0, '请输入密码')
    .isLength(6, 100, '密码位数在 6-100 之间')
    .eq(this.vals.password2, '两次输入不一致');

  this.validateBody('email')
    .optional()
    .isString()
    .trim()
    .isEmail('无效邮箱');

  // Insert user

  const user = yield db.insertUser(this.vals.uname, this.vals.password1, this.vals.email);

  // Log them in

  const session = yield db.insertSession(user.id, this.ip, this.headers['user-agent'], '1 year');

  this.cookies.set('session_id', session.id, {
    expires: belt.futureDate({ years: 1 }),
    httpOnly: true
  });

  // Redirect to homepage with the good news

  this.flash = { message: ['success', '注册成功'] };
  this.redirect('/');
});

// Logout
router.del('/sessions/:id', function * () {
  this.assert(this.currUser, 404);
  this.validateParam('id');
  this.validateBody('redirectTo')
    .defaultTo('/')
    .isString()
    .checkPred(s => s.startsWith('/'));

  yield db.logoutSession(this.currUser.id, this.vals.id);
  this.cookies.set('session_id', null);

  this.flash = { message: ['success', '成功退出'] };
  this.redirect(this.vals.redirectTo);
});

module.exports = router;
