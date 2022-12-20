import express, { Request, Response } from 'express'
import { CreateUserUsecase } from '../../domain/interfaces/usecases/create-user-usecase'

export default function UserRouter(
    createUserUsecase: CreateUserUsecase
) {
    const router = express.Router()

    router.post('/', async (req: Request, res: Response) => {
        try {
            createUserUsecase.execute(req.body)
            res.statusCode = 201
            res.json({ message: "Created" })
        } catch (err) {
            console.log(err)
            res.status(500).send({ message: "Error saving data" })
        }
    })

    return router
}