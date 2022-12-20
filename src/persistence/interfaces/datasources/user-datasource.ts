import { UserRequestModel } from "../../../domain/models/user";

export interface UserDatasource {
    create(contact: UserRequestModel): void;
}