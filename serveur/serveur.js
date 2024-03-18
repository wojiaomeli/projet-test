const express = require('express');
const app = express();

// Endpoint de test
app.get('/', (req, res) => {
  res.send('Le serveur fonctionne !');
});

// Port d'écoute
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port ${PORT}`);
});