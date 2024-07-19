import express from "express";
import userRoutes from "./routes/user.routes.js";
import loginRoutes from "./routes/login.routes.js";
const app = express();
app.use(userRoutes);
app.use(loginRoutes);
app.use(express.static('public'));

export default app;
