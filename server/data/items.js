// const fs = require('node:fs/promises');

// async function getStoredItems() {
//   const rawFileContent = await fs.readFile('items.json', { encoding: 'utf-8' });
//   const data = JSON.parse(rawFileContent);
//   const storedItems = data.items ?? [];
//   return storedItems;
// }

// function storeItems(items) {
//   return fs.writeFile('items.json', JSON.stringify({ items: items || [] }));
// }

// exports.getStoredItems = getStoredItems;
// exports.storeItems = storeItems;

// const fs = require('node:fs/promises');
// const path = require('path');

// // Use __dirname to get absolute path
// const dataFilePath = path.join(__dirname, 'items.json');

// async function getStoredItems() {
//   const rawFileContent = await fs.readFile(dataFilePath, { encoding: 'utf-8' });
//   const data = JSON.parse(rawFileContent);
//   const storedItems = data.items ?? [];
//   return storedItems;
// }

// function storeItems(items) {
//   return fs.writeFile(dataFilePath, JSON.stringify({ items: items || [] }, null, 2));
// }

// exports.getStoredItems = getStoredItems;
// exports.storeItems = storeItems;

const path = require("path");
const fs = require("node:fs/promises");

// Use absolute path to items.json in server root
const itemsFilePath = path.join(__dirname, "..", "items.json");

async function getStoredItems() {
  const rawFileContent = await fs.readFile(itemsFilePath, { encoding: "utf-8" });
  const data = JSON.parse(rawFileContent);
  return data.items ?? [];
}

function storeItems(items) {
  return fs.writeFile(itemsFilePath, JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;
