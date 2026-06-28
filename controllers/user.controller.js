import UserModel from "../models/user.model.js";
import {validationResult} from "express-validator";

export const getRegister = (req, res) => {
    res.render("register", {
        errors: [],
        oldData: '',
    });
}

export const postRegister = (req, res) => {
    const {name, email, password} = req.body;

    const users = UserModel.getUser();

    const newUser = new UserModel(
        users.length + 1,
        name, 
        email,
        password
    )

    UserModel.addUser(newUser);

    res.redirect("/login");
}

export const getLogin = (req, res) => {
    res.render("login", {
        errors: [],
        oldData: '',
    });
}

export const postLogin = (req, res) => {
    const {email, password} = req.body;

    const user = UserModel.getUserByEmail(email);

    if(user && user.password === password) {
        req.session.userId = user.id;
        req.session.userName = user.name;
        
        return res.redirect("/jobs")
    }

    res.send("Login failed");
}

export const logout = (req, res) => {
    req.session.destroy((err) => {
        if(err){
            return res.send("Logout failed");
        }
        console.log(req.session);
        res.redirect("/login");
    })
}
