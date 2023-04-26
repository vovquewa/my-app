import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img src='https://my.5verst.ru/img/5_verst_logo.png' alt='logo' />
        </header>
    );
}

export default Header;