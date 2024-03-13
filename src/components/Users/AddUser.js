import React from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = props => {

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (

        //NOTE: Card is a custom component that only accept props that we use inside of that component, 
        // so you have to go to Card class and make sure that you accept class named prop & you do smth with it
        <Card className={classes.input}>
            {/* pointer to the function addUserHandler */}
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"></input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
//pointer to the function