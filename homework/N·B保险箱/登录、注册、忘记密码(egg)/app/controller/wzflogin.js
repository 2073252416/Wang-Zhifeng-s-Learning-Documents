'use strict';

const Controller = require('egg').Controller;

class wzf_loginController extends Controller {
  async index() {
  const {ctx} = this;
  await ctx.render('wzflogin');
  }
}

module.exports = wzf_loginController;
