
import React, { useEffect, useRef, useState } from 'react'

import { AiOutlineEnter } from 'react-icons/ai';

import PostCard from '../components/PostCard'
import API from '../utils/api'

const Home = ({ user }) => {
    const [posts, setPosts] = useState([])
    const message = useRef('')
    const postsoffice = useRef(null)

    const addPost = async () => {
        const content = message.current.value
        if (content.length === 0) {
            return
        } else {
            //eslint-disable-next-line
            const response = await API.addPost({ alias: user.alias, content: content, date: `${new Date().toLocaleDateString('en-us')}`, time: `${new Date().toLocaleTimeString()}` })
            message.current.value = ''
            reloadPosts()
        }
    }

    useEffect(() => {
        reloadPosts()
    }, [])

    const reloadPosts = async () => {
        const newPosts = await API.getPosts()
        setPosts((posts) => posts = newPosts)
    }

    const handleKeyDown = (e) => {
        e.key === 'Enter' && addPost()
    }

    const scrollToBottom = () => {
        if (posts.length !== 0) {

            postsoffice.current.lastElementChild.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        scrollToBottom()
        //eslint-disable-next-line
    }, [posts])

    return (
        <>
            <div className='postoffice' ref={postsoffice}>{posts.length === 0 ? 'only crickets here be the first to post' : posts.map(element => { return <PostCard key={element.id} date={element.date} time={element.time} name={element.alias} content={element.content} /> })}</div>
            <div className='messagefield'>
                <button onClick={reloadPosts}>Reload Messages</button>
                <input ref={message} onKeyDown={handleKeyDown} type='text' name='message' />
                <button onClick={addPost}>Post <AiOutlineEnter /></button>
            </div>
        </>
    )
}

export default Home