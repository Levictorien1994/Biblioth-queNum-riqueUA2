import express from 'express';
import Utilisateur from '../models/Utilisateur.js';
import Role from '../models/Role.js';

const router = express.Router();

// Ajouter un utilisateur fictif
router.post('/', async (req, res) => {
  try {
    const utilisateur = await Utilisateur.create(req.body);
    res.status(201).json(utilisateur);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Récupérer tous les utilisateurs avec leurs rôles
router.get('/with-roles', async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.findAll({
      include: {
        model: Role,
        as: 'role', // Alias défini dans les relations
      },
    });
    res.status(200).json(utilisateurs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
