import React from 'react'
import {userType} from '../../../types/types';
import {ProfileRepo} from './ProfileGitRepoInformation/ProfileRepo';
import {EmptyPageOfRepo} from '../../EmptyPageOfRepo/EmptyPageOfRepo';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';

type PropsType = {user:userType}
export const ProfileRepositoriesContainer:React.FC<PropsType> = ({ user}) => {

    const repositories = useSelector((state: AppStateType) => state.user.repositories)

    return <div className={'profileRepoWrapper'}>
        {repositories.length
            ? <ProfileRepo countOfPublicRepositories={user.public_repos}/>
            : <EmptyPageOfRepo/>}

    </div>
}
