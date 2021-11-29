import React from "react";
import style from "./users.module.css";
import * as axios from 'axios'
import userPhoto from "../../assets/images/24.png"


let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                props.setUsersAC(response.data.items)
            });
        }
    }

    return <div>
        <div>
            <div>список Имен:
                <div>{
                    props.users.map(a => <div key={a.id}>
                        <div>{a.name}</div>
                    </div>)
                }</div>
            </div></div>

        <button onClick={getUsers}>click</button>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photo}/>
                    </div>
                    <div>
                        <div>
                            {u.followed ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Unfollow</button>}
                        </div>
                    </div>
                    <div>
                        <span>{u.name}</span>
                        <span>{u.status}</span>
                    </div>
                    <div>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;