import React from "react";
import * as axios from 'axios'
import Users from "./Users";


let UsersAPIComponent = (props) => {
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
    return <Users users = {props.users}
                  pageSize = {props.pageSize}
                  totalUsersCount = {props.totalUsersCount}
                  currentPage = {props.currentPage}
                  onPageChanged = {onPageChanged}
                  getUsers = {getUsers}
                  follow = {props.follow}
                  unfollow = {props.unfollow}


    />


}
export default UsersAPIComponent;