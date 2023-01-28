import express from "express";
import mongoose from "mongoose";
import AuthMiddleware from "./middlewares/AuthMiddleware.js";
import apiRoute, { apiProtected } from "./routes/api.js";
import { DB_CONNECT } from "./utils/constants.js";
import cors from 'cors';
const app = express();

mongoose.connect(DB_CONNECT, { useNewUrlParser: true }, (e) => console.log(e));
const PORT = 8000;

app.use(cors())
app.use(express.json());
app.use("/api/", apiRoute);
app.use('/api/',AuthMiddleware, apiProtected)

app.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`));
