import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from '../entities/User';
import { Application } from '../entities/Application';
import { SocialLink } from '../entities/SocialLink';
import { Slider } from '../entities/Slider';
import { SliderItem } from '../entities/SliderItem';
import { Page } from '../entities/Page';
import { Section } from '../entities/Section';
import { Widget } from '../entities/Widget';

config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),

  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  entities: [
    User, 
    Application,
    SocialLink,
    Slider, SliderItem,
    Page, Section, Widget
  ],
  synchronize: true,
});
