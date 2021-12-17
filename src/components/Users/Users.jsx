import React from "react";
import style from "./users.module.css";
import userPhoto from "../../assets/images/24.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
//b7217b42-a453-46f7-abf4-f3811d252425
let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div className={style.Users}>
            {pages.map(p => {
                return <span className={`${props.currentPage === p && style.selectedPage} ${style.boxMargin}`}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        <div>
            <div>список Имен:
                <div>{

                    props.users.map(a => <div key={a.id}>
                        <div>{a.name}</div>
                    </div>)
                }</div>
            </div>
        </div>

        <button onClick={props.getUsers}>click</button>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photo}/>
                        </NavLink>
                    </div>
                    <div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    usersAPI.clickUnfollow(u.id, props.unfollow(u.id))

                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    usersAPI.clickFollow(u.id, props.follow(u.id))
                                    /*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},{
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY" : "84f47dfa-1d31-4766-a661-7a231b07388c"
                                        }
                                    })
                                        .then(response => {
                                           if(response.data.resultCode == 0){
                                               props.follow(u.id);
                                           }
                                        });*/

                                }}>Follow</button>}
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