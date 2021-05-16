import React from 'react'
import {useSelector} from 'react-redux'
import {ProfileRepo} from './ProfileGitRepoInformation/ProfileRepo'
import {ProfileDescription} from './ProfileDescription/ProfileDescription'
import {Preloader} from '../../CommonComponents/Preloader/Preloader'
import {InitialPage} from '../../InitiaiPage/InitialPage'
import {UserNotFoundPage} from '../../UserNotFoundPage/UserNotFoundPage'
import {EmptyPageOfRepo} from '../../EmptyPageOfRepo/EmptyPageOfRepo'
import {AppStateType} from "../../../redux/redux-store";

export const Profile = () => {
    const user = useSelector((state: AppStateType) => state.user.user)
    const isFetching = useSelector((state: AppStateType) => state.user.isFetching)
    const isErrorName = useSelector((state: AppStateType) => state.user.isErrorName)
    const repositories = useSelector((state: AppStateType) => state.user.repositories)


    console.log(user)

    if (user === null) {
        return <InitialPage/>
    }

    return <>
        {isErrorName
            ? <UserNotFoundPage />
            : isFetching
                ? <Preloader/>
                : <div className={'profileWrapper'}>
                    <ProfileDescription avatar_url={user.avatar_url} name={user.name}
                                        login={user.login} html_url={user.html_url}
                                        followers={user.followers} following={user.following}/>
                    {repositories.length
                        ? <ProfileRepo countOfPublicRepositories={user.public_repos} login={user.login}/>
                        : <EmptyPageOfRepo/>}
                </div>}
    </>
}
