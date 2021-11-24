import React from "react";
import style from "./users.module.css";


let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsersAC([
            {
                id: 1,
                photoUrl: 'https://get.wallhere.com/photo/car-vehicle-Ford-2015-Truck-netcarshow-netcar-car-images-car-photo-F-150-wheel-land-vehicle-automotive-exterior-automobile-make-bumper-pickup-truck-397539.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', conutry: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://get.wallhere.com/photo/car-vehicle-Ford-2015-Truck-netcarshow-netcar-car-images-car-photo-F-150-wheel-land-vehicle-automotive-exterior-automobile-make-bumper-pickup-truck-397539.jpg',
                followed: true,
                fullName: 'Aleg',
                status: 'I am a boss',
                location: {city: 'Grozny', conutry: 'Chechen republick'}
            },
            {
                id: 3,
                photoUrl: 'https://get.wallhere.com/photo/car-vehicle-Ford-2015-Truck-netcarshow-netcar-car-images-car-photo-F-150-wheel-land-vehicle-automotive-exterior-automobile-make-bumper-pickup-truck-397539.jpg',
                followed: false,
                fullName: 'Mosha',
                status: 'I am a boss',
                location: {city: 'Moscov', conutry: 'Belarus'}
            },
            {
                id: 4,
                photoUrl: 'https://get.wallhere.com/photo/car-vehicle-Ford-2015-Truck-netcarshow-netcar-car-images-car-photo-F-150-wheel-land-vehicle-automotive-exterior-automobile-make-bumper-pickup-truck-397539.jpg',
                followed: true,
                fullName: 'Gosha',
                status: 'I am a boss',
                location: {city: 'Kiev', conutry: 'Ukraine'}
            }])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <img src={u.photoUrl} className={style.photo}/>
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
                        <span>{u.fullName}</span><span>{u.status}</span>
                    </div>
                    <div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>
                <div></div>
            </div>)
        }
    </div>
}

export default Users;