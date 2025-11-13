const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(require('cors')());

// Serve perfis.json via API
app.get('/api/perfis', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'perfis.json');
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'perfis.json não encontrado' });
  const raw = fs.readFileSync(filePath, 'utf8');
  try {
    const perfis = JSON.parse(raw);
    res.json(perfis);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao ler perfis.json' });
  }
});

// Optional: serve imagens se existirem em backend/data/images
app.use('/images', express.static(path.join(__dirname, 'data', 'images')));

app.listen(PORT, () => {
  console.log(`TrilharPro backend rodando em http://localhost:${PORT}`);
});
