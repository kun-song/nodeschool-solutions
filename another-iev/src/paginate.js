'use strict';

// 3rd
const _ = require('lodash');
const debug = require('debug')('app:sandbox');
const assert = require('better-assert');
// 1st
const config = require('./config');

// 如果无需 paginator 分页插件，返回 false，否则返回一个 paginator 对象，供 renderPaginator
// 宏使用
exports.makePaginator = function(currPage, totalItems) {
  assert(_.isInteger(currPage));
  assert(_.isInteger(totalItems));
  const perPage = config.MESSAGES_PER_PAGE;
  assert(_.isInteger(perPage));

  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  currPage = Math.min(currPage, totalPages);

  if (currPage === 1 && totalPages === 1) {
    return null;
  }

  let innerItems = [];
  let startPgNum = Math.max(1, currPage-3);
  let endPgNum = Math.min(totalPages, startPgNum+6);

  if (currPage > 1) {
    innerItems.push({ text: 'Prev', href: `?page=${currPage-1}`, kind: 'BUTTON' });
  }

  if (startPgNum > 1) {
    innerItems.push({ text: '1', href: `?page=1`, kind: 'BUTTON' });
  }

  if (startPgNum > 2) {
    innerItems.push({ kind: 'SEPARATOR' });
  }

  _.range(startPgNum, endPgNum+1).forEach(n => {
    const btn = {
      text: n.toString(), href: `?page=${n}`, isActive: n === currPage, kind: 'BUTTON'
    };
    innerItems.push(btn);
  });

  if (endPgNum < totalPages-1) {
    innerItems.push({ kind: 'SEPARATOR' });
  }

  if (endPgNum < totalPages) {
    innerItems.push({
      text: totalPages.toString(),
      href: `?page=${totalPages.toString()}`,
      kind: 'BUTTON'
    });
  }

  if (currPage < totalPages) {
    innerItems.push({ text: 'Next', href: `?page=${currPage+1}`, kind: 'BUTTON' });
  }

  return innerItems;
};
