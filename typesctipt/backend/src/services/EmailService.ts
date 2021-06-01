interface IMailTo {
    name: String
    email: String
}

interface IMailMesssage {
    subject: String
    body: String
    attachment?: String[] // Pode ter ou não 
}

// DTO = Data Transfer Object ( Conceito dentro da metodologia DDD )
interface IMessageDTO {
    to: IMailTo
    message: IMailMesssage
}

interface IEmailService {
    sendMail(request: IMessageDTO): void
}

class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}

export default EmailService