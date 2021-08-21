import React from 'react';
import s from "./ProfileInfo.module.css";
import MyPost from "../MyPost/MyPost";

function ProfileInfo(props) {
    return (
        <div>
            <div className={s.content}>
                <img src='https://mebelhome11.ru/image/cache/catalog/novyjstil/1-15-auto_width_800.jpg' />
            </div>
            <div className={s.descriotionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;