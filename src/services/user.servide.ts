import { User } from "~/models/user.model";


export class UsersService {
  public get(id: number, name?: string): User {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public create(userCreationParams: User): User {
    return {
      ...userCreationParams,
    };
  }
}