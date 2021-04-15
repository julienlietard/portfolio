//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Nom de l'application en local
app.use(express.static('./dist/my-portfolio'));

// Nom de l'application serveur
app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/portfolio-julienlietard/'}),
);

// Port du serveur
app.listen(process.env.PORT || 8080);
