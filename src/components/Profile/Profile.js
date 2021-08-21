import React from 'react';
import s from './Profile.module.css'
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redax/state";



function Profile(props) {

    return (
        <div>
            <ProfileInfo/>
            <MyPost postData={props.profilePage.postData}
                    dispatch={props.dispatch}
                    newPostTex={props.profilePage.newPostText}
            />

        </div>
    );
}
export default Profile;