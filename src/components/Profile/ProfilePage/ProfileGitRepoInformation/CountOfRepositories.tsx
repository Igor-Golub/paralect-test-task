import React from "react";

type PropsType = { countOfPublicRepositories: number }

export const CountOfRepositories:React.FC<PropsType> = ({countOfPublicRepositories}) => {
    return <div className={'numberOfRepositories'}>
        Repositories({countOfPublicRepositories})
    </div>
}