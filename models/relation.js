// models/relation.js
import Auteur from './Auteur.js';
import Livre from './Livre.js';
import Categorie from './Categorie.js';
import Membre from './Membre.js';
import Emprunt from './Emprunt.js';
import Paiement from './Paiement.js';
import Reservation from './Reservation.js';
import Avis from './Avis.js';
import Utilisateur from './Utilisateur.js';
import Role from './Role.js';

// Relations
Auteur.hasMany(Livre, { foreignKey: 'auteur_id' });
Livre.belongsTo(Auteur, { foreignKey: 'auteur_id' });

Categorie.hasMany(Livre, { foreignKey: 'categorie_id' });
Livre.belongsTo(Categorie, { foreignKey: 'categorie_id' });

Livre.hasMany(Emprunt, { foreignKey: 'livre_id' });
Emprunt.belongsTo(Livre, { foreignKey: 'livre_id' });


Membre.hasMany(Emprunt, { foreignKey: 'membre_id' });
Emprunt.belongsTo(Membre, { foreignKey: 'membre_id' });

Membre.hasMany(Paiement, { foreignKey: 'membre_id' });
Paiement.belongsTo(Membre, { foreignKey: 'membre_id' });

Membre.hasMany(Reservation, { foreignKey: 'membre_id' });
Reservation.belongsTo(Membre, { foreignKey: 'membre_id' });

Livre.hasMany(Reservation, { foreignKey: 'livre_id' });
Reservation.belongsTo(Livre, { foreignKey: 'livre_id' });

Livre.hasMany(Avis, { foreignKey: 'livre_id' });
Avis.belongsTo(Livre, { foreignKey: 'livre_id' });

Membre.hasMany(Avis, { foreignKey: 'membre_id' });
Avis.belongsTo(Membre, { foreignKey: 'membre_id' });

Utilisateur.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(Utilisateur, { foreignKey: 'role_id' });
