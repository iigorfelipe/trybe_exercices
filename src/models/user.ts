import connection from "../connection";
import IUser from "../interfaces/userInterface";

class UserModel {
  public async getAll(): Promise<IUser[]> {
    const [users] = await connection.execute(`SELECT * FROM Users`)

    return users as IUser[];
  };

  public async getById(id: string): Promise<IUser[]> {
    const [user] = await connection.execute(`SELECT * FROM Users WHERE id = ?`, [id]);

    return user as IUser[];
  };

  public async createUser(name: string, email: string, password: string) {
    // const createdUser = await connection.execute(``)
  };
};

export default UserModel;