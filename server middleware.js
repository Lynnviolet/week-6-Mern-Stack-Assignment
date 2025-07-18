// server/tests/middleware/authMiddleware.test.js
const authMiddleware = require('../../middleware/authMiddleware');
const httpMocks = require('node-mocks-http');
const jwt = require('jsonwebtoken');

jest.mock('jsonwebtoken');

describe('authMiddleware', () => {
  it('should call next if token is valid', () => {
    const req = httpMocks.createRequest({
      headers: {
        authorization: 'Bearer validtoken'
      }
    });
    const res = httpMocks.createResponse();
    const next = jest.fn();

    jwt.verify.mockReturnValue({ id: 'user123' });

    authMiddleware(req, res, next);

    expect(req.user).toEqual({ id: 'user123' });
    expect(next).toHaveBeenCalled();
  });

  it('should return 401 if no token is provided', () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const next = jest.fn();

    authMiddleware(req, res, next);

    expect(res.statusCode).toBe(401);
    expect(res._getData()).toEqual(expect.stringContaining('Not authorized'));
  });
});
