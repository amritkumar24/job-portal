import express from "express";
import dotenv from "dotenv";
dotenv.config();
import expressLayouts from "express-ejs-layouts";
import jobRoutes from "./routes/job.routes.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(expressLayouts);

app.use(jobRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});