import Auteur from './Auteur.js';
import Livre from './Livre.js';
import Categorie from './Categorie.js';
import Membre from './Membre.js';
import Emprunt from './Emprunt.js';
import Reservation from './Reservation.js';
import Avis from './Avis.js';
import Role from './Role.js';
import Utilisateur from './Utilisateur.js';
import Paiement from './Paiement.js';

// Relations livre auteur
Auteur.hasMany(Livre, { foreignKey: 'auteur_id' });
Livre.belongsTo(Auteur, { foreignKey: 'auteur_id' });
//relation utilisateur et role
Role.hasMany(Utilisateur, { foreignKey: 'role_id' });
Utilisateur.belongsTo(Role, { foreignKey: 'role_id' });
//relation paiement mrmbre
Membre.hasMany(Paiement, { foreignKey: 'membre_id' });
Paiement.belongsTo(Membre, { foreignKey: 'membre_id' });
// relation livre categorie
Categorie.hasMany(Livre, { foreignKey: 'categorie_id' });
Livre.belongsTo(Categorie, { foreignKey: 'categorie_id' });
// relation emprunt membre
Membre.hasMany(Emprunt, { foreignKey: 'membre_id' });
Emprunt.belongsTo(Membre, { foreignKey: 'membre_id' });
//relation reservation membre
Membre.hasMany(Reservation, { foreignKey: 'membre_id' });
Reservation.belongsTo(Membre, { foreignKey: 'membre_id' });
//relation avis membre
Membre.hasMany(Avis, { foreignKey: 'membre_id' });
Avis.belongsTo(Membre, { foreignKey: 'membre_id' });
//relation emprut livre
Livre.hasMany(Emprunt, { foreignKey: 'livre_id' });
Emprunt.belongsTo(Livre, { foreignKey: 'livre_id' });
//relation reservation livre
Livre.hasMany(Reservation, { foreignKey: 'livre_id' });
Reservation.belongsTo(Livre, { foreignKey: 'livre_id' });
// avis livre
Livre.hasMany(Avis, { foreignKey: 'livre_id' });
Avis.belongsTo(Livre, { foreignKey: 'livre_id' });
//relation utilisateur role
Role.hasMany(Utilisateur, { foreignKey: 'role_id' });
Utilisateur.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });
Membre.hasMany(Paiement, { foreignKey: 'membre_id' });
Paiement.belongsTo(Membre, { foreignKey: 'membre_id', as: 'membre' });



export { Auteur, Livre, Categorie, Membre, Emprunt, Reservation, Avis,  Role, Utilisateur, Paiement };
