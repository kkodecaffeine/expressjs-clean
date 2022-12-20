import { UserRequestModel } from "../../models/user";

export interface CreateUserUsecase {
    execute(model: UserRequestModel): void;
}