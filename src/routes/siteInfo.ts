import { Router } from 'express';
import { getSiteInfo, updateSiteInfo } from '../controllers/siteInfo/siteInfo';

const router = Router();

/**
 * @swagger
 * tags:
 *   - name: SiteInfo
 *     description: API for managing site information
 */

/**
 * @swagger
 * /site-info:
 *   get:
 *     summary: Retrieve the site information
 *     description: Get the site title, name, slogan, and other details.
 *     tags: [SiteInfo]
 *     responses:
 *       200:
 *         description: Successfully retrieved site information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                 name:
 *                   type: string
 *                 slogan:
 *                   type: string
 *                 description:
 *                   type: string
 *                 logo:
 *                   type: string
 *                 icon:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 address:
 *                   type: string
 *                 map_html:
 *                   type: string
 *                 copyright_text:
 *                   type: string
 *       500:
 *         description: Server error
 */
router.get('/', getSiteInfo);

/**
 * @swagger
 * /site-info:
 *   put:
 *     summary: Update the site information
 *     description: Update site title, name, slogan, and other details.
 *     tags: [SiteInfo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               name:
 *                 type: string
 *               slogan:
 *                 type: string
 *               description:
 *                 type: string
 *               logo:
 *                 type: string
 *               icon:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               map_html:
 *                 type: string
 *               copyright_text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated site information.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server error.
 */
router.put('/', updateSiteInfo);

export default router;
