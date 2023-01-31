import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }

    return (
            <select 
            className='btn btn-success'
            name="currency" id="currency" 
            style={{color: 'white', background: 'green'}}
            onChange={(e) => changeCurrency(e.target.value)}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
    )
}

export default Currency;