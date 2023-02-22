import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Header = ({ setIsLogged }) => {
    return (
        <>
            <main>
                <header>
                    <nav className='nav'>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                            <li>
                                <Link to='/admin'>Admin panel</Link>
                            </li>
                            <li>
                                <Link to='/' onClick={() => setIsLogged(false)}>Log Out</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Outlet />
                <Footer />
            </main>
        </>
    )
}


export default Header