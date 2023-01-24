import { check } from "express-validator";

export const RegisterSchema = [
  check("name").trim().isAlpha().withMessage("Name must be Alphabets only"),
  check("username", "username is required")
    .exists()
    .isAlphanumeric()
    .withMessage("Username should be Alphanumeric characters only")
    .trim()
    .isLength({ min: 6, max: 32 }),
  check("password", "password is required")
    .exists()
    .isLength({ min: 6, max: 100 })
    .trim(),
  check("email", "email is required").exists().isEmail(),
];
