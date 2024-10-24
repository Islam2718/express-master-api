import { Request, Response } from 'express';
import pool from '../../config/db';

export const getPosts = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM blog_posts');
  res.json(rows);
};

export const getPostById = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM blog_posts WHERE id = ?', [req.params.id]);
  res.json(rows);
};

export const createPost = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  await pool.query('INSERT INTO blog_posts (title, content) VALUES (?, ?)', [title, content]);
  res.status(201).send('Post created');
};
