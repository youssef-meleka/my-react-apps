import React from "react";

import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'
const ExpensesList =  props => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found NO Expenses.</h2>
    }

    return <u className="expenses-list">
        {
            props.items.map((expense) => (
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            ))
        }
    </u>
}

export default ExpensesList;