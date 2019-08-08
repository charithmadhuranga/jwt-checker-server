'use strict';

const { pipe } = require('@meltwater/phi');

const fastifyHandlerPipe = (...fns) => (request, reply) =>
  reply.send(pipe(...fns)(request));

module.exports = {
  fastifyHandlerPipe,
};
