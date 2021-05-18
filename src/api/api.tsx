import axios, {AxiosRequestConfig} from 'axios'


interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    username: string
}

const instance = axios.create({baseURL: `https://api.github.com/`})

export const userAPI = {
    getUserApi(username: string) {
        return instance.get(`users/${username}`,
            {username: 'username'} as CustomAxiosRequestConfig)
            .then(response => response.data)
    },
    getUserRepoApi(username?: string, currentPage?: number | unknown, repositoriesOnPage?: number | unknown) {
        return instance.get(`users/${username}/repos?page=${currentPage}&per_page=${repositoriesOnPage}`,
            {username: 'username'} as CustomAxiosRequestConfig)
            .then(response => response.data)
    }
}


