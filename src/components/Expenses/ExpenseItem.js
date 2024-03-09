import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {

  // useState always return 2 values: first is the current state value (title = props.title)
  // and the other one is the function for updateing that (setTitle)
  const [title, setTitle] = useState(props.title);

  const clickHandler = ()=>{

    setTitle('Updated Title !!');
  }
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;