require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// dummy daten
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// GET 
app.get("/api/items", (req, res) => {
  res.json(items);
});

// POST 
app.post("/api/items", (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// DELETE 
app.delete("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter((item) => item.id !== id);
  res.status(204).send();
});

// server starten
app.listen(PORT, () => {
  console.log(`server läuft auf Port ${PORT}`);
});