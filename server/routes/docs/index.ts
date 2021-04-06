import { Router } from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for Gamerello',
    version: '1.0.0',
    description:
    'This is a REST API application made with Express.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'ClickCode',
      url: 'http://clickcode.pl',
      email: 'kontakt@clickcode.com',
    },
  },
  servers: [
    {
      url: 'http://localhost:8080',
      description: 'Development server',
    },
    {
      url: 'http://localhost:3100',
      description: 'Production server',
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./server/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export function docsRoute(): Router {
  const router = Router();

  router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  return router;
}
