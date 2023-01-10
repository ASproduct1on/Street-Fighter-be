import { BaseRepository } from "./baseRepository.js";

class FighterRepository extends BaseRepository {
  constructor() {
    super("fighters");
  }
}

const fighterRepository = new FighterRepository();

export { fighterRepository };
