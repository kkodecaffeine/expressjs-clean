import { UserRequestModel } from "../../../domain/models/user";
import { UserDatasource } from "../../interfaces/datasources/user-datasource";
import { NoSQLWrapper } from "../../interfaces/datasources/nosql-wrapper";

export class UserDataSourceImpl implements UserDatasource {
    private db: NoSQLWrapper
    constructor(db: NoSQLWrapper) {
        this.db = db
    }

    async create(model: UserRequestModel) {
        this.db.insertOne(model)
    }
}