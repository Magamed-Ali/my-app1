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
import Users from './Users';
import Preloader from "../common/preloader/Preloader";
import {getUser} from "../../api/api";


let UsersContainer = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            props.toggleIsFetching(true)

            getUser(props.currentPage, props.pageSize)
                .then(data => {
                    props.toggleIsFetching(false);
                    props.setUsers(data.items);
                    props.setUserTotalCount(data.totalCount);
                });
        }
    }

    let onPageChanged = (pageNumber) => {
        props.toggleIsFetching(true)
        props.setCurrentPage(pageNumber);

        getUser(pageNumber, props.pageSize)
            .then(data => {
                props.toggleIsFetching(false)
                props.setUsers(data.items);

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