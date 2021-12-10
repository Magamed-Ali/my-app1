const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, acttion) => {
    switch (acttion.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...acttion.data,
                isAuth: true
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});

export default authReducer;