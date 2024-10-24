import { Request, Response } from 'express';
import pool from '../../config/db';

export const getSiteInfo = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM site_infos');
  res.json(rows);
};

export const updateSiteInfo = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  await pool.query('UPDATE site_infos SET name = ?, description = ?', [name, description]);
  res.send('Site Info updated');
};
