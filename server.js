import express from "express";
import dotenv from "dotenv";
dotenv.config();
import session from "express-session";
import expressLayouts from "express-ejs-layouts";

import jobRoutes from "./routes/job.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.set("view engine", "ejs");

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
);

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(expressLayouts);
app.use((req, res, next) => {
    res.locals.userName = req.session.userName;
    next();
})

app.use(jobRoutes);
app.use(userRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
});