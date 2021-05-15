import React from "react";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileInformation} from "./ProfileInformation/ProfileInformation";

type PropsType = {
    avatar_url: string
    name: string
    login: string
    following: number
    followers: number
    html_url: string
}

export const ProfileDescription:React.FC<PropsType> = ({avatar_url, name, login, following, followers, html_url}) => {

    return <div className={'profileDescriptionWrapper'}>
        <ProfileAvatar avatar_url={avatar_url}/>
        <ProfileInformation name={name} login={login} html_url={html_url}
                            followers={followers} following={following}
        />
    </div>
}
