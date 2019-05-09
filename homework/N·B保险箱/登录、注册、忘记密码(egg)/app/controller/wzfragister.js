'use strict';

const Controller = require('egg').Controller;

class wzf_ragisterController extends Controller {
  async index() {
    const { 
      ctx
    } = this;
    await ctx.render('wzfragister')
  }
}

module.exports = wzf_ragisterController;
