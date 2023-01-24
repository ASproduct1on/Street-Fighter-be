import { USER } from "../models/user.js";
import { userService } from "../services/userService.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const { id, ...rest } = req.body;

  if (id || !isModelComplete(rest) || !isBodyValid(rest)) {
    res.status(400);
    res.err = "User entity to create is not valid";
  }
  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update
  const { id, ...rest } = req.body;

  if (id || !isBodyValid(rest) || isEmptyObject(rest)) {
    res.status(400);
    res.err = "User entity to update is not valid";
  }

  next();
};

const isModelComplete = (data) => {
  for (const key in USER) {
    if (key !== "id" && !data[key]) {
      return false;
    }
  }
  return true;
};

const isEmptyObject = (data) =>
  Object.keys(data).length === 0 && data.constructor === Object;

const isBodyValid = (data) => {
  for (const key in data) {
    if (!isValid(key, data) || !isPrimitive(data[key])) {
      return false;
    }
  }
  return true;
};

const isValid = (keyType, data) => {
  switch (keyType) {
    case "firstName":
      return data[keyType];
    case "lastName":
      return data[keyType];
    case "email":
      return isEmailValid(data[keyType]);
    case "phoneNumber":
      return isPhoneNumberValid(data[keyType]);
    case "password":
      return isPasswordValid(data[keyType]);
    default:
      return false;
  }
};

const isEmailValid = (email) =>
  email &&
  (typeof email === "string" || email instanceof String) &&
  email.split("@")[1] === "gmail.com" &&
  email.split("@").length === 2 &&
  isUnique(email);

const isUnique = (search) => {
  const users = userService.getAllUsers(search);
  for (const user of users) {
    if (search === user.email || search === user.phoneNumber) {
      return false;
    }
  }
  return true;
};

const isPhoneNumberValid = (phoneNumber) =>
  /^\+380\d{9}$/.test(phoneNumber) && isUnique(phoneNumber);

const isPasswordValid = (password) => password.length > 2;

const isPrimitive = (value) => typeof value !== "object";

export { createUserValid, updateUserValid };
