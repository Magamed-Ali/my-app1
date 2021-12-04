import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";

function ProfileInfo(props) {
    if(!props.profile){
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div className={s.content}>
                <img src='https://mebelhome11.ru/image/cache/catalog/novyjstil/1-15-auto_width_800.jpg' />
            </div>
            <div className={s.descriotionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;