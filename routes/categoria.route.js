const controller = require("../controllers/categoria.controller");
const express = require("express");
const router = express.Router();

router.post("/categoria", controller.createCategoria);
router.get("/categoria", controller.getCategorias);
router.put("/categoria/:id", controller.updateCategoria);
router.delete("/categoria/:id", controller.deleteCategoria);

module.exports = router;
