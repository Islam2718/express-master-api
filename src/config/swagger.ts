import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Master API Project',
      version: '1.0.0',
      description: 'API documentation for multi-website project. Developed by <a href="http://phicsart.com" target="_blank">PhicsArt</a>',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['./src/controllers/**/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: Express) => {
  app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
