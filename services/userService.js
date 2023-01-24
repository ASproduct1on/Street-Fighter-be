import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user

  getAllUsers() {
    const allUsers = userRepository.getAll();
    if (!allUsers) {
      throw "Users not found";
    }
    return allUsers;
  }

  getOneUser(search) {
    const item = userRepository.getOne(search);
    if (!item) {
      return null;
    }
    return item;
  }

  createUser(data) {
    const newUser = userRepository.create(data);
    if (!newUser) {
      throw "User can not be created";
    }
    return newUser;
  }

  updateUser(id, data) {
    const user = this.getOneUser((user) => user.id === id);
    const updatedUser = { ...user };

    for (const key in updatedUser) {
      if (key in data) {
        updatedUser[key] = data[key];
      }
    }

    const res = userRepository.update(id, updatedUser);
    if (!res) {
      throw "User can not be updated";
    }
    return res;
  }

  deleteUser(id) {
    const removedUser = userRepository.delete(id);
    if (!removedUser) {
      throw "User can not be deleted";
    }
    return removedUser;
  }
}

const userService = new UserService();
console.log(`pokazy: ${userService}`);

export { userService };
