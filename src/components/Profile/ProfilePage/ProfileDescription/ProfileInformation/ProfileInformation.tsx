import React from 'react';

type PropsType = {
    name: string
    login: string
    following: number
    followers: number
    html_url: string
}

export const ProfileInformation:React.FC<PropsType> = ({ name, login, following, followers, html_url }) => {
    return (
        <div className={ 'informationWrapper' }>
            <div className={ 'profileName' }>
                { name}
            </div>
            <a href={ html_url} target={'blank' } className={'profileLogin' }>
                { login }
            </a>
            <div className={ 'followerWrapper' }>
                <>
                    <i className={ 'fas fa-user-friends iconProfile' }/>
                </>
                <div className={ 'profileFollowers' }>
                    { (followers / 1000).toFixed(1) } followers
                </div>
                <>
                    <i className={ 'fas fa-user iconProfile' }/>
                </>
                <div className={ 'profileFollowing' }>
                    { following } following
                </div>
            </div>
        </div>
    )
}