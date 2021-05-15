import React from "react";
import {useSelector} from "react-redux";

export const UserNotFoundPage = () => {

    const errorNameMessage = useSelector(state => state.user.errorNameMessage)

    return <div className={'icon-wrapper icon-user-wrapper'}>
        <div className={'icon-item-1 icon-user-item-1'}>
            <i className="fas fa-user icon"/>
        </div>
        <div className={'icon-item-2 icon-user-item-2'}>
            <p className={'icon-text icon-user-text'}> {`User ${errorNameMessage.toLowerCase()}`}</p>
        </div>
    </div>
}