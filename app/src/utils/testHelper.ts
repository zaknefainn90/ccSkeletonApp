/* eslint-disable no-undef */
import { server } from '../mocks/server';

export function watchMock() {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}
