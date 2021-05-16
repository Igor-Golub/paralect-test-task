import React from "react";

export const InitialPage:React.FC = () => {



    return <div className={'icon-wrapper icon-search-wrapper'}>
        <div className={'icon-item-1 icon-search-item-1'}>
            <i className="fas fa-search icon"/>
        </div>
        <div className={'icon-item-2 icon-search-item-2'}>
            <p className={'icon-text icon-search-text'}> Start with searching a GitHub user </p>
        </div>
    </div>
}
