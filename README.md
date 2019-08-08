# JWT checker server

> A quick implementation of a JWT checking server.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## API

### Verify

``` js
GET /jwt/verify
```

Calling this endpoint with a JWT token set in the `Auhtorization` header, will check if it's expired or not.

**Response**

```json
{
  "expired": <boolean>
}
```

### Decode

``` js
GET /jwt/decode
```

Calling this endpoint with a JWT token set in the `Auhtorization` header, will decode and return it, also will check if it's expired or not.

**Response**

```json
{
  "token": {
    <JWT token content>
  },
  "expired": <boolean>
}
```

## One Click Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/panz3r/jwt-checker-server)

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/panz3r/jwt-checker-server)

