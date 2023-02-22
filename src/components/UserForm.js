import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import API from '../utils/api'
const UserForm = ({ formType, isLogged, setIsAdmin }) => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState('')
    const name = useRef('')
    const displayName = useRef('')
    const password = useRef('')

    const handleRegister = async (e) => {
        e.preventDefault()
        const isntUnique = await API.userUnique(name.current.value)
        if (!isntUnique && password.current.value.length > 5 && name.current.value.length !== 0) {
            API.register({ username: name.current.value, alias: displayName.current.value, password: password.current.value, isAdmin: false })
            handleLogin(e)
            navigate('/')
        } else if (name.current.value.length === 0) {
            setErrors('Please provide a username!')
        } else if (displayName.current.value.length === 0) {
            setErrors('Please provide a display name')
        } else if (isntUnique) {
            setErrors('Username already exists!')
        } else if (password.current.value.length <= 5) {
            setErrors('Password is too short please use a password longer than or 6 characters')
        }

    }

    const handleLogin = async (e) => {
        e.preventDefault()
        const canLogIn = await API.userCanlog(name.current.value, password.current.value)
        if (canLogIn) {
            isLogged({ username: canLogIn.username, alias: canLogIn.alias })
            if (canLogIn.isAdmin) {
                setIsAdmin(true)
            }
        } else {
            setErrors('Login failed check your credentials')
        }
    }

    if (formType === 'register') {
        return (
            <form className='userform' onSubmit={handleRegister}>
                <h1>{errors ? errors : 'Register'}</h1>
                Choose Username:
                <input ref={name} type={'text'} name={'username'} placeholder={'Username'}></input>
                Choose Display Name:
                <input ref={displayName} type={'text'} name={'displayName'} placeholder={'Display Name'}></input>
                Dont use your regular password the API is public!
                <input ref={password} type={'password'} name={'password'} placeholder={'Password'}></input>
                <button>REGISTER</button>
            </form>
        )
    } else {
        return (
            <form className='userform' onSubmit={handleLogin}>
                <h1>{errors ? errors : 'Login'}</h1>
                Username:
                <input ref={name} type={'text'} name={'username'} placeholder={'Username'}></input>
                Password:
                <input ref={password} type={'password'} name={'password'} placeholder={'Password'}></input>
                <button type='submit'>LOGIN</button>
            </form>
        )
    }


}

export default UserForm