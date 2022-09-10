import React from 'react';
import s from './Header.module.css'
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../../redux/slices/UserSlices';
import Vector from '../../assets/Vector.svg'
import Vector1 from '../../assets/Vector1.svg'

const Header = () => {
    const isAuth = useSelector((state: RootState) => state.user.isAuth)
    const dispatch = useDispatch()
    const userName = useSelector((state: RootState) => state.user.user.login)
    return (
        <div className={s.navbar}>
            <nav>
                <div className={s.logo_img} />
                {isAuth ? <div className={s.nav__user}>
                    <div className={s.nav__user_nick}><p>{userName}</p></div>
                    <div className={s.nav__user_logout} onClick={() => {
                        dispatch(userLogout())
                    }}>
                    <img src={Vector} alt='' /> <img src={Vector1} alt=''/>
                    </div>
                    </div> : ''}
            </nav>
        </div>
    );
};

export default Header;