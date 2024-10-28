import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './config/database';
import userRoutes from './controllers/users/user.routes';
import applicationRoutes from './controllers/applications/application.routes';
import SocialLinkRoutes from './controllers/SocialLinks/socialLink.routes';
import SliderRoutes from './controllers/Sliders/slider.routes';
import SliderItemRoutes from './controllers/SliderItems/sliderItem.routes';
import PageRoutes from './controllers/blog/Page/page.routes';
import SectionRoutes from './controllers/blog/Section/section.routes';
import WidgetRoutes from './controllers/blog/Widget/widget.routes';

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log(error));

app.use('/api/users', userRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/socialLinks', SocialLinkRoutes);
app.use('/api/sliders', SliderRoutes);
app.use('/api/slider-items', SliderItemRoutes);
app.use('/api/pages', PageRoutes);
app.use('/api/sections', SectionRoutes);
app.use('/api/widgets', WidgetRoutes);

// Register other routes here

export default app;
