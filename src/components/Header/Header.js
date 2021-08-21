import React from 'react';
import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.header}>
            <img  src="https://tech1and.ru/media/product/komp-texnika/monobloki/monoblok-asus-vivo-aio-v241fak-ba051t-90pt0292-m01590-goldblack.jpg"/>
        <div>шапка сайта</div>

        </header>
    );
}

export default Header;