'use strict';

const jwtTokenSchemaJson = {
  type: 'object',
  properties: {
    jti: {
      type: 'string',
    },
    exp: {
      type: 'number',
    },
    nbf: {
      type: 'number',
    },
    iat: {
      type: 'number',
    },
    iss: {
      type: 'string',
    },
    aud: {
      type: 'array',

      items: { type: 'string' },
    },
    sub: {
      type: 'string',
    },
    typ: {
      type: 'string',
    },
    axp: {
      type: 'string',
    },
    nonce: {
      type: 'string',
    },
    auth_tim: {
      type: 'number',
    },
    session_state: {
      type: 'string',
    },
    acr: {
      type: 'string',
    },
    'allowed-origins': {
      type: 'array',
      items: { type: 'string' },
    },
    realm_access: {
      type: 'object',
      properties: {
        roles: {
          type: 'array',
          items: { type: 'string' },
        },
      },
    },
    resource_access: {
      type: 'object',
      properties: {
        account: {
          type: 'object',
          properties: {
            roles: {
              type: 'array',
              items: { type: 'string' },
            },
          },
        },
      },
    },
    scope: {
      type: 'string',
    },
    email_verified: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    preferred_username: {
      type: 'string',
    },
    email: {
      type: 'string',
    },
  },
};

const verifyEndpointSchema = {
  headers: {
    type: 'object',
    properties: {
      Authorization: { type: 'string' },
    },
    required: ['Authorization'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        expired: {
          type: 'boolean',
        },
      },
    },
  },
};

const decodeEndpointSchema = {
  headers: {
    type: 'object',
    properties: {
      Authorization: { type: 'string' },
    },
    required: ['Authorization'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        token: jwtTokenSchemaJson,
        expired: {
          type: 'boolean',
        },
      },
    },
    401: {
      type: 'object',
      properties: {
        error: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
        statusCode: {
          type: 'number',
        },
      },
    },
  },
};

module.exports = {
  decodeEndpointSchema,
  jwtTokenSchemaJson,
  verifyEndpointSchema,
};
