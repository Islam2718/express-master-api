import { Request, Response } from 'express';
import pool from '../config/db';

export const getProducts = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM products');
  res.json(rows);
};

export const getProductById = async (req: Request, res: Response) => {
  const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
  res.json(rows);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;
  await pool.query('INSERT INTO products (name, price) VALUES (?, ?)', [name, price]);
  res.status(201).send('Product created');
};
