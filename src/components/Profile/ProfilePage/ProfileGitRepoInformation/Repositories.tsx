import React from 'react';
import {Repository} from './Repository';

type PropsType = { repositories: Array<any> }

export const Repositories:React.FC<PropsType> = ({repositories}) => {
    return <div className={'repoWrapper'}>
        {repositories.map(repository => <Repository name={repository.name}
                                                    key={repository.id}
                                                    description={repository.description}
                                                    html_url={repository.html_url}
        />)}
    </div>
}