import React, {useState} from 'react'
import cn from 'classnames'

type PropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (page: number) => void,
    portionSize?: number
}

export const Paginator: React.FC<PropsType> = ({
                                                   totalItemsCount, pageSize,
                                                   currentPage, onPageChanged,
                                                   portionSize = 4
                                               }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages: Array<number> = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={'paginatorWrapper'}>

            <div className={'paginatorWrapperItems'}>
                <div className={'paginatorCommonInf'}> {`${leftPortionPageNumber} - ${rightPortionPageNumber} of ${totalItemsCount} items`}</div>
                {portionNumber > 1 && <i className={'fas fa-chevron-left paginatorIcons'}
                                         onClick={() => setPortionNumber(portionNumber - 1)}/>}
                {pages
                    .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                    .map(page => {
                        return <span className={ cn({'selectedPage': currentPage === page})}
                                     key={page}
                                     onClick={() => onPageChanged(page)}>{page}</span>
                    })}
                {portionCount > portionNumber && <i className={'fas fa-chevron-right paginatorIcons'}
                                                    onClick={() => setPortionNumber(portionNumber + 1)}/>}
            </div>
        </div>
    )
}