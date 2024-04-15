import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const display ="iii";
    const [newCurrency, setNewCurrency]=useState("test");
return(
    <div className='alert alert-primary'>
        <select name="currency" value={display} className="custom-select" id="inputGroupSelect04" onChange={(event) => setNewCurrency(event.target.value)}>
            <option name="dollar" value="dollar">$ Dollar</option>
            <option name="pound" value="pound">£ Pound</option>
            <option name="euro" value="euro">€ Euro</option>
            <option name="ruppee" value="ruppee">₹ Ruppee</option>
        </select>
        <p>Selected Currency: {newCurrency}</p>
</div>
);
}
export default Currency;