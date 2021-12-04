import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redax/store";
import MyPostContainer from "./MyPost/MyPostContainer";


function Profile(props) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </div>
    );
}

export default Profile;