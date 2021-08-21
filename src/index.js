import React from 'react';
import ReactDom from 'react-dom'
import App from "./App";
import "./style.css"
import store from "./redax/state";
import {BrowserRouter} from "react-router-dom";

    let rerenderEntire = (state) =>{
    ReactDom.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntire(store.getState());
store.subscribe(rerenderEntire)