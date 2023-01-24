import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighters
  getAllFighters() {
    const allFighters = fighterRepository.getAll();
    if (!allFighters) {
      throw "Fighters not found";
    }
    return allFighters;
  }

  getOneFighter(search) {
    const fighter = fighterRepository.getOne(search);
    if (!fighter) {
      throw "Fighter not found";
    }
    return fighter;
  }

  createFighter(data) {
    const newFighter = fighterRepository.create(data);
    if (!newFighter) {
      throw "Fighter cannot be created";
    }
    return newFighter;
  }

  updateFighter(id, data) {
    const fighter = this.getOneFighter((fighter) => fighter.id === id);
    const updatedFighter = { ...fighter };

    for (const key in updatedFighter) {
      if (key in data) {
        updatedFighter[key] = data[key];
      }
    }

    const res = fighterRepository.update(id, updatedFighter);
    if (!res) {
      throw "Fighter cannot be updated";
    }
    return res;
  }

  deleteFighter(id) {
    const removedFighter = fighterRepository.delete(id);
    if (!removedFighter) {
      throw "Fighter cannot be deleted";
    }
    return removedFighter;
  }
}

const fighterService = new FighterService();

export { fighterService };
