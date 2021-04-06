import { Router } from 'express';
import { getFrontEndEntryPoint } from './utils';

export function homeRoute(): Router {
  const router = Router();
  /**
   * @swagger
   * /:
   *  get:
   *    description: Base path
   *    responses:
   *      '200':
   *        description: A successful response with html
   */
  router.get('/', (req, res) => {
    res.sendFile(`${getFrontEndEntryPoint()}/index.html`);
  });

  return router;
}
