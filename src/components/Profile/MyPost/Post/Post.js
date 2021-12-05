import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (

        <div className={s.item}>
            <div>
            <img src="https://i.pinimg.com/originals/ce/3c/91/ce3c9104573801bae11e51c29dae67dd.jpg" />
            </div>
            <div>
            {props.massage}
            </div>
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    );
}

export default Post;