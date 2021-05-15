import React from "react";

export const EmptyPageOfRepo:React.FC = () => {
    return (
        <div className={'empty-repos-wrapper'}>
            <div className={'icon-wrapper icon-user-wrapper'}>
                <div className={'icon-item-1 icon-user-item-1'}>
                    <i className="far fa-times-circle icon"/>
                </div>
                <div className={'icon-text icon-user-text'}>Repository list is empty</div>
            </div>
        </div>
    )
}