import express from "express";
import Register from "../controllers/Register.controller.js";
import { LoginSchema } from "../validationSchema/LoginSchema.js";
import { RegisterSchema } from "../validationSchema/RegisterSchema.js";
import Login from "../controllers/Login.controller.js";
import { createTodo } from "../controllers/Todo.controller.js";
const apiRoute = express.Router();
export const apiProtected = express.Router();


apiRoute.post("/register", RegisterSchema, Register);
apiRoute.post("/login", LoginSchema, Login);

// protected routes

apiProtected.post('/createTodo', createTodo);
export default apiRoute;
