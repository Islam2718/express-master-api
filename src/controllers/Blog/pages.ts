import { Request, Response } from 'express';
import pool from '../../config/db';

export const getPages = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM blog_pages');
  res.json(rows);
};

export const getPageById = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM blog_pages WHERE id = ?', [req.params.id]);
  res.json(rows);
};

export const createPage = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  await pool.query('INSERT INTO blog_pages (title, content) VALUES (?, ?)', [title, content]);
  res.status(201).send('Post created');
};
