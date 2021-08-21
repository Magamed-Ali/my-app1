import React from 'react';
import s from "../Friends.module.css"

function Frend(props) {
    return (
        <div>
            <div className={s.user}>{props.name}</div>
        </div>
    );
}

export default Frend;