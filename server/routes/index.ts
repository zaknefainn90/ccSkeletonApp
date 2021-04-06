import { Router } from 'express';
import { homeRoute } from '@components/home';
import { gamesRoute } from '@components/games';
import { docsRoute } from '@routes/docs';
import translations from '@routes/translations';

function getRoutes(): Router {
  const router = Router();

  translations();
  router.use('/', docsRoute());
  router.use('/', homeRoute());
  router.use('/games', gamesRoute());

  return router;
}

export default getRoutes;
