import { BaseRepository } from "./baseRepository.js";

class FightRepository extends BaseRepository {
  constructor() {
    super("fights");
  }
}

const fightRepository = new FightRepository();

export { fightRepository };
