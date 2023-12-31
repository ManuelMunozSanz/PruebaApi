const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT ?? 3000;

const corsOptions = {
  origin: "*", // Permite solicitudes desde cualquier origen.
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(PORT, () => {
  console.log(`La aplicación está escuchando en http://localhost:${PORT}`);
});
