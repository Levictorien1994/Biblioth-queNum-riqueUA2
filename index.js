// Importer le module Express en utilisant `import`
import express from 'express';
import user from './routes/user.js'


// Créer une instance de l'application Express
const app = express();

// Définir un port (par exemple 3000)
const PORT = 5004;

// Définir une route de base
app.get('/', (req, res) => {
    res.json({
       message:"biencenue sur notre API en node js"
    });
});
app.use("/user", user);



// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
