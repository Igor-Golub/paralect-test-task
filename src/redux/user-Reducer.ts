import {userAPI} from '../api/api'
import {userType} from '../types/types'
import {AppStateType} from './redux-store'
import {ThunkAction} from 'redux-thunk'

const SET_USER: string = 'Startup-Summer/user/SET_USER'
const SET_USER_REPOSITORIES: string = 'Startup-Summer/user/SET_USER_REPOSITORIES'
const TOGGLE_IS_FETCHING: string = 'Startup-Summer/user/TOGGLE_IS_FETCHING'
const SET_CURRENT_PAGE: string = 'Startup-Summer/user/SET_CURRENT_PAGE'
const SET_TOTAL_REPOSITORIES_COUNT: string = 'Startup-Summer/user/SET_TOTAL_REPOSITORIES_COUNT'
const SET_ERROR_USER_NAME: string = 'Startup-Summer/user/SET_ERROR_USER_NAME'
const SET_ERROR_USER_NAME_MESSAGE: string = 'Startup-Summer/user/SET_ERROR_USER_NAME_MESSAGE'
const PPPPPPPPPPPPPPPPPPP: string = 'Startup-Summer/user/PPPPPPPPPPPPPPPPPPP'

type InitialStateType = typeof initialState
const initialState = {
    user: null as userType | null,
    repositories: [] as Array<any>,
    isFetching: false,
    per_page: 4,
    totalRepositoriesCount: 0,
    currentPage: 1,
    isErrorName: false,
    errorNameMessage: null as string | null
}

const userReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER:
            return {...state, user: action.user}
        case SET_USER_REPOSITORIES:
            return {...state, repositories: action.repositories}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_REPOSITORIES_COUNT:
            return {...state, totalRepositoriesCount: action.totalRepositoriesCount}
        case SET_ERROR_USER_NAME:
            return {...state, isErrorName: action.isErrorName}
        case SET_ERROR_USER_NAME_MESSAGE:
            return {...state, errorNameMessage: action.errorNameMessage}
        default:
            return state
    }
}

type ActionsTypes = SetUserActionType | SetUserRepoActionType
                    | ToggleIsFetchingActionType | SetCurrentPageActionType
                    | SetTotalRepositoriesCountActionType | SetErrorNameActionType
                    | SetErrorNameMessageActionType

type SetUserActionType = { type: typeof SET_USER, user: userType }
export const setUser = (user: userType): SetUserActionType => ({
    type: SET_USER,
    user
})

type SetUserRepoActionType = { type: typeof SET_USER_REPOSITORIES, repositories: Array<any> }
export const setUserRepo = (repositories: Array<any>): SetUserRepoActionType => ({
    type: SET_USER_REPOSITORIES,
    repositories
})

type ToggleIsFetchingActionType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

type SetCurrentPageActionType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})

type SetTotalRepositoriesCountActionType = { type: typeof SET_TOTAL_REPOSITORIES_COUNT, totalRepositoriesCount: number }
export const setTotalRepositoriesCount = (totalRepositoriesCount: number): SetTotalRepositoriesCountActionType => ({
    type: SET_TOTAL_REPOSITORIES_COUNT,
    totalRepositoriesCount
})

type SetErrorNameActionType = { type: typeof SET_ERROR_USER_NAME, isErrorName: boolean }
export const setErrorName = (isErrorName: boolean): SetErrorNameActionType => ({type: SET_ERROR_USER_NAME, isErrorName})

type SetErrorNameMessageActionType = { type: typeof SET_ERROR_USER_NAME_MESSAGE, errorNameMessage: string }
export const setErrorNameMessage = (errorNameMessage: string): SetErrorNameMessageActionType => ({
    type: SET_ERROR_USER_NAME_MESSAGE,
    errorNameMessage
})

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>
export const getUser = (searchRequest: string): ThunkType => {
    return async (dispatch) => {
        try {
            dispatch(toggleIsFetching(true))
            const userData = await userAPI.getUserApi(searchRequest)
            dispatch(toggleIsFetching(false))
            dispatch(setUser(userData))
            dispatch(setTotalRepositoriesCount(userData.public_repos))
        } catch (error) {
            dispatch(setErrorNameMessage(error.response.data.message))
            dispatch(setErrorName(error.isAxiosError))
        }
    }
}

export const getUserRepo = (searchRequest: string, currentPage: number | unknown,
                            repositoriesOnPage: number | unknown): ThunkType => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        const reposData = await userAPI.getUserRepoApi(searchRequest, currentPage, repositoriesOnPage)
        dispatch(toggleIsFetching(false))
        dispatch(setUserRepo(reposData))
    }
}

export default userReducer;