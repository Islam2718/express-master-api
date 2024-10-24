import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with TypeScript',
      version: '1.0.0',
      description: 'A simple Express API built with TypeScript',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Files where Swagger will look for annotations
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwaggerDocs = (app: Express) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('Swagger docs available at http://localhost:3000/api-docs');
};

export default setupSwaggerDocs;
