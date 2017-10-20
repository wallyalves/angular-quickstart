'use strict';

const
  cluster = require('cluster'),
  koa = require('koa'),
  serveStatic = require('koa-static'),
  path = require('path');


const bootstrapServer = async function (config) {

  const app = new koa();

  app.use(serveStatic('./build'));

  app.listen(config.port);

  console.log(`listening on port ${config.port}`);
};


/**
 * startServer
 * Bootstrap the application.
 *
 * @param config
 * @return Promise
 */
module.exports.startServer = async function (config) {
  await bootstrapServer(config).catch(ex => console.error(ex.stack || ex));
};
