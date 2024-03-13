import React, { useState } from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = props => {
    
    const [enteredUsername, setEneteredUsername] = useState('');
    const [enteredAge, setEneteredAge] = useState('');

    const usernameChangeHandler = (event) => {
        setEneteredUsername(event.target.value);

    };
    const ageChangeHandler = (event) => {
        setEneteredAge(event.target.value);

    };

    const addUserHandler = (event) => {
        
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        //conversion from string to int value for age 
        if (+enteredAge < 1){
            return;
        }

        setEneteredUsername('');
        setEneteredAge('');
    };

    return (

        //NOTE: Card is a custom component that only accept props that we use inside of that component, 
        // so you have to go to Card class and make sure that you accept class named prop & you do smth with it
        <Card className={classes.input}>
            {/* pointer to the function addUserHandler */}
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" 
                    value={enteredUsername}
                    onChange={usernameChangeHandler}>
                </input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"
                    value={enteredAge}
                    onChange={ageChangeHandler}>
                </input>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
//pointer to the function