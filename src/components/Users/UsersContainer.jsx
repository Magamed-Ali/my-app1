import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsers,
    setUserTotalCount,
    toggleIsFetching,
    unfollow
} from '../../redax/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/preloader/Preloader";


let UsersContainer = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
                .then(response => {
                    props.toggleIsFetching(false)
                    props.setUsers(response.data.items)
                });
        }
    }

    let onPageChanged = (pageNumber) => {
        props.toggleIsFetching(true)
        props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.toggleIsFetching(false)
                props.setUsers(response.data.items);
                props.setUserTotalCount(response.data.totalCount)
            });
    }
    return <>
        {props.isFetching ? <Preloader/> : null}
        <Users users={props.users}
               pageSize={props.pageSize}
               totalUsersCount={props.totalUsersCount}
               currentPage={props.currentPage}
               onPageChanged={onPageChanged}
               getUsers={getUsers}
               follow={props.follow}
               unfollow={props.unfollow}


        />
    </>


}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsersAC: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUserTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}*/


export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setUserTotalCount,
    toggleIsFetching
})(UsersContainer);