import React from 'react'
import UserForm from '../components/UserForm'

const Login = ({ isLogged, setIsAdmin }) => {
    return (
        <div>
            <UserForm formType={'login'} isLogged={isLogged} setIsAdmin={setIsAdmin} />
        </div>
    )
}

export default Login