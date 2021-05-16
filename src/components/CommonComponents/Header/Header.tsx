/*
Как работать с gitom закидывать код туда
Пагинатор при нажатии обновляется всё преложение
Верстка вообще все под вопросом
Зависимость в useCallback
По логике компонент отображению true/false
*/

import React, {useState} from 'react'
import {getUser, getUserRepo, setErrorName, setErrorNameMessage} from '../../../redux/user-Reducer'
import {useDispatch, useSelector} from 'react-redux'
import {AppStateType} from "../../../redux/redux-store";
import { useHistory } from 'react-router-dom';

export const Header:React.FC = () => {

    const dispatch = useDispatch()
    const [searchRequest, setSearchRequest] = useState('')
    const currentPage = useSelector<AppStateType>(state => state.user.currentPage)
    const repositoriesOnPage = useSelector<AppStateType>(state => state.user.per_page)

    const history = useHistory()

    const changeHandler = (event: any) => setSearchRequest(event.target.value)
    const onKeyPressHandler = (event: any) => {
        if (event.key === 'Enter') {
            dispatch(setErrorName(false))
            dispatch(setErrorNameMessage(""))
            dispatch(getUser(searchRequest, history))
            dispatch(getUserRepo(searchRequest, currentPage, repositoriesOnPage))
            setSearchRequest('')
        }
    }

    return (
        <nav>
            <div className={'navigation-wrapper'}>
                <div className={'item'}>
                    <a href={'https://github.com/'} target={'blank'} className={'logo'}><i className={'fab fa-github'}/></a>
                </div>
                <div className={'item'}>
                    <i className="fa fas fa-search"/>
                    <input className={'search-input'} name={'search'}
                           type={'text'} placeholder={'Enter GitHub username'}
                           value={searchRequest} onChange={changeHandler}
                           onKeyPress={onKeyPressHandler}
                    />
                </div>
            </div>
        </nav>
    )
}