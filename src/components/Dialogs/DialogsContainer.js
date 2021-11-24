import React, {useState} from 'react';
import {sendMessageCrestor, updateNewMessageBodyCreator,} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }}
let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage: () => {dispatch(sendMessageCrestor());},
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body));}
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;