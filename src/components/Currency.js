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
        <div className='alert alert-success' style={{padding: '9px'}}>Currency: 
            <select 
            className='btn'
            name="currency" id="currency" 
            style={{color: '#0f5132', marginLeft: '1em', background:'#d1e7dd'}}
            onChange={(e) => changeCurrency(e.target.value)}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    )
}

export default Currency;