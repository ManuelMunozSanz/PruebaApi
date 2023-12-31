const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT ?? 3000;

const corsOptions = {
  origin: "https://mi-dominio-permitido.com",
  optionsSuccessStatus: 200, // Algunos navegadores antiguos (IE11, varias versiones de Safari) pueden no entender la respuesta predeterminada 204.
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

app.listen(PORT, () => {
  console.log(`La aplicación está escuchando en http://localhost:${PORT}`);
});
