import express from "express";
import morgan from "morgan";

const app = express();

// settings
app.set("port",5000);
// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes

app.get("/",(req,res)=>res.send("entro "));

export default app;