import React from 'react'

type PropsType = { name: string, description: string, html_url: string }

export const Repository:React.FC<PropsType> = ({ name, description, html_url }) => {
    return <div className={ 'repoItemsWrapper' }>
        <div className={ 'repoItemsContent' }>
            <div className={ 'repoName' }>
                <a href={ html_url } target={ '_blank' }>{ name }</a>
            </div>
            <div className={ 'repoDescription' }>
                { description }
            </div>
        </div>
    </div>
}