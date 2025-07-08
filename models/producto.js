const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  categoria: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categoria",
    required: true,
  },
});

module.exports = mongoose.model("Producto", ProductoSchema);
