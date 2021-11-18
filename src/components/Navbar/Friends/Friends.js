import React from 'react';
import s from "./Friends.module.css"
import Frend from "./Frend/Frend";

function Friends(props) {
    let frondUser = props.state.getState().frendsNavbar.frends.map(f => <Frend name={f.name}/>);
    return (
        <div>
            <h5>Friends</h5>
            <div className={s.frenddsUser}>
                {frondUser}
            </div>
        </div>
    );
}

export default Friends;