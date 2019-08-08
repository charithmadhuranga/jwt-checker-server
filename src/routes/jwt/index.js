'use strict';

const jwt = require('jsonwebtoken');
const { clone, juxt, objOf, unary, zipObj } = require('@meltwater/phi');
const { fromNowToUnix } = require('@meltwater/tau');

const { fastifyHandlerPipe } = require('../../utils');
const { verifyEndpointSchema, decodeEndpointSchema } = require('./schemas');
const { expiredBefore, extractTokenFromRequest } = require('./utils');

async function jwtRoutes(fastify, options) {
  fastify.get(
    '/jwt/verify',
    { schema: verifyEndpointSchema },
    fastifyHandlerPipe(
      extractTokenFromRequest,
      unary(jwt.decode),
      expiredBefore(fromNowToUnix()),
      objOf('expired'),
    ),
  );

  fastify.get(
    '/jwt/decode',
    { schema: decodeEndpointSchema },
    fastifyHandlerPipe(
      extractTokenFromRequest,
      unary(jwt.decode),
      juxt([clone, expiredBefore(fromNowToUnix())]),
      zipObj(['token', 'expired']),
    ),
  );

  fastify.setErrorHandler(function(error, request, reply) {
    if (error.validation) {
      for (const validation of error.validation) {
        if (validation.params.missingProperty === 'authorization') {
          reply.status(401).send(new Error('Missing JWT token in header'));
          return;
        }
      }
    }
  });
}

module.exports = jwtRoutes;
