// server/tests/integration/sampleApi.test.js
const request = require('supertest');
const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

describe('GET /api/hello', () => {
  it('should return Hello World', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello World');
  });
});
