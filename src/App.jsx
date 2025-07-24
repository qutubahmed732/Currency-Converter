import { useState } from 'react';
import InputBox from './components/InputBox';
import "./App.css";
import useCurrencyInfo from './components/hooks/useCurrencyReferance';

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {

    const oldFrom = from;
    const oldTo = to;
    const oldAmount = amount;
    const oldConvertedAmount = convertedAmount;

    // Swap currencies
    setFrom(oldTo);
    setTo(oldFrom);

    // Swap numeric values too
    setAmount(oldConvertedAmount);
    setConvertedAmount(oldAmount);
  };



  const convert = () => {
    const rate = currencyInfo[to];
    if (rate) {
      setConvertedAmount(amount * rate);
    }
  }


  return (
    <>
      <form className='parent' onSubmit={(e) => { e.preventDefault() }}>
        <div className='container'>
          <InputBox
            label={'from'}
            amount={amount}
            onAmountChange={(amount) => { setAmount(amount) }}
            onCurrencyChange={(currency) => { setFrom(currency) }}
            currencyOptions={options}
            selectCurrency={from}
            disabled={false}
          />

          <button style={{ display: 'block', marginTop: '2rem', paddingInline: '1rem', borderRadius: '10px', border: 'none' }} onClick={swap}>Swap</button>

          <InputBox
            label={'to'}
            currencyOptions={options}
            amount={convertedAmount}
            selectCurrency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            disabled={false}
          />
        </div>
        <button className='convertBtn' onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </form>
    </>
  )
}

export default App
