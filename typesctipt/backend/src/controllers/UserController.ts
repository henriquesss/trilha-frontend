import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
    { name: 'Usuário teste', email: 'email@teste.com'}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService

        const to = {
            name: 'Nome teste',
            email: 'email@teste.com'
        }

        const message = {
            subject: 'Bem vindo ao sistema',
            body: 'Lorem ipsum dollor sit ammet'
        }

        emailService.sendMail({ to, message })

        /*
            Pode fazer desse jeito esquisito aqui também ó

            emailService.sendMail({
                to: { name: 'Nome teste', email: 'email@teste.com' },
                message: { subject: 'Bem vindo ao sistema', body: 'Lorem ipsum dollor sit ammet' }
            })
         */

        return res.json({ success: true })
    }

}