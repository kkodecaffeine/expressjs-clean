import server from './server'
import UserRouter from './presentation/routers/user-router'
import { MongoClient } from 'mongodb'
import { NoSQLWrapper } from './persistence/interfaces/datasources/nosql-wrapper'
import { UserDataSourceImpl } from './persistence/datasources/mongodb/user-datasource'
import { UserRepositoryImpl } from './domain/repositories/user-repository'
import { CreateUser } from './domain/usecases/user/create-user'

async function getMongoDS() {
    const client: MongoClient = new MongoClient("mongodb://localhost:27017")
    await client.connect()
    
    const db = client.db("users");
    const userDatabase: NoSQLWrapper = {
        insertOne: (doc) => db.collection("users").insertOne(doc)
    }

    return new UserDataSourceImpl(userDatabase);
}

(async () => {
    const dataSource = await getMongoDS();
    const userMiddleware = UserRouter(
        new CreateUser(new UserRepositoryImpl(dataSource)),
    )

    server.use("/users", userMiddleware)
    server.listen(8080, () => console.log("Running on http://localhost:8080"))
})()