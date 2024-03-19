const express = require('express');
const path = require('path');
const app = express();

// Définir le dossier contenant vos fichiers frontaux comme dossier statique
app.use(express.static(path.join(__dirname, 'front-fil')));

// Rediriger toutes les autres requêtes vers l'application frontale
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-fil' ,  'index.html'));
});

// Port d'écoute
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port ${PORT}`);
});