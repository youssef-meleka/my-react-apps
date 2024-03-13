import React from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css';

const UserList = props =>{

    return(
        <Card className={classes.users}>
            <ul>
                {/* used to map the array of users to an array of jsx elements */}
                {props.users.map((user =>
                    <li>
                        {user.name}  ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;