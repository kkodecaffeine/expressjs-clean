import { UserRequestModel } from "../../models/user";

export interface UserRepository {
    createUser(model: UserRequestModel): void;
}