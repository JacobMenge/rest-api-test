const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let items = [{ id: 1, name: "Item 1" }];

app.get("/api/items", (req, res) => res.json(items));
app.post("/api/items", (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});
app.delete("/api/items/:id", (req, res) => {
  items = items.filter((item) => item.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));