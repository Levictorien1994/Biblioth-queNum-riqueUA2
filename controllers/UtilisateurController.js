import Utilisateur from '../models/Utilisateur.js';

// Obtenir tous les utilisateurs
export const getAllUtilisateurs = async (req, res) => {
  try {
    const utilisateurs = await Utilisateur.findAll();
    res.status(200).json(utilisateurs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs.' });
  }
};

// Obtenir un utilisateur par ID
export const getUtilisateurById = async (req, res) => {
  const { id } = req.params;
  try {
    const utilisateur = await Utilisateur.findByPk(id);
    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
    res.status(200).json(utilisateur);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur.' });
  }
};

// Ajouter un utilisateur
export const createUtilisateur = async (req, res) => {
  try {
    const nouvelUtilisateur = await Utilisateur.create(req.body);
    res.status(201).json(nouvelUtilisateur);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur.' });
  }
};

// Mettre à jour un utilisateur
export const updateUtilisateur = async (req, res) => {
  const { id } = req.params;
  try {
    const utilisateur = await Utilisateur.findByPk(id);
    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
    await utilisateur.update(req.body);
    res.status(200).json(utilisateur);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'utilisateur.' });
  }
};

// Supprimer un utilisateur
export const deleteUtilisateur = async (req, res) => {
  const { id } = req.params;
  try {
    const utilisateur = await Utilisateur.findByPk(id);
    if (!utilisateur) {
      return res.status(404).json({ error: 'Utilisateur non trouvé.' });
    }
    await utilisateur.destroy();
    res.status(200).json({ message: 'Utilisateur supprimé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'utilisateur.' });
  }
};
