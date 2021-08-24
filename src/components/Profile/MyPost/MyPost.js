import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostText, updateNewPostTextActionCreator} from "../../../redax/profile-reducer";



const MyPost = (props) => {
    let postElements = props.postData.map(index => <Post message={index.message} likesCount={index.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChenge = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>

                <div>
                    <textarea onChange={onPostChenge}
                              ref={newPostElement}
                              value={props.newPostTex}>

                    </textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}
export default MyPost;