import express from 'express';
import Role from '../models/Role.js';

const router = express.Router();

// Ajouter un rôle fictif
router.post('/', async (req, res) => {
  try {
    const role = await Role.create({ nom: req.body.nom });
    res.status(201).json(role);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
