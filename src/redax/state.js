import {observe} from "web-vitals/dist/modules/lib/observe";

const ADD_POST = 'ADD-POST';
const  UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let SEND_MESSAGE = 'SEND_MESSAGE';
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 44}
            ],
            newPostText: "it-koms.ru"
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: "asdfasdfasdf"},
                {id: 2, message: "qwefbasdaxadbeqr"},
                {id: 3, message: "asdfasdfwefl;ffas"},
                {id: 4, message: "l;amsdv;lkasdkv"},
                {id: 5, message: "a;lsd'SDJIIDSVAKSLVKALSDMV"}
            ],
            newMessageBody: " ",
            dialogsData: [
                {id: 1, name: 'Мухаммад'},
                {id: 2, name: 'Ислам'},
                {id: 3, name: 'Салахь'},
                {id: 4, name: 'Абу'},
                {id: 5, name: 'Хасболт'}
            ]
        },
        frendsNavbar: {
            frends: [
                {id: 1, name: "Илес"},
                {id: 2, name: "Ваха"},
                {id: 3, name: "Мовсар"},
                {id: 4, name: "Сумая"}
            ]
        }
    },
    _callSubscriber() {
        console.log('asdff')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === SEND_MESSAGE){
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messagesData.push({id: 6, message: body});
            this._callSubscriber(this._state)
            console.log(this._state.dialogsPage.messagesData)
        }
    }
}

let page = {
    title: 'samurai',
    content: '',
    render(){
        document.write(this.title)
    }
}
page.content = `<div>content</div>`;
page.render()

export  const addPostActionCreator = () =>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>({
    type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCrestor = () =>({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newText: text});


export default store
