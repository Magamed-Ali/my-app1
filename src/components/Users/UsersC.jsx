import React from "react";
import style from "./users.module.css";
import * as axios from 'axios'
import userPhoto from "../../assets/images/24.png"


class Users extends React.Component {

    componentDidMount() {

            alert("new")
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsersAC(response.data.items)
                });
    }


    render() {
        return <div>
            {
                <div>
                    <div>список Имен:
                        <div>{
                            this.props.users.map(a => <div key={a.id}>
                                <div>{a.name}</div>
                            </div>)
                        }</div>
                    </div>
                </div>
            }
            {/*<button onClick={this.getUsers}>click</button>*/}
            {
                this.props.users.map(u => <div key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={style.photo}/>
                        </div>
                        <div>
                            <div>
                                {u.followed ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>Follow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
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
}

export default Users;