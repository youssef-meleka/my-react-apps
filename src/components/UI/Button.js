import React from "react";

import classes from './Button.module.css';

const Button = props => {

    return(
        <button
            className= {classes.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {/* you want to output some content between the button tags, and you expect 
            to get that content between the tags of your own button, as follows */}
            {props.children}
        </button>
    );

};

export default Button;