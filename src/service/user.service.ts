import { CreateUserInput, UserModel } from "../schema/user.schema";

class UserService {
  async createUser(input: CreateUserInput) {
    // Call user model to create a user
    return UserModel.create(input);
  }
}

export { UserService };
