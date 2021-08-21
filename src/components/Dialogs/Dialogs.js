import React, {useState} from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    sendMessageCrestor,
    updateNewMasag,
    updateNewMessageBodyCreator,
    updateNewPostTextActionCreator
} from "../../redax/state";


function Dialogs(props) {
    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messagesData.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCrestor())

    }
    let onNewMessageChenge = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChenge}
                                   placeholder="Enter your message"></textarea></div>

                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </>);}

export default Dialogs;