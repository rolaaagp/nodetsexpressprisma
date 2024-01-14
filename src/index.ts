import express from "express";
const cors = require("cors");
import routerCategories from "./routes/categories.routes";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

const port = 3000;

app.use("/categories", routerCategories);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
