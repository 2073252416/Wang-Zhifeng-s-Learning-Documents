'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/ragister', controller.wzfragister.index);
  router.get('/', controller.wzflogin.index);
  router.get('/password', controller.wzfpassword.index);
  router.get('/ok', controller.wzfok.index);
};
