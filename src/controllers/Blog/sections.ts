import { Request, Response } from 'express';
import pool from '../../config/db';

export const getSections = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM blog_sections');
  res.json(rows);
};

export const getSectionById = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM blog_sections WHERE id = ?', [req.params.id]);
  res.json(rows);
};

export const createSection = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  await pool.query('INSERT INTO blog_sections (title, content) VALUES (?, ?)', [title, content]);
  res.status(201).send('Post created');
};
