import React from 'react'
import { Link } from 'react-router-dom'

const NoPermissions = () => {
    return (
        <div className='permissionspage'>
            <h1>Seems like you dont have permissions to access this page</h1>
            <Link to={'/'}><button><h3>Back Home</h3></button></Link>
        </div>
    )
}

export default NoPermissions