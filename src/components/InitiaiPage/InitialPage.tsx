import React from 'react';

export const InitialPage: React.FC = () => {
    return <div className={'iconSearchWrapper'}>
        <div className={'iconSearchContent'}>
            <div className={'iconItem-1 iconSearchItem-1'}>
                <i className="fas fa-search icon"/>
            </div>
            <div className={'iconSearchItem-2'}>
                <p className={'iconText'}> Start with searching a GitHub user </p>
            </div>
        </div>
    </div>
}
