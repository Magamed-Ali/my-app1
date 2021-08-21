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
import Friends from "./components/Navbar/Friends/Friends";
import {updateNewPostText} from "./redax/state";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                {/*<NavBar state={props.state.frendsNavbar.frends}/>*/}

               <NavBar state={props.state.frendsNavbar.frends}/>

                <div className="app-wrapper-content">
                    {/*<Route exact path='/dialogs' component={Dialogs}/>
                <Route exact path='/profile' component={Profile}/>*/}

                    <Route exact path='/dialogs'
                           render={() => <Dialogs
                               store={props.store}
                           />}/>

                    <Route exact path='/profile'
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch={props.dispatch} /> } />

                    <Route exact path='/news' component={News}/>
                    <Route exact path='/music' component={Music}/>
                    <Route exact path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;