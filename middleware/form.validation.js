import {body} from "express-validator";

export const registerValidation = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Enter valid email"),
    body("password").isLength({min: 6}).withMessage("Password must be atleast 6 characters")
];

export const loginValidation = [
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Enter valid Email"),
    body("password").notEmpty().withMessage("Password is required")
];

export const jobValidation = [
    body("title").notEmpty().withMessage("Title is required"),
    body("company").notEmpty().withMessage("Company name is required"),
    body("location").notEmpty().withMessage("Location is required")
];