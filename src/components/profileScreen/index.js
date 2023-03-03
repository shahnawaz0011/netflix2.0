import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { auth } from '../../firbase';
import Nav from '../home/navBar/Nav';
import './ProfileScreen.css';
function ProfileScreen() {

    const user = useSelector(selectUser);
    console.log(user);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img
                        className='nav_avatar'
                        src='https://cdn.dribbble.com/users/759083/screenshots/17196153/media/a437d241c694189e6738c54dcdf9cfd6.jpg?compress=1&resize=400x300' alt='' />

                
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <h3>Plans</h3>
                        <button className='profileScreen__signout' onClick={() => auth.signOut()}>Sign Out</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen