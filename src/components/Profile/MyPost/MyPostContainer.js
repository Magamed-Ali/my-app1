import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostTex: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
                let action = updateNewPostTextActionCreator(text);
                dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }

    }
}

let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;