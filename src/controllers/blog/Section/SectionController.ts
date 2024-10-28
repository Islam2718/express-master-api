import { Request, Response } from 'express';
import * as SectionService from '../../../services/SectionService';

/**
 * @swagger
 * components:
 *   schemas:
 *     Section:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         user_id:
 *           type: integer
 *           example: 2
 *         application_id:
 *           type: integer
 *           example: 3
 *         page_id:
 *           type: integer
 *           example: 4
 *         title:
 *           type: string
 *           example: "Section Title"
 *         sub_title:
 *           type: string
 *           example: "Section Subtitle"
 *         content:
 *           type: string
 *           example: "Content of the section."
 *         thumb:
 *           type: string
 *           example: "https://example.com/thumb.jpg"
 *         cover_photo:
 *           type: string
 *           example: "https://example.com/cover.jpg"
 *         background_image:
 *           type: string
 *           example: "https://example.com/background.jpg"
 *         backgruound_color:
 *           type: string
 *           example: "#FFFFFF"
 *         font_color:
 *           type: string
 *           example: "#000000"
 *         status:
 *           type: boolean
 *           example: true
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2024-10-28T08:30:00Z"
 *
 * /api/sections:
 *   get:
 *     tags:
 *       - Section
 *     summary: Get all sections
 *     responses:
 *       200:
 *         description: List of sections
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Section'
 *
 *   post:
 *     tags:
 *       - Section
 *     summary: Create a new section
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Section'
 *     responses:
 *       201:
 *         description: Section created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Section created successfully
 *                 section:
 *                   $ref: '#/components/schemas/Section'
 *       500:
 *         description: Server error
 */

export const list = async (_req: Request, res: Response) => {
    const result = await SectionService.getAll();
    res.json(result);
};

export const create = async (req: Request, res: Response) => {
    const result = await SectionService.create(req.body);
    res.status(201).json(result);
};

/**
 * @swagger
 * /api/sections/{id}:
 *   get:
 *     tags:
 *       - Section
 *     summary: Get section by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the section
 *     responses:
 *       200:
 *         description: Section data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Section'
 *       404:
 *         description: Section not found
 */

export const getById = async (req: Request, res: Response) => {
    const result = await SectionService.getById(Number(req.params.id));
    res.json(result);
}

/**
 * @swagger
 * /api/sections/{id}:
 *   put:
 *     tags:
 *       - Section
 *     summary: Update a section
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the section to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Section'
 *     responses:
 *       200:
 *         description: Section updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Section'
 *       404:
 *         description: Section not found
 *       500:
 *         description: Server error
 */

export const updateById = async (req: Request, res: Response) => {
    const result = await SectionService.updateById(Number(req.params.id), req.body);
    res.json(result);
};

/**
 * @swagger
 * /api/sections/{id}:
 *   delete:
 *     tags:
 *       - Section
 *     summary: Delete a section
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the section to delete
 *     responses:
 *       204:
 *         description: Section deleted successfully
 *       404:
 *         description: Section not found
 *       500:
 *         description: Server error
 */

export const deleteById = async (req: Request, res: Response) => {
    await SectionService.deleteById(Number(req.params.id));
    res.status(204).send();
};
