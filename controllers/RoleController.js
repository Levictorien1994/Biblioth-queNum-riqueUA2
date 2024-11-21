import Role from '../models/Role.js';

// Obtenir tous les rôles
export const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des rôles.' });
  }
};

// Obtenir un rôle par ID
export const getRoleById = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      return res.status(404).json({ error: 'Rôle non trouvé.' });
    }
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du rôle.' });
  }
};

// Ajouter un rôle
export const createRole = async (req, res) => {
  try {
    const nouveauRole = await Role.create(req.body);
    res.status(201).json(nouveauRole);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du rôle.' });
  }
};

// Mettre à jour un rôle
export const updateRole = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      return res.status(404).json({ error: 'Rôle non trouvé.' });
    }
    await role.update(req.body);
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du rôle.' });
  }
};

// Supprimer un rôle
export const deleteRole = async (req, res) => {
  const { id } = req.params;
  try {
    const role = await Role.findByPk(id);
    if (!role) {
      return res.status(404).json({ error: 'Rôle non trouvé.' });
    }
    await role.destroy();
    res.status(200).json({ message: 'Rôle supprimé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du rôle.' });
  }
};
