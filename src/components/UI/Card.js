import React from "react";

import classes from './Card.module.css'; // to use css module, you import all classes from the file 
                                        // and access it with (.) notation

const Card = props => {

    return(
        // i want to output the content that is wrapped around my <card/> in AddUser through props.children 
        //you put it in {} because it's not jsx coded it's js expression that should be evaluated inside the jsx code

        //cont. NOTE: you want to make sure the css class you applying to div reflect both:
        //1- card class from './Card.module.css' 2- any potentially incoming classes from props
        // to to that we use template lliteral {``}
        <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    );
};

export default Card;