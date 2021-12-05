import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile"
import Dialogs from "./components/Dialogs/Dialogs";
import './style.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                {/*<NavBar state={props.state.frendsNavbar.frends}/>*/}
                <NavBar />
                <div className="app-wrapper-content">
                    {/*<Route exact path='/dialogs' component={Dialogs}/>
                <Route exact path='/profile' component={Profile}/>*/}

                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userId'
                           render={() => <ProfileContainer />} />

                    <Route path='/users'
                           render={() => <UsersContainer />}/>

                    <Route exact path='/news' component={News}/>
                    <Route exact path='/music' component={Music}/>
                    <Route exact path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;