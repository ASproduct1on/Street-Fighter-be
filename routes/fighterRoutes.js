import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter

router.get(
  "/",
  (req, res, next) => {
    try {
      const data = fighterService.getAllFighters();
      res.data = data;
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.get(
  "/:id",
  (req, res, next) => {
    try {
      const { id } = req.params;
      const data = fighterService.getOneFighter((fighter) => fighter.id === id);
      res.data = data;
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

router.post(
  "/",
  createFighterValid,
  (req, res, next) => {
    if (!res.err) {
      try {
        const data = fighterService.createFighter(req.body);
        res.data = data;
      } catch (err) {
        res.err = err;
      }
    }
    next();
  },
  responseMiddleware
);

router.put(
  "/:id",
  updateFighterValid,
  (req, res, next) => {
    if (!res.err) {
      try {
        const { id } = req.params;
        const data = fighterService.updateFighter(id, req.body);
        res.data = data;
      } catch (err) {
        res.err = err;
      }
    }
    next();
  },
  responseMiddleware
);

router.delete(
  "/:id",
  (req, res, next) => {
    try {
      const { id } = req.params;
      const data = fighterService.deleteFighter(id);
      res.data = data;
    } catch (err) {
      res.err = err;
    } finally {
      next();
    }
  },
  responseMiddleware
);

export { router };
