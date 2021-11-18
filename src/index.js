import React from 'react';
import ReactDom from 'react-dom'
import App from "./App";
import "./style.css"
import store from "./redax/redux-store";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

    let rerenderEntire = (state) =>{
    ReactDom.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App/>
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntire(store.getState());

store.subscribe(()=>{
    let state = store.getState();
    rerenderEntire(state)
})