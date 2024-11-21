import Membre from '../models/Membre.js';

// Récupérer tous les membres
export const getAllMembres = async (req, res) => {
  try {
    const membres = await Membre.findAll();
    res.status(200).json(membres);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des membres' });
  }
};

// Récupérer un membre par ID
export const getMembreById = async (req, res) => {
  try {
    const membre = await Membre.findByPk(req.params.id);
    if (!membre) {
      return res.status(404).json({ error: 'Membre non trouvé' });
    }
    res.status(200).json(membre);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du membre' });
  }
};

// Créer un membre
export const createMembre = async (req, res) => {
  try {
    const membre = await Membre.create(req.body);
    res.status(201).json(membre);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du membre' });
  }
};

// Mettre à jour un membre
export const updateMembre = async (req, res) => {
  try {
    const membre = await Membre.findByPk(req.params.id);
    if (!membre) {
      return res.status(404).json({ error: 'Membre non trouvé' });
    }
    await membre.update(req.body);
    res.status(200).json(membre);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du membre' });
  }
};

// Supprimer un membre
export const deleteMembre = async (req, res) => {
  try {
    const membre = await Membre.findByPk(req.params.id);
    if (!membre) {
      return res.status(404).json({ error: 'Membre non trouvé' });
    }
    await membre.destroy();
    res.status(200).json({ message: 'Membre supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du membre' });
  }
};
