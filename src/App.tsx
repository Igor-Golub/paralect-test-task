import React from 'react'
import './App.css'
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import {Profile} from './components/Profile/ProfilePage/Profile'
import {InitialPage} from './components/InitiaiPage/InitialPage'
import {UserNotFoundPage} from './components/UserNotFoundPage/UserNotFoundPage'
import {EmptyPageOfRepo} from './components/EmptyPageOfRepo/EmptyPageOfRepo'
import {Header} from './components/CommonComponents/Header/Header'

export const App:React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path={'/'} render={() => <Redirect to={'/initialPage'}/>}/>
            <Route path={'/initialPage'} render={() => <InitialPage />}/>
            <Route path={'/profile'} render={() => <Profile />}/>
            <Route path={'/emptyPageOfRepo'} render={() => <EmptyPageOfRepo />}/>
            <Route path={'/userNotFoundPage'} render={() => <UserNotFoundPage />}/>
        </BrowserRouter>
    )
}

export default App;
