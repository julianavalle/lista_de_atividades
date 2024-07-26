const express = require('express');
const router = express.Router();
const activityController = require('../controller/activityController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Activity:
 *       type: object
 *       required:
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           description: ID da atividade
 *         description:
 *           type: string
 *           description: Descrição da atividade
 *         completed:
 *           type: boolean
 *           description: Status de conclusão da atividade
 *       example:
 *         id: 1
 *         description: Escutar k-pop
 *         completed: false
 */

/**
 * @swagger
 * /api/activities:
 *   post:
 *     summary: Cria uma nova atividade
 *     tags: [Activity]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Activity'
 *     responses:
 *       201:
 *         description: A atividade foi criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       400:
 *         description: Algum erro ocorreu
 */
router.post('/activities', activityController.create);

/**
 * @swagger
 * /api/activities/{id}:
 *   put:
 *     summary: Atualiza uma atividade existente
 *     tags: [Activity]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da atividade
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Activity'
 *     responses:
 *       200:
 *         description: A atividade foi atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       400:
 *         description: Algum erro ocorreu
 *       404:
 *         description: Atividade não encontrada
 */
router.put('/activities/:id', activityController.update);

/**
 * @swagger
 * /api/activities:
 *   get:
 *     summary: Lista todas as atividades
 *     tags: [Activity]
 *     responses:
 *       200:
 *         description: Lista de atividades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Activity'
 *       500:
 *         description: Algum erro ocorreu
 */
router.get('/activities', activityController.list);

/**
 * @swagger
 * /api/activities/{id}:
 *   get:
 *     summary: Obtém uma atividade pelo ID
 *     tags: [Activity]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da atividade
 *     responses:
 *       200:
 *         description: Atividade encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Activity'
 *       404:
 *         description: Atividade não encontrada
 *       500:
 *         description: Algum erro ocorreu
 */
router.get('/activities/:id', activityController.findById);

/**
 * @swagger
 * /api/activities/{id}:
 *   delete:
 *     summary: Exclui uma atividade pelo ID
 *     tags: [Activity]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da atividade
 *     responses:
 *       204:
 *         description: Atividade excluída com sucesso
 *       404:
 *         description: Atividade não encontrada
 *       500:
 *         description: Algum erro ocorreu
 */
router.delete('/activities/:id', activityController.delete);

module.exports = router;