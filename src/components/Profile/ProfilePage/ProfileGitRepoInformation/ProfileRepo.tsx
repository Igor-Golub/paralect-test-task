import React from 'react'
import { useSelector } from 'react-redux'
import { Repositories } from './Repositories'
import { CountOfRepositories } from './CountOfRepositories'
import { AppStateType } from "../../../../redux/redux-store";

type PropsType = { countOfPublicRepositories: number }

export const ProfileRepo:React.FC<PropsType> = ({ countOfPublicRepositories }) => {

    const repositories = useSelector((state: AppStateType) => state.user.repositories)

    return <div >
        <CountOfRepositories countOfPublicRepositories={ countOfPublicRepositories } />
        <Repositories repositories={ repositories }/>
    </div>
}


