import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostContainer = (props) => {

    return <StoreContext.Consumer>
            {
                (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChenge = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPost updateNewPostText={onPostChenge}
                               addPost={addPost}
                               posts={state.profilePage.posts}
                               newPostTex={state.profilePage.newPostText}
                />
            }

            }
        </StoreContext.Consumer>


}
export default MyPostContainer;