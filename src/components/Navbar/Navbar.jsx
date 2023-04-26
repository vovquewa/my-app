import React from "react";
import classes from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navClass = ({ isActive }) => {
        return isActive ? classes.activeLink : '';
    }
 
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={navClass}>
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs' className={navClass}>
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' className={navClass}>
                    News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' className={navClass}>
                    Music
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/settings' className={navClass}>
                    Settings
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;