import { body } from 'express-validator';
import { validationResult } from 'express-validator';


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


export const validateLoginUtilisateur = [
  body('email').isEmail().withMessage("L'email est invalide."),
  body('mot_de_passe').notEmpty().withMessage("Le mot de passe est requis."),
];

export const validateLivre = [
  body('titre').notEmpty().withMessage("Le titre est requis."),
  body('categorie_id').isInt().withMessage("La catégorie est invalide."),
  body('auteur_id').isInt().withMessage("L'auteur est invalide."),
];
export const validateEmprunt = [
    body('utilisateur_id').isInt().withMessage("L'utilisateur est invalide."),
    body('livre_id').isInt().withMessage("Le livre est invalide."),
    body('date_retour').isDate().withMessage("La date de retour est invalide."),
  ];
  export const validatePaiement = [
    body('montant').isFloat({ min: 0 }).withMessage("Le montant doit être supérieur ou égal à 0."),
    body('utilisateur_id').isInt().withMessage("L'utilisateur est invalide."),
  ];
  export const validateAvis = [
    body('livre_id').isInt().withMessage("Le livre est invalide."),
    body('note').isInt({ min: 1, max: 5 }).withMessage("La note doit être entre 1 et 5."),
    body('commentaire').optional().isString().withMessage("Le commentaire doit être une chaîne de caractères."),
  ];
  