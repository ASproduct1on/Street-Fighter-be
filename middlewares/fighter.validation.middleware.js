import { FIGHTER } from "../models/fighter.js";
import { fighterService } from "../services/fighterService.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation

  const { id, ...rest } = req.body;

  if (!req.body.health) {
    req.body.health = 100;
  }

  if (id || !isModelComplete(rest) || !isBodyValid(rest)) {
    res.status(400);
    res.err = "Fighter entity to create is not valid";
  }
  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  const { id, ...rest } = req.body;

  if (id || !isBodyValid(rest) || isEmptyObject(rest)) {
    res.status(400);
    res.err = "Fighter entity to update is not valid";
  }
  next();
};

const isModelComplete = (data) => {
  for (const key in FIGHTER) {
    if (key !== "id" && key !== "health" && !data[key]) {
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
    case "name":
      return isNameValid(data[keyType]);
    case "health":
      return isHealthValid(data[keyType]);
    case "power":
      return isPowerValid(data[keyType]);
    case "defense":
      return isDefenseValid(data[keyType]);
    default:
      return false;
  }
};

const isNameValid = (name) => {
  const fighters = fighterService.getAllFighters();
  for (const fighter of fighters) {
    if (name.toLowerCase() === fighter.name.toLowerCase()) {
      return false;
    }
  }
  return true;
};

const isPowerValid = (power) =>
  power == parseInt(power) && power < 100 && power > 1;

const isHealthValid = (health) =>
  health == parseInt(health) && health < 120 && health > 80;

const isDefenseValid = (defense) =>
  defense == parseInt(defense) && defense < 10 && defense > 1;

const isPrimitive = (value) => typeof value !== "object";

export { createFighterValid, updateFighterValid };
