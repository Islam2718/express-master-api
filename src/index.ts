import express from 'express';
import dotenv from 'dotenv';
import siteInfoRoutes from './routes/siteInfo';
import blogRoutes from './routes/blog';
import eCommerceRoutes from './routes/eCommerce';
import setupSwaggerDocs from './swagger';

dotenv.config();

const app = express();
app.use(express.json());

// SiteInfo routes
app.use('/api/siteinfo', siteInfoRoutes);

// Blog routes
app.use('/api/blog', blogRoutes);

// eCommerce routes
app.use('/api/ecommerce', eCommerceRoutes);

// Setup Swagger
setupSwaggerDocs(app);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
