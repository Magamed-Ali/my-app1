const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 1,
    currentPage: 5
};

const usersReducer = (state = initialState, acttion) => {
    switch (acttion.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === acttion.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === acttion.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: [...acttion.users]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: acttion.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: acttion.count}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUserTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;