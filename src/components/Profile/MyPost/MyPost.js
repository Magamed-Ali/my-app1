import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    let postElements = props.posts.map(index => <Post massage={index.message} likesCount={index.likesCount}  />)
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }
    let onPostChenge = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
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
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}
export default MyPost;