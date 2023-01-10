import { BaseRepository } from "./baseRepository.js";

class UserRepository extends BaseRepository {
  constructor() {
    super("users");
  }
}

const userRepository = new UserRepository();

export { userRepository };
