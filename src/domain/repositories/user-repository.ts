import { UserRequestModel } from "../models/user";
import { UserRepository } from "../interfaces/repositories/user-repository";
import { UserDatasource } from "../../persistence/interfaces/datasources/user-datasource";

export class UserRepositoryImpl implements UserRepository {
    userDatasource: UserDatasource
    constructor(userDatasource: UserDatasource) {
        this.userDatasource = userDatasource
    }

    async createUser(model: UserRequestModel) {
        this.userDatasource.create(model)
    }
}