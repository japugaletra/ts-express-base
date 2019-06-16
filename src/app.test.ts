import _request, { SuperTest, Test } from 'supertest';
import app from './app';
import { Server } from 'http';

let server: Server;
let request: SuperTest<Test>;

beforeEach(async (): Promise<void> => {
  server = await app.listen(4000);
  request = _request.agent(server);
});

afterEach(async (): Promise<void> => {
  await server.close();
});

describe('Root', (): void => {
  it ('should return `200` status', async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });

  it ('should consider query string', async (): Promise<void> => {
    const name = "test";
    const response = await request.get(`/?name=${name}`);
    expect(response.body.message).toContain(`${name}`);
  });
});