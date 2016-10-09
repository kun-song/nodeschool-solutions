'use strict';
// 3rd party
const assert = require('better-assert');
const router = require('koa-router')();
const debug = require('debug')('app:routes:index');
// 1st party
const db = require('../db');
const pre = require('../presenters');
const mw = require('../middleware');
const config = require('../config');
const belt = require('../belt');
const paginate = require('../paginate');
const cache = require('../cache');

const mghelper = require('../schema/mghelper.js');


// expects /:uname param in url
// sets this.state.user
function loadUser () {
  return function * (next) {
    this.validateParam('uname');
    const user = yield db.getUserByUname(this.vals.uname);
    this.assert(user, 404);
    pre.presentUser(user);
    this.state.user = user;
    yield * next;
  };
}

// expects /:message_id param in url
// sets this.state.message
function loadMessage () {
  return function * (next) {
    this.validateParam('message_id');
    const message = yield db.getMessageById(this.vals.message_id);
    this.assert(message, 404);
    pre.presentMessage(message);
    this.state.message = message;
    yield * next;
  };
}

// Useful route for quickly testing something in development
// 404s in production
router.get('/test', function * () {
  this.assert(config.NODE_ENV === 'development', 404);
  this.body = this.headers['user-agent'];
});

////////////////////////////////////////////////////////////

// Show homepage
router.get('/', function * () {
  const messages = yield db.getRecentMessages();
  messages.forEach(pre.presentMessage);
  yield this.render('homepage', {
    ctx: this,
    messages,
    recaptchaSitekey: config.RECAPTCHA_SITEKEY
  });
});

// List all devices
router.get('/devices', function * () {
  this.validateQuery('page')
    .defaultTo(1)
    .toInt();
  // 查询所有 devices
  const results = yield {
    users: db.getUsers(this.vals.page),
    // users: mghelper.getDevices(),
    count: cache.get('users-count')
  };
  const users = results.users.map(pre.presentUser);
  // 分页
  const paginator = paginate.makePaginator(this.vals.page, results.count);
  yield this.render('devices_list', {
    ctx: this,
    users,
    paginator,
    usersCount: results.count,
    title: 'All Devices'
  });
});

// query by ip
router.get('/query', function * () {
  debug('router.get() this = ', this.request.url.substring(13));
  const results = yield {
    users: db.getUserByUname(this.request.url.substring(13)),
    count: cache.get('users-count')
  };
  const array = [];
  array.push(results.users || {});
  const users = array.map(pre.presentUser);
  debug(users);
  // 分页
  const paginator = false;
  // const paginator = paginate.makePaginator(this.vals.page, results.count);
  yield this.render('devices_list', {
    ctx: this,
    users,
    paginator,
    usersCount: results.count,
    title: 'Specific device'
  });
});

// Create message
router.post('/messages', mw.ratelimit(), mw.ensureRecaptcha, function * () {
  // AUTHZ
  this.assertAuthorized(this.currUser, 'CREATE_MESSAGE');
  // VALIDATE
  this.validateBody('markup')
    .required('Must provide a message')
    .isString()
    .trim()
    .tap(belt.transformMarkup)
    .isLength(3, 300, 'Message must be 3-300 chars');
  // SAVE
  yield db.insertMessage({
    user_id: this.currUser && this.currUser.id,
    markup: this.vals.markup,
    ip_address: this.request.ip,
    user_agent: this.headers['user-agent']
  });
  // RESPOND
  this.flash = { message: ['success', 'Message created!'] };
  this.redirect('/');
});

module.exports = router;
