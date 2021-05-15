import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getUserRepo, setCurrentPage} from '../../../../redux/user-Reducer'
import {Repositories} from './Repositories'
import {CountOfRepositories} from './CountOfRepositories'
import {AppStateType} from "../../../../redux/redux-store";
import {Paginator} from "../../../CommonComponents/Paginator/Paginator";

type PropsType = { countOfPublicRepositories: number, login: string }

export const ProfileRepo:React.FC<PropsType> = ({countOfPublicRepositories, login}) => {

    const dispatch = useDispatch()
    const repositories = useSelector((state: AppStateType) => state.user.repositories)
    const repositoriesOnPage = useSelector((state: AppStateType) => state.user.per_page)
    const totalRepositoriesCount = useSelector((state: AppStateType) => state.user.totalRepositoriesCount)
    const currentPage = useSelector((state: AppStateType) => state.user.currentPage)
    //const searchRequest = useSelector((state: AppStateType) => state.user.user.login)

    const handlerPageChanged = useCallback((page) => {
        dispatch(setCurrentPage(page));
        dispatch(getUserRepo(login, page, repositoriesOnPage))
    }, []);

    return <div className={'profileRepoWrapper'}>
        <CountOfRepositories countOfPublicRepositories={countOfPublicRepositories} />
        <Repositories repositories={repositories}/>

        <Paginator totalItemsCount={totalRepositoriesCount}
                   pageSize={repositoriesOnPage}
                   currentPage={currentPage}
                   onPageChanged={handlerPageChanged}
        />
    </div>
}


