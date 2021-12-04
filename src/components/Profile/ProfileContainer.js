import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redax/store";
import MyPostContainer from "./MyPost/MyPostContainer";
import Profile from "./Profile";


class ProfileContainer extends React.Component{
    render(){
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
    }


export default ProfileContainer;