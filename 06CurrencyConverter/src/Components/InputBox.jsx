import React, {useId} from "react";
// useId()- returns a unique ID string that stays the same across re-renders.

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="PHP",
    amountDisable= false,
    currencyDisable= false,
    className = "",
}) {
     
  const amountInputId= useId();
   
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> 
        {/* user entered css */}
            <div className="w-1/2">
                <label htmlFor={amountInputId} //binding the uniqueId
                  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    // If onAmountChange exists, call it with the numeric input value

                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency)=>
                        (
                          <option key={currency}value={currency}>{currency}</option>
                          // 'key' helps React track and update list items efficiently during re-render

                        ))}
                
                </select>
            </div>
        </div>
    );
}
export default InputBox;
