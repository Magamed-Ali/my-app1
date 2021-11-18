import React, {useState} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCrestor, updateNewMessageBodyCreator,} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


function DialogsContainer(props) {


    return <StoreContext.Consumer>
        {

            (store) => {
                let state = store.getState().dialogsPage;
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCrestor());
                }
                let onNewMessageChenge = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return <Dialogs
                    updateNewMessageBody={onNewMessageChenge}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
                />
            }
        }

    </StoreContext.Consumer>
}

export default DialogsContainer;