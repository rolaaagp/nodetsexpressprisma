import express from "express";
import routerAuth from "./routes/authentication/auth.routes";
import routerCategories from "./routes/category/categories.routes";
import routerWebPay from "./routes/webpay/webpay.routes";
const cors = require("cors");

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
app.use("/auth", routerAuth);
app.use("/webpay", routerWebPay);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
