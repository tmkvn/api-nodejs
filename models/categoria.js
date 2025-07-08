const mongoose = require("mongoose");
const CategoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: String,
});

module.exports = mongoose.model("Categoria", CategoriaSchema);
