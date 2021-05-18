import React from 'react';

export const EmptyPageOfRepo: React.FC = () => {
    return (
        <div className={'emptyReposWrapper'}>
            <div className={'icon-item-1'}>
                <i className="far fa-times-circle icon"/>
            </div>
            <div className={'iconText'}>Repository list is empty</div>
        </div>
    )
}