import { useState } from 'react';
import Input from './components/Input';
import TipItem from './components/TipItem';
import DisplayCalc from './components/DisplayCalc';

function App() {
  const [bill, setBill] = useState('');
  const [numberPeoples, setNumberPeoples] = useState('');
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState('');

  const getBillInputValue = (event) => setBill(event.target.value);
  const getNumberPeoplesValue = (event) => setNumberPeoples(event.target.value);
  const getCustomTipValue = (event) => setCustomTip(event.target.value);

  const tips = [5, 10, 15, 20, 50];

  const calcTipByPeople = function () {
    if (numberPeoples) {
      const result = (bill * (customTip || tip / 100)) / numberPeoples;
      return result.toFixed(2);
    }

    return '0.00';
  };

  const calcTotalByPeople = function () {
    if (numberPeoples) {
      return (parseFloat(calcTipByPeople()) + parseFloat(bill) / parseFloat(numberPeoples)).toFixed(2);
    }

    return '0.00';
  };

  const disabled = !numberPeoples || !bill || (!tip && !customTip);

  const resetAllValues = function () {
    setBill('');
    setNumberPeoples('');
    setTip(0); // Réinitialisez le tip à 0 (nombre)
    setCustomTip('');
  };

  return (
    <main className="max-w-screen-md mx-auto min-h-screen flex flex-col justify-center items-center space-y-10">
      <h1 className="text-center uppercase font-bold font-mono text-3xl">TipTop Calc</h1>

      <section className="w-full bg-slate-50 p-8 rounded-lg shadow-xl grid md:grid-cols-2 gap-5">
        {/* Col Left */}
        <div className="flex flex-col space-y-8">
          <Input value={bill} name="Bill" onChange={getBillInputValue} />
          {/* Select Tips */}
          <div>
            <p className="text">Select tip %</p>
            <div className="grid grid-cols-3 gap-4">
              {tips.map((item) => (
                <TipItem
                  key={item}
                  tip={item}
                  currentTip={tip}
                  onClick={() => setTip(item)}
                />
              ))}

              <input
                onChange={getCustomTipValue}
                type="text"
                placeholder="CUSTOM"
                className="text-center shadow-md rounded text-gray-900 placeholder:text-indigo-500 placeholder:font-semibold"
              />
            </div>
          </div>

          {/* Number pers */}
          <Input
            name="Number of People"
            value={numberPeoples}
            onChange={getNumberPeoplesValue}
          />
        </div>
        {/* COl Right */}
        <div className="bg-indigo-400 rounded-lg p-8 flex flex-col justify-between">
          <div className="flex flex-col space-y-10">
            <DisplayCalc calc={calcTipByPeople()} title="Tip Amount" />
            <DisplayCalc calc={calcTotalByPeople()} title="Total" />
          </div>

          <button
            onClick={resetAllValues}
            disabled={disabled}
            className={`uppercase text-md text-center w-full ${
              !disabled ? 'bg-white' : 'bg-indigo-300'
            }  py-3 rounded text-indigo-400`}
          >
            reset
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
