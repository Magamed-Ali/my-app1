const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

let initialState = {
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
        {id: 5, name: 'Ибрагим'}
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, message: body});
            return state;
        default:
            return state
    }
}

export const sendMessageCrestor = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newText: text});
export default dialogsReducer;
