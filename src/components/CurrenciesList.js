import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const CurrenciesList = () => {
    const { currency, dispatch } = useContext(AppContext)
    const [newCurrency, setCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        console.log(event)
        setCurrency(event);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event,
        });
    }
return (
    <div className='alert alert-secondary'>
    <select className="custom-select rounded" style={{backgroundColor: '#006400', color: '#FFF8DC'}} id="inputGroupSelect01" value={newCurrency} onChange={(event) => handleCurrencyChange(event.target.value)}>
        <option defaultValue>Choose...</option>
        <option value="$" name="Dollar">$ Dollar</option>
        <option value="£" name="Pound">£ Pound</option>
        <option value="₹" name="Ruppee">₹ Ruppee</option>
        <option value="€" name="Euro">€ Euro</option>
    </select>
    </div>
    );
};
export default CurrenciesList