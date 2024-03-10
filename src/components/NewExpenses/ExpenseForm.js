import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    
    // solution 1
    const [enteredTitle, setEneteredTitle] = useState('');
    const [enteredAmount, setEneteredAmount] = useState('');
    const [enteredDate, setEneteredDate] = useState('');

    // solution 2 - you can replace the past 3 states with the following method 
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''

    // });
    
    const titleChangeHandler = (event) => {
        setEneteredTitle(event.target.value);
        
        //2 // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // react schedule state updates,so if you schedule a lot of state update at the same time,
        // you could be depending on an outdated/incorrect state snapshot, to overcome that we do as follows
        // setUserInput((prevState)=>{
        //     return { ...userInput,enteredTitle: event.target.value};
        // });
    };
    const amountChangeHandler = (event) => {
        setEneteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    };
    const dateChangeHandler = (event) => {
        setEneteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    };

    //solution 3 - use one handler function 
    // const inputChangeHandler = (identifier, value) => {
        
    //     if (identifier ==='title'){
    //         setEneteredTitle(value);
    //     }else if (identifier ==='date'){
    //         setEneteredDate(value);
    //     }else{
    //         setEneteredAmount(value);
    //     }
    // };
    // and on change in form, will be like that :
    //<input type='text' onChange={(event)=>inputChangeHandler('title', event.target.value)}/>
    // we used arrow function to let the inputChangeHandler have 2 params and be executed here

    // this is pure js not react based code, you prevent the default behavior of page reloading
    // when u press the submit button
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // you set value back to empty string which was the initial state in the form so you can 
        // overrirde what the user submitted to clear the inputs in form 
        setEneteredTitle('');
        setEneteredAmount('');
        setEneteredDate('');

        //execute function here
        props.onSaveExpenseData(expenseData);

    };
    // 2 way binding: for inputs we don't just listen to changes, but we can also pass a new 
    //value back to the input 

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='number'
                        min="0.01" step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min="2019-01-01" max="2024-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    );
};

export default ExpenseForm;