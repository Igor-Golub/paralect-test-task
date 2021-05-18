import React from 'react';

type PropsType = { avatar_url?: string }

export const ProfileAvatar: React.FC<PropsType> = ({avatar_url}) => {
    return <div>
        <img alt='#' src={avatar_url} className={'profileAvatar'}/>
    </div>
}