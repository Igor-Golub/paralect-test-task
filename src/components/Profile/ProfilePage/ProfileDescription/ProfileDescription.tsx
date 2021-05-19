import React from 'react';
import { ProfileAvatar } from './ProfileAvatar/ProfileAvatar';
import { ProfileInformation } from './ProfileInformation/ProfileInformation';
import { userType } from '../../../../types/types';

type PropsType = {
    user: userType
}

export const ProfileDescription:React.FC<PropsType> = ({ user }) => {

    return <div className={ 'userDescriptionWrapper' }>
        <ProfileAvatar avatar_url={ user.avatar_url }/>
        <ProfileInformation name={ user.name } login={ user.login } html_url={ user.html_url }
                            followers={ user.followers } following={ user.following }
        />
    </div>
}
