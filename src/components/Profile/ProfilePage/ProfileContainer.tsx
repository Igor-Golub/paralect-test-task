import React from 'react'
import { useSelector } from 'react-redux'
import { InitialPage } from '../../InitiaiPage/InitialPage'
import { AppStateType } from '../../../redux/redux-store';
import { Paginator } from '../../CommonComponents/Paginator/Paginator';
import { ProfileRepositoriesContainer } from './ProfileRepositoriesContainer';
import { Preloader } from '../../CommonComponents/Preloader/Preloader';
import { UserNotFoundPage } from '../../UserNotFoundPage/UserNotFoundPage';
import { ProfileDescription } from './ProfileDescription/ProfileDescription';

export const ProfileContainer = () => {
    const user = useSelector((state: AppStateType) => state.user.user)
    const totalRepositoriesCount = useSelector((state: AppStateType) => state.user.totalRepositoriesCount)
    const currentPage = useSelector((state: AppStateType) => state.user.currentPage)
    const repositoriesOnPage = useSelector((state: AppStateType) => state.user.per_page)
    const isFetching = useSelector((state: AppStateType) => state.user.isFetching)
    const isErrorName = useSelector((state: AppStateType) => state.user.isErrorName)

    if (user === null) {
        return <InitialPage/>
    }

    return <>
        { isErrorName
            ? <UserNotFoundPage/>
            : isFetching
                ? <Preloader/>
                : <div className={ 'profileWrapper' }>
                    <ProfileDescription user={ user }/>
                    <ProfileRepositoriesContainer user={ user }/>
                    <div className={ 'paginatorWrapper' }>
                        <Paginator totalItemsCount={ totalRepositoriesCount } pageSize={ repositoriesOnPage }
                                   currentPage={ currentPage } login={ user.login }/>
                    </div>
                </div> }

    </>
}
