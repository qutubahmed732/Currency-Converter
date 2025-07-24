

function InputBox({
   label,
   amount,
   onAmountChange,
   onCurrencyChange,
   currencyOptions,
   disabled,
   selectCurrency = 'usd'
}) {
   return (
      <div className="inputContainer">
         <div className="inputField">
            <p>{label}</p>
            <input
               type="number"
               placeholder="Amount"
               value={String(amount)}
               onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
               disabled={disabled}
            />
         </div>
         <div className="currencyTypeField">
            <p>Currency Type</p>
            <select
               value={selectCurrency}
               onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value); console.log("Changed to:", e.target.value);}}
            >
               {currencyOptions.map((c) => {
                  return (
                     <option key={c} value={c}>
                        {c}
                     </option>
                  )
               })}
            </select>
         </div>
      </div>
   )
}

export default InputBox;