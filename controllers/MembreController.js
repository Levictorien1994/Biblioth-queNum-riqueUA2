import MembresMock from '../data/MembresMock.js';

// Récupérer tous les membres
export const getAllMembres = (req, res) => {
  res.status(200).json(MembresMock);
};

// Ajouter un nouveau membre
export const createMembre = (req, res) => {
  const newMembre = { membre_id: MembresMock.length + 1, ...req.body };
  MembresMock.push(newMembre);
  res.status(201).json(newMembre);
};

// Modifier un membre existant
export const updateMembre = (req, res) => {
  const { id } = req.params;
  const membreIndex = MembresMock.findIndex((membre) => membre.membre_id === parseInt(id));
  if (membreIndex === -1) {
    return res.status(404).json({ error: 'Membre non trouvé' });
  }
  MembresMock[membreIndex] = { ...MembresMock[membreIndex], ...req.body };
  res.status(200).json(MembresMock[membreIndex]);
};

// Supprimer un membre
export const deleteMembre = (req, res) => {
  const { id } = req.params;
  const membreIndex = MembresMock.findIndex((membre) => membre.membre_id === parseInt(id));
  if (membreIndex === -1) {
    return res.status(404).json({ error: 'Membre non trouvé' });
  }
  MembresMock.splice(membreIndex, 1);
  res.status(200).json({ message: 'Membre supprimé' });
};
export const getFilteredMembres = (req, res) => {
    const { nom, prenom, email, page = 1, limit = 10 } = req.query;
  
    let filteredMembres = MembresMock;
  
    // Filtrer par nom
    if (nom) {
      filteredMembres = filteredMembres.filter((membre) =>
        membre.nom.toLowerCase().includes(nom.toLowerCase())
      );
    }
  
    // Filtrer par prenom
    if (prenom) {
      filteredMembres = filteredMembres.filter((membre) =>
        membre.prenom.toLowerCase().includes(prenom.toLowerCase())
      );
    }
  
    // Filtrer par email
    if (email) {
      filteredMembres = filteredMembres.filter((membre) =>
        membre.email.toLowerCase().includes(email.toLowerCase())
      );
    }
  
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedMembres = filteredMembres.slice(startIndex, endIndex);
  
    res.status(200).json({
      total: filteredMembres.length,
      page: parseInt(page),
      limit: parseInt(limit),
      data: paginatedMembres,
    });
  };