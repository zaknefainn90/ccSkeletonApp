import { rest } from 'msw';
import { getGamesMockRequest } from './data';

export const gamesApiRequest = [
  rest.get('/games', (req: any, res: any, ctx: any) => res(
    ctx.json(getGamesMockRequest),
  )),
];
