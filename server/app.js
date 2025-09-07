

const express = require('express');
const bodyParser = require('body-parser');
const { getStoredItems, storeItems } = require('./data/items');
const path = require('path');

const app = express();

app.use(bodyParser.json());

// CORS (if your frontend is separate during dev)
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// ----- API ROUTES -----
app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  res.json({ items: storedItems });
});

app.get('/items/:id', async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

// ----- STATIC FRONTEND -----
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all route for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(8080, () => console.log("Server running on port 8080"));
