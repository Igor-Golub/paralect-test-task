import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

export const UserNotFoundPage = () => {

    const errorNameMessage = useSelector((state: AppStateType) => state.user.errorNameMessage)

    return <div className={'iconSearchWrapper'}>
        <div className={'iconItem-1 iconUserItem-1'}>
            <i className="fas fa-user icon"/>
        </div>
        <div className={'iconItem-2 iconUserItem-2'}>
            <p className={'iconText iconUserText'}> {`User ${errorNameMessage?.toLowerCase()}`}</p>
        </div>
    </div>
}