import { Router } from 'express';
import { getPages, getPageById, createPage } from '../controllers/Blog/pages';
import { getSections, getSectionById, createSection } from '../controllers/Blog/sections';
import { getPosts, getPostById, createPost } from '../controllers/Blog/posts';

const router = Router();

/**
 * @swagger
 * /api/blog/page:
 *   get:
 *     summary: Get all pages
 *     tags: [Pages]
 *     responses:
 *       200:
 *         description: Returns a list of pages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 */
router.get('/page', getPages);

/**
 * @swagger
 * /api/blog/page/{id}:
 *   get:
 *     summary: Get a page by ID
 *     tags: [Pages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Returns a page by ID
 *       404:
 *         description: Page not found
 */
router.get('/page/:id', getPageById);

/**
 * @swagger
 * /api/blog/page:
 *   post:
 *     summary: Create a new page
 *     tags: [Pages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Page created successfully
 */
router.post('/page', createPage);

// Page Sections

/**
 * @swagger
 * /api/blog/section:
 *   get:
 *     summary: Get all sections
 *     tags: [Sections]
 *     responses:
 *       200:
 *         description: Returns a list of sections
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.get('/section', getSections);

/**
 * @swagger
 * /api/blog/section/{id}:
 *   get:
 *     summary: Get a section by ID
 *     tags: [Sections]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Returns a section by ID
 *       404:
 *         description: Section not found
 */
router.get('/section/:id', getSectionById);

/**
 * @swagger
 * /api/blog/section:
 *   post:
 *     summary: Create a new section
 *     tags: [Sections]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Section created successfully
 */
router.post('/section', createSection);

// Blog Posts

/**
 * @swagger
 * /api/blog/post:
 *   get:
 *     summary: Get all blog posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Returns a list of blog posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   content:
 *                     type: string
 */
router.get('/post', getPosts);

/**
 * @swagger
 * /api/blog/post/{id}:
 *   get:
 *     summary: Get a blog post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Returns a blog post by ID
 *       404:
 *         description: Blog post not found
 */
router.get('/post/:id', getPostById);

/**
 * @swagger
 * /api/blog/post:
 *   post:
 *     summary: Create a new blog post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Blog post created successfully
 */
router.post('/post', createPost);

export default router;
