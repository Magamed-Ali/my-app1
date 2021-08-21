import React from 'react';
import s from "./Friends.module.css"
import Frend from "./Frend/Frend";

function Friends(props) {

    let frendUser = props.state.map(f => <Frend name={f.name}/>);
    return (
        <div>
            <h5>Friends</h5>
            <div className={s.frenddsUser}>
                {frendUser}
            </div>
        </div>
    );
}

export default Friends;