import React, { useState } from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    
    const [enteredUsername, setEneteredUsername] = useState('');
    const [enteredAge, setEneteredAge] = useState('');
    const [error, setError] = useState();

    const usernameChangeHandler = (event) => {
        setEneteredUsername(event.target.value);

    };
    const ageChangeHandler = (event) => {
        setEneteredAge(event.target.value);

    };

    const addUserHandler = (event) => {
        
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'

            });
            return;
        }
        //conversion from string to int value for age 
        if (+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0)'
            });
            return;
        }

        //executed as a function here, because that we get as a value onthat prop is a function
        props.onAddUser(enteredUsername,enteredAge);
        
        setEneteredUsername('');
        setEneteredAge('');
    };

    const errorHandler = () =>{
        setError(null);
    };
    return (

        <div>
            {error && (
                <ErrorModal
                title={error.title} message={error.message}
                onConfirm={errorHandler}
            ></ErrorModal>)}  
                   
            {/* NOTE: Card is a custom component that only accept props that we use inside of that component, 
            so you have to go to Card class and make sure that you accept class named prop & you do smth with it */}
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
        </div>


    );
};

export default AddUser;
//pointer to the function