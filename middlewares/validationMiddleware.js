import { body } from 'express-validator';
import { validationResult } from 'express-validator';

//validation pour utilisateur
export const validateUtilisateur = [
  body('nom').notEmpty().withMessage("Le nom d'utilisateur est requis."),
  body('email').isEmail().withMessage("L'email est invalide."),
  body('mot_de_passe')
    .isLength({ min: 6 })
    .withMessage("Le mot de passe doit contenir au moins 6 caractères."),
  body('role_id').isInt().withMessage('Le rôle est invalide.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

//validation pour login
export const validateLoginUtilisateur = [
  body('email').isEmail().withMessage("L'email est invalide."),
  body('mot_de_passe').notEmpty().withMessage("Le mot de passe est requis."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
//validation pour livre
export const validateLivre = [
  body('titre').notEmpty().withMessage("Le titre est requis."),
  body('categorie_id').isInt().withMessage("La catégorie est invalide."),
  body('auteur_id').isInt().withMessage("L'auteur est invalide."),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
//validation pour emprunt
export const validateEmprunt = [
    body('utilisateur_id').isInt().withMessage("L'utilisateur est invalide."),
    body('livre_id').isInt().withMessage("Le livre est invalide."),
    body('date_retour').isDate().withMessage("La date de retour est invalide."),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];
  //validation pour paiement
  export const validatePaiement = [
    body('montant').isFloat({ min: 0 }).withMessage("Le montant doit être supérieur ou égal à 0."),
    body('utilisateur_id').isInt().withMessage("L'utilisateur est invalide."),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];
  //validation pour avis
  export const validateAvis = [
    body('livre_id').isInt().withMessage("Le livre est invalide."),
    body('note').isInt({ min: 1, max: 5 }).withMessage("La note doit être entre 1 et 5."),
    body('commentaire').optional().isString().withMessage("Le commentaire doit être une chaîne de caractères."),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
  ];
  // validation pour categorie
  export const validateCategorie = [
    body('nom')
      .notEmpty()
      .withMessage("Le nom de la catégorie est requis.")
      .isString()
      .withMessage("Le nom de la catégorie doit être une chaîne de caractères."),
      (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        next();
      },
  ];
  
  
//validation pour auteur
export const validateAuteur = [
  body('nom')
    .notEmpty()
    .withMessage("Le nom de l'auteur est requis."),
  body('prenom')
    .optional()
    .isString()
    .withMessage("Le prénom doit être une chaîne de caractères."),
  body('nationalite')
    .optional()
    .isString()
    .withMessage("La nationalité doit être une chaîne de caractères."),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
];
// reservation
export const validateReservation = [
  body('utilisateur_id')
    .notEmpty()
    .withMessage("L'utilisateur est requis.")
    .isInt()
    .withMessage("entrer un nom valide"),
  body('livre_id')
    .notEmpty()
    .withMessage("Le livre est requis.")
    .isInt()
    .withMessage(" livre inexistant"),
  body('date_reservation')
    .optional()
    .isISO8601()
    .withMessage("La date de réservation doit être une date valide."),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
];
//role
export const validateRole = [
  body('nom')
    .notEmpty()
    .withMessage("Le nom du rôle est requis.")
    .isString()
    .withMessage("Le nom du rôle doit être une chaîne de caractères."),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    },
];

