import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Application } from '../entities/Application';
import { SocialLink } from '../entities/SocialLink';
import { Slider } from '../entities/Slider';
import { SliderItem } from '../entities/SliderItem';
import { Page } from '../entities/Page';
import { Section } from '../entities/Section';
import { Widget } from '../entities/Widget';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  // local 
  username: "root",
  password: "",
  database: "master_api_db",
  // live 
  // username: "phicnzwy_express_master_api",
  // password: "rqW9FH=cAMGt",
  // database: "phicnzwy_express_master_api",

  entities: [
    User, 
    Application,
    SocialLink,
    Slider, SliderItem,
    Page, Section, Widget
  ],
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   entities: [User], // add all entities here
  synchronize: true,
});
