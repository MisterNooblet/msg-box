import React from 'react'

const PostCard = ({ date, time, name, content }) => {
    return (
        <div className='postcard'>
            <ul>
                <li>
                    {date}
                </li>
                <li>
                    {time}
                </li>
                <li>
                    {name}
                </li>
                <li className='message'>
                    {content}
                </li>
            </ul>
        </div>
    )
}

export default PostCard