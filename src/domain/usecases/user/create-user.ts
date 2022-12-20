import { UserRequestModel } from "../../models/user";
import { UserRepository } from "../../interfaces/repositories/user-repository";
import { CreateUserUsecase } from "../../interfaces/usecases/create-user-usecase";


export class CreateUser implements CreateUserUsecase {
    userRepo: UserRepository
    constructor(userRepo: UserRepository) {
        this.userRepo = userRepo
    }

    async execute(model: UserRequestModel) {
        await this.userRepo.createUser(model)

    }
}
