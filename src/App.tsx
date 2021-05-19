import React from 'react'
import './App.css'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { ProfileContainer } from './components/Profile/ProfilePage/ProfileContainer'
import { InitialPage } from './components/InitiaiPage/InitialPage'
import { Header } from './components/CommonComponents/Header/Header'

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <div className={ 'appContentWrapper' }>
                <Route exact path={ '/' } render={() => <Redirect to={ '/initialPage' }/>}/>
                <Route path={ '/initialPage' } render={() => <InitialPage/>}/>
                <Route path={ '/profile' } render={() => <ProfileContainer/>}/>
            </div>
        </BrowserRouter>
    )
}

export default App;
