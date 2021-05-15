import axios from 'axios'

const instance = axios.create({baseURL: `https://api.github.com/`})

export const userAPI = {
    getUserApi(username: string) {
        return instance.get(`users/${username}`,
            // @ts-ignore
            {username: 'username'})
            .then(response => response.data)
    },
    getUserRepoApi(username: string, currentPage: number | unknown, repositoriesOnPage: number | unknown) {
        return instance.get(`users/${username}/repos?page=${currentPage}&per_page=${repositoriesOnPage}`,
            // @ts-ignore
            {username: 'username'})
            .then(response => response.data)
    }
}


