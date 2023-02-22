import axios from "axios"

const API = {
    users: axios.create({
        baseURL: 'https://63f6079659c944921f6b8e39.mockapi.io/users'
    }),

    posts: axios.create({
        baseURL: 'https://63f6079659c944921f6b8e39.mockapi.io/posts'
    }),

    register(user) {
        this.users.post('/', user)
    },

    async addPost(content) {
        const response = await this.posts.post('/', content)
        return response
    },

    async deletePosts() {
        const allPosts = await this.getPosts()
        allPosts.forEach(element => {
            this.posts.delete(`/${element.id}`)

        })
    },

    async getPosts() {
        try {
            const response = await this.posts.get('/')
            return response.data
        } catch (error) {

        }
    },

    async userUnique(user) {
        try {
            const response = await this.users.get('/', {
                transformResponse: [
                    (data) => {
                        const parsedData = JSON.parse(data)
                        const result = parsedData.find(users => {
                            return users.username.toLowerCase() === user.toLowerCase()
                        })
                        return result
                    }
                ]
            })
            return response.data
        } catch (error) {

        }
    },

    async userCanlog(user, password) {
        try {
            const response = await this.users.get('/', {
                transformResponse: [
                    (data) => {
                        const parsedData = JSON.parse(data)
                        const result = parsedData.find(users => {
                            return users.username.toLowerCase() === user.toLowerCase() && users.password === password
                        })
                        return result
                    }
                ]
            })
            return response.data
        } catch (error) {

        }
    }

}

export default API