import React from 'react';
import {connect} from 'react-redux';
import {followAC, setCurrentPageAC, setUsersAC, setUserTotalCountAC, unfollowAC} from '../../redax/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import preloader from '../../assets/images/1495.gif';



 let UsersContainer = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
                .then(response => {
                    props.setUsersAC(response.data.items)
                });
        }
    }

    let onPageChanged = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.setUsersAC(response.data.items);
                props.setTotalUsersCount(response.data.totalCount)
            });
    }
    return <>
        {props.isFetching ? <img src={preloader}/> : null }
     <Users users = {props.users}
                  pageSize = {props.pageSize}
                  totalUsersCount = {props.totalUsersCount}
                  currentPage = {props.currentPage}
                  onPageChanged = {onPageChanged}
                  getUsers = {getUsers}
                  follow = {props.follow}
                  unfollow = {props.unfollow}


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

let mapDispatchToProps = (dispatch) => {
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
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);