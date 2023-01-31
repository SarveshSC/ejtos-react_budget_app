import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

// const reducer = (state, action) => {
//     console.log(state,action);
// }

const Budget = () => {
    const {budget, dispatch, expenses, currency} = useContext(AppContext);

    const editHandler = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return total += item.cost;
        }, 0)
        if(val < totalExpenses){
            alert("You cannot reduce budget that is already allocated")
        }
        if(val > 20000){
            alert("Budget cannot exceed 20000")
        }
        else{
            dispatch({
                type:"SET_BUDGET",
                payload: val
            })
        } 
    }

    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input 
                type="number" 
                step="10" 
                value={budget}
                onChange={(e) => editHandler(e.target.value)} 
                />
            </span>
        </div>
    );
};

export default Budget;
