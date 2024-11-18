import EmpruntsMock from '../data/EmpruntsMock.js';
import LivresMock from '../data/LivresMock.js';
import MembresMock from '../data/MembresMock.js';

// Récupérer tous les emprunts
export const getAllEmprunts = (req, res) => {
  res.status(200).json(EmpruntsMock);
};

// Ajouter un nouvel emprunt
export const createEmprunt = (req, res) => {
  const { membre_id, livre_id, date_emprunt } = req.body;

  // Vérifier que le membre et le livre existent
  const membre = MembresMock.find((m) => m.membre_id === membre_id);
  const livre = LivresMock.find((l) => l.livre_id === livre_id);

  if (!membre) {
    return res.status(404).json({ error: 'Membre non trouvé' });
  }
  if (!livre) {
    return res.status(404).json({ error: 'Livre non trouvé' });
  }

  const newEmprunt = {
    emprunt_id: EmpruntsMock.length + 1,
    membre_id,
    livre_id,
    date_emprunt,
    date_retour: null, // Par défaut, le retour n'est pas encore fait
  };

  EmpruntsMock.push(newEmprunt);
  res.status(201).json(newEmprunt);
};

// Modifier un emprunt existant (par exemple, ajouter une date de retour)
export const updateEmprunt = (req, res) => {
  const { id } = req.params;
  const empruntIndex = EmpruntsMock.findIndex((e) => e.emprunt_id === parseInt(id));
  if (empruntIndex === -1) {
    return res.status(404).json({ error: 'Emprunt non trouvé' });
  }

  EmpruntsMock[empruntIndex] = { ...EmpruntsMock[empruntIndex], ...req.body };
  res.status(200).json(EmpruntsMock[empruntIndex]);
};

// Supprimer un emprunt
export const deleteEmprunt = (req, res) => {
  const { id } = req.params;
  const empruntIndex = EmpruntsMock.findIndex((e) => e.emprunt_id === parseInt(id));
  if (empruntIndex === -1) {
    return res.status(404).json({ error: 'Emprunt non trouvé' });
  }

  EmpruntsMock.splice(empruntIndex, 1);
  res.status(200).json({ message: 'Emprunt supprimé' });
};
export const getFilteredEmprunts = (req, res) => {
    const { membre_id, livre_id, retourne, page = 1, limit = 10 } = req.query;
  
    let filteredEmprunts = EmpruntsMock;
  
    // Filtrer par membre_id
    if (membre_id) {
      filteredEmprunts = filteredEmprunts.filter(
        (emprunt) => emprunt.membre_id === parseInt(membre_id)
      );
    }
  
    // Filtrer par livre_id
    if (livre_id) {
      filteredEmprunts = filteredEmprunts.filter(
        (emprunt) => emprunt.livre_id === parseInt(livre_id)
      );
    }
  
    // Filtrer par retourne
    if (retourne) {
      filteredEmprunts = filteredEmprunts.filter(
        (emprunt) => emprunt.retourne === (retourne === 'true')
      );
    }
  
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedEmprunts = filteredEmprunts.slice(startIndex, endIndex);
  
    res.status(200).json({
      total: filteredEmprunts.length,
      page: parseInt(page),
      limit: parseInt(limit),
      data: paginatedEmprunts,
    });
  };