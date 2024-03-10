import React from "react";
import './ExpenseFilter.css';

const ExpenseFilter = (props)=>{
    const dropDownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By Year</label>
                <select value={props.selected} onChange={dropDownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2022</option>
                    <option value='2020'>2022</option>
                    <option value='2019'>2022</option>
                </select>
            </div>
        </div>
    );

};

export default ExpenseFilter;