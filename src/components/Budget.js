import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget} = useContext(AppContext);

    // const changeHandler = (e) => {
    //     // setBudget(e);
    // }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input type="number" step="10" max="20000" value={budget} /></span>
        </div>
    );
};

export default Budget;
