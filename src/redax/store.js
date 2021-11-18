import {observe} from "web-vitals/dist/modules/lib/observe";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 12},
                {id: 2, message: "It's my first post", likesCount: 44},
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
        sidebar: {},
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
        debugger;
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }
}

let page = {
    title: 'samurai',
    content: '',
    render() {
        document.write(this.title)
    }
}
page.content = `<div>content</div>`;
page.render()



export default store
