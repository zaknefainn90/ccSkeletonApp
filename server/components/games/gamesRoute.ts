import { Router } from 'express';

const mock = [
  {
    id: 111,
    title: 'The Last of Us',
    body:
      'Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi',
  },
  {
    id: 222,
    title: 'Fortnite',
    body:
      'Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint',
  },
  {
    id: 333,
    title: 'Fallout 4',
    body:
      'Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint',
  },
];

export function gamesRoute(): Router {
  const route = Router();

  route.get('/', (req, res) => {
    res.json(mock);
  });

  return route;
}
