import React from 'react'

interface IUser {
    name: string
    email: string
}

interface Props {
    user: IUser
}

/*
    É usado esse React.FC pra poder pegar o children e outros atributos
    do objeto padrão de Props, o que não da pra fazer só com Interfaces 
 */

const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <strong>Nome: {user.name }</strong><br/>
            <strong>Email: {user.email }</strong><br/>
        </div>
    )
}

export default User