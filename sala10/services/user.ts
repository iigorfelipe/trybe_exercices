import UserModel from "../models/user";
import IUser from "../interfaces/userInterface";

class UserService {
  public model = new UserModel();

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();

    return users;
  };

  public async getById(id: string): Promise<IUser[]> {
    const user = await this.model.getById(id);

    return user;
  };
};

export default UserService;
