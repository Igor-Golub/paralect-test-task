import React from "react";

type PropsType = { avatar_url: string }

export const ProfileAvatar:React.FC<PropsType> = ({avatar_url}) => {
    return <img alt='#' src={avatar_url} className={'profileAvatar'}/>
}