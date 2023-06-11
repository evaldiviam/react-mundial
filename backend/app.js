import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import gamesRoutes from "./routes/gamesRoutes.js";
import teamsRoutes from "./routes/teamsRoutes.js";
import playerRoutes from "./routes/playersRoutes.js";

// Conexión BD
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mundial');

const app = express();
app.use(express.json());

// Directorio con imagenes públicas accesibles directamente; uploads mapeado a images
app.use('/api/images', express.static('uploads'));

// Habilitar cors
app.use(cors());

// Rutas
app.use("/api", gamesRoutes);
app.use("/api", teamsRoutes);
app.use("/api", playerRoutes);

// Evita crash
process.on('uncaughtException', (error)  => {
  console.log('Something terrible happend: ',  error);
  process.exit(1); // salir de la aplicación
});

process.on('unhandledRejection', (error, promise) => {
  console.log(' We forgot to handle a promise rejection here: ', promise);
  console.log(' The error was: ', error );
});

// Puerto
app.listen(8800, () => {
  console.log("Connected!");
});