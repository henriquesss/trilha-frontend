import React, { useState, useContext } from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = props => {
    const [ user, setUser ] = useState({
        name: 'Henriques'
    })

    return (
        <AuthContext.Provider value={{ user, setUser }} >
            {props.children}
        </AuthContext.Provider>
    )
}

// Hook customizado galera
export const useAuth = () => useContext(AuthContext)