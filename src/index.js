'use strict';

require('make-promises-safe'); // installs an 'unhandledRejection' handler

const hyperid = require('hyperid')({
  fixedLength: true,
  urlSafe: true,
});
const fastify = require('fastify')({
  logger: true,
  genReqId: hyperid,
});

fastify.register(require('./routes/jwt'));

fastify.listen(process.env.PORT || 3000, '::', (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`server listening on ${address}`);
});
