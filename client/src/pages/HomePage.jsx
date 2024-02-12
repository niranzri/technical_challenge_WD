import React from 'react';
import { Link } from 'react-router-dom';
import classes from "../styles/home.module.css";

function HomePage() {
    return (
        <div className={classes.homeCtn}>
            <h1> Welcome to the Phone Cave </h1>
                <Link to={"/phones"}>
                    <button className={classes.viewPhonesBtn}> View phones </button>
                </Link>
        </div>
    );
}

export default HomePage