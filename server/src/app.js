import express from "express";
import mongoose from "mongoose";
import apiRoute from "./utils/api.js";
import { DB_CONNECT } from "./utils/constants.js";

const app = express();

mongoose.connect(DB_CONNECT, { useNewUrlParser: true }, (e) => console.log(e));
const PORT = 8000;

app.use(express.json());
app.use("/api/", apiRoute);

app.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`));
