import AvisMock from '../data/AvisMock.js';
import MembresMock from '../data/MembresMock.js';
import LivresMock from '../data/LivresMock.js';

// Récupérer tous les avis
export const getAllAvis = (req, res) => {
  res.status(200).json(AvisMock);
};

// Ajouter un nouvel avis
export const createAvis = (req, res) => {
  const { membre_id, livre_id, note, commentaire } = req.body;

  // Vérifier les relations et les contraintes
  const membre = MembresMock.find((m) => m.membre_id === membre_id);
  const livre = LivresMock.find((l) => l.livre_id === livre_id);

  if (!membre) return res.status(404).json({ error: 'Membre non trouvé' });
  if (!livre) return res.status(404).json({ error: 'Livre non trouvé' });
  if (note < 1 || note > 5) return res.status(400).json({ error: 'La note doit être comprise entre 1 et 5.' });

  const newAvis = {
    avis_id: AvisMock.length + 1,
    membre_id,
    livre_id,
    note,
    commentaire: commentaire || '',
  };

  AvisMock.push(newAvis);
  res.status(201).json(newAvis);
};

// Modifier un avis existant
export const updateAvis = (req, res) => {
  const { id } = req.params;
  const avisIndex = AvisMock.findIndex((a) => a.avis_id === parseInt(id));
  if (avisIndex === -1) return res.status(404).json({ error: 'Avis non trouvé' });

  AvisMock[avisIndex] = { ...AvisMock[avisIndex], ...req.body };
  res.status(200).json(AvisMock[avisIndex]);
};

// Supprimer un avis
export const deleteAvis = (req, res) => {
  const { id } = req.params;
  const avisIndex = AvisMock.findIndex((a) => a.avis_id === parseInt(id));
  if (avisIndex === -1) return res.status(404).json({ error: 'Avis non trouvé' });

  AvisMock.splice(avisIndex, 1);
  res.status(200).json({ message: 'Avis supprimé' });
};
// Récupérer les avis avec des filtres
export const getFilteredAvis = (req, res) => {
    const { membre_id, livre_id, note } = req.query;
  
    let filteredAvis = AvisMock;
  
    // Filtrer par membre_id
    if (membre_id) {
      filteredAvis = filteredAvis.filter((avis) => avis.membre_id === parseInt(membre_id));
    }
  
    // Filtrer par livre_id
    if (livre_id) {
      filteredAvis = filteredAvis.filter((avis) => avis.livre_id === parseInt(livre_id));
    }
  
    // Filtrer par note
    if (note) {
      filteredAvis = filteredAvis.filter((avis) => avis.note === parseInt(note));
    }
  
    res.status(200).json(filteredAvis);
  };
  