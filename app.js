const express = require("express");
const connectDB = require("./config/db.js");
const categoriaRoutes = require("./routes/categoria.route.js");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api", categoriaRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
