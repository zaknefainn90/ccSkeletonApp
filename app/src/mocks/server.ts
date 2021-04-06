import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server: any = setupServer(...handlers);
