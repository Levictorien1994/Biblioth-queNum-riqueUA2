import express from 'express';
import Paiement from '../models/Paiement.js';
import Membre from '../models/Membre.js';

const router = express.Router();

// Ajouter un paiement fictif
router.post('/', async (req, res) => {
  try {
    const paiement = await Paiement.create(req.body);
    res.status(201).json(paiement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// Récupérer tous les paiements d'un membre
router.get('/membre/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const paiements = await Paiement.findAll({
        where: { membre_id: id },
        include: {
          model: Membre,
          as: 'membre', // Alias défini dans les relations
        },
      });
      res.status(200).json(paiements);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  
  

export default router;
