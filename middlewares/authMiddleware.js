import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Token manquant.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Données du token décodé :', decoded); // Vérifiez le rôle ici
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Token invalide.' });
  }
};

export const authorizeRole = (roles) => {
  return (req, res, next) => {
    console.log('Rôle utilisateur :', req.user.role); // Vérifiez la valeur du rôle
    console.log('Rôles autorisés :', roles);

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Accès interdit.' });
    }
    next();
  };
};
