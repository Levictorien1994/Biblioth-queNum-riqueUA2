export const getAllLivres = (req, res) => {
    res.status(200).json({ message: 'Récupération des livres.' });
  };
  
  export const createLivre = (req, res) => {
    res.status(201).json({ message: 'Création d\'un livre.' });
  };
  
  export const updateLivre = (req, res) => {
    res.status(200).json({ message: 'Mise à jour du livre.' });
  };
  
  export const deleteLivre = (req, res) => {
    res.status(200).json({ message: 'Suppression du livre.' });
  };
  