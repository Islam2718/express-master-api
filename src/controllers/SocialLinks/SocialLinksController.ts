import { Request, Response } from 'express';
import * as SocialLinkService from '../../services/SocialLinkService';

/**
 * @swagger
 * components:
 *   schemas:
 *     SocialLink:
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
 *         title:
 *           type: string
 *           example: "Facebook"
 *         icon:
 *           type: string
 *           example: "https://example.com/icon.png"
 *         thumb:
 *           type: string
 *           example: "https://example.com/thumb.png"
 *         linkUrl:
 *           type: string
 *           example: "https://facebook.com/profile"
 *         target:
 *           type: string
 *           example: "_blank"
 *         status:
 *           type: boolean
 *           example: true
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2024-10-28T08:30:00Z"
 *
 * /api/social-links:
 *   get:
 *     tags:
 *       - SocialLink
 *     summary: Get all social links
 *     responses:
 *       200:
 *         description: List of social links
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SocialLink'
 * 
 *   post:
 *     tags:
 *       - SocialLink
 *     summary: Create a new social link
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SocialLink'
 *     responses:
 *       201:
 *         description: Social link created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Social link created successfully"
 *                 socialLink:
 *                   $ref: '#/components/schemas/SocialLink'
 *       500:
 *         description: Server error
 */

export const list = async (_req: Request, res: Response) => {
  const result = await SocialLinkService.getAllSocialLinks();
  res.json(result);
};

export const create = async (req: Request, res: Response) => {
  const result = await SocialLinkService.createSocialLink(req.body);
  res.status(201).json(result);
};

/**
 * @swagger
 * /api/social-links/{id}:
 *   get:
 *     tags:
 *       - SocialLink
 *     summary: Get social link by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the social link
 *     responses:
 *       200:
 *         description: Social link data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SocialLink'
 *       404:
 *         description: Social link not found
 */

export const get = async (req: Request, res: Response) => {
  const result = await SocialLinkService.getSocialLinkById(Number(req.params.id));
  res.json(result);
};

/**
 * @swagger
 * /api/social-links/{id}:
 *   put:
 *     tags:
 *       - SocialLink
 *     summary: Update a social link
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the social link to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SocialLink'
 *     responses:
 *       200:
 *         description: Social link updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Social link updated successfully"
 *                 socialLink:
 *                   $ref: '#/components/schemas/SocialLink'
 *       404:
 *         description: Social link not found
 *       500:
 *         description: Server error
 */

export const update = async (req: Request, res: Response) => {
  const result = await SocialLinkService.updateSocialLink(Number(req.params.id), req.body);
  res.json(result);
};

/**
 * @swagger
 * /api/social-links/{id}:
 *   delete:
 *     tags:
 *       - SocialLink
 *     summary: Delete a social link
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the social link to delete
 *     responses:
 *       204:
 *         description: Social link deleted successfully
 *       404:
 *         description: Social link not found
 *       500:
 *         description: Server error
 */

export const deleteSocialLink = async (req: Request, res: Response) => {
  await SocialLinkService.deleteSocialLink(Number(req.params.id));
  res.status(204).send();
};
