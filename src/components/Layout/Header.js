import {Fragment} from "react";

import mealsImage from '../../assets/nature.jpg'
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>

        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delcious food!"/>
        </div>

    </Fragment>
};

export default Header;