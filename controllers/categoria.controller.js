const categoria = require("../models/categoria");

exports.createCategoria = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;
    await categoria.create({ nombre, descripcion });
    res.status(201).json({ message: "Categoria creada con exito" });
  } catch (error) {
    res.status(500).json({ message: "Error creando la categoria" });
  }
};

exports.getCategorias = async (req, res) => {
  try {
    const categorias = await categoria.find();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo las categorias" });
  }
};

exports.updateCategoria = async (req, res) => {
  try {

    const { id } = req.params;
    const { nombre, descripcion } = req.body;
    const updatedCategoria = await categoria.findByIdAndUpdate(
      id,
      { nombre, descripcion },
      { new: true }
    );

    if (!updatedCategoria) {
      return res.status(404).json({ message: "Categoria no encontrada" });
    }

    res.status(200).json({
      message: "Categoria actualizada con éxito",
      categoria: updatedCategoria,
    });

  } catch (error) {
    res.status(500).json({ message: "Error acutalizndo la categoria" });
  }
}

exports.deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const categoriaEliminada = await categoria.findByIdAndDelete(id);
    if (!categoriaEliminada) {
      return res.status(404).json({ message: "Categoria no encontrada" });
    }
    res.status(200).json({ message: "Categoria eliminada con exito" });
  } catch (error) {
    return res.status(500).json({ message: "Error eliminando la categoria" });
  }
}
