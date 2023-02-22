import React from 'react'
import API from '../utils/api'

const Admin = () => {
    return (
        <div><button onClick={API.deletePosts()}>Delete Posts</button></div>
    )
}

export default Admin