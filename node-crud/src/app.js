import express from "express";
import morgan from "morgan";

const app = express();

// settings
app.set("port", 5000);
// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
import amigosRoutes from "./routes/amigos.route";
app.use("/api/friends", amigosRoutes);

export default app;
