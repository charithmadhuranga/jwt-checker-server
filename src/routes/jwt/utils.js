'use strict';

const { gt, last, path, pipe, split } = require('@meltwater/phi');

const expiredBefore = expirationTimestamp =>
  pipe(
    path(['exp']),
    gt(expirationTimestamp),
  );

const extractTokenFromRequest = pipe(
  path(['headers', 'authorization']),
  split(' '),
  last,
);

module.exports = {
  expiredBefore,
  extractTokenFromRequest,
};
