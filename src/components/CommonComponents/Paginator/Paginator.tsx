import React, {useCallback, useState} from 'react'
import cn from 'classnames'
import {getUserRepo, setCurrentPage} from '../../../redux/user-Reducer';
import {useDispatch} from 'react-redux';

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    portionSize?: number
    login: string
}

export const Paginator: React.FC<PropsType> = ({totalItemsCount, pageSize,
                                                   currentPage, portionSize = 4,
                                                   login}) => {
    const dispatch = useDispatch()
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    const handlerPageChanged = useCallback((page) => {
        dispatch(setCurrentPage(page));
        dispatch(getUserRepo(login, page, pageSize))
    }, []);

    if(totalItemsCount <= 4) {
        return null
    }

    return (
        <div >
            <div className={'paginatorWrapperItems'}>
                <div> {`${leftPortionPageNumber} - ${rightPortionPageNumber} of ${totalItemsCount} items`}</div>
                {portionNumber > 1 && <i className={'fas fa-chevron-left paginatorIcons'}
                                         onClick={() => setPortionNumber(portionNumber - 1)}/>}
                {pages
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return <span className={ cn('paginatorNumberOfPage', {'selectedPage': currentPage === page})}
                                     key={page}
                                     onClick={() => handlerPageChanged(page)}>{page}</span>
                    })}
                {portionCount > portionNumber && <i className={'fas fa-chevron-right paginatorIcons'}
                                                    onClick={() => setPortionNumber(portionNumber + 1)}/>}
            </div>
        </div>
    )
}