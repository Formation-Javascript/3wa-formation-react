import { useState } from 'react';
import { RiFileCopyLine } from 'react-icons/ri';
import { FaArrowRight } from 'react-icons/fa';
import Radio from './components/Radio';

const options = ['Include Uppercase Letters', 'Include Lowercase Letters', 'Include Numbers', 'Include Symbols'];
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+';

export default function App() {
  const [characterLength, setCharacterLength] = useState('0');
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [password, setPassword] = useState('');

  const onChangeCharacterLength = (e) => setCharacterLength(String(e.target.value));

  const handleOptionsSelected = function (e) {
    if (e.target.checked) {
      setOptionsSelected([...optionsSelected, e.target.id]);
    }
  };

  const generatePassword = () => {
    let characters = '';
    if (optionsSelected.includes('Include Uppercase Letters')) {
      characters += uppercaseLetters;
    }
    if (optionsSelected.includes('Include Lowercase Letters')) {
      characters += lowercaseLetters;
    }
    if (optionsSelected.includes('Include Numbers')) {
      characters += numbers;
    }
    if (optionsSelected.includes('Include Symbols')) {
      characters += symbols;
    }

    let password = '';
    const charactersLength = characters.length;
    for (let i = 0; i < characterLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    setPassword(password);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };


  return (
    <main className="w-96 max-w-xl ">
      <h1 className="text-gray-50 text-center mb-10">PassSafe Maker</h1>

      <div className="flex flex-col space-y-6">
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={copyToClipboard} >
            <RiFileCopyLine className="h-5 w-5 text-indigo-700" aria-hidden="true" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-0 p-4 text-gray-900 placeholder:text-gray-400 text-lg"
            placeholder="P4$5w0rD"
            value={password}
          />
        </div>

        <div className="bg-gray-50 rounded-lg p-4 flex flex-col space-y-6">
          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="minmax-range" className="block mb-2 text-sm font-medium text-gray-900">
                Character Length
              </label>

              <p className="text-3xl text-indigo-700">{characterLength}</p>
            </div>
            <input
              onChange={onChangeCharacterLength}
              type="range"
              min="0"
              max="20"
              value={characterLength}
              className="w-full h-2 bg-indigo-300 rounded-lg appearance-none cursor-pointer accent-indigo-700"
            />
          </div>

          <div>
            {options.map((option) => (
              <Radio handleOptionsSelected={handleOptionsSelected} key={option} label={option} />
            ))}
          </div>

          <button
            disabled={characterLength === '0'}
            onClick={generatePassword}
            className={`uppercase w-full py-3 hover:bg-indigo-900 rounded text-gray-50 flex justify-center items-center space-x-5 
            ${characterLength === '0' ? 'bg-indigo-700/50' : 'bg-indigo-700'}
            `}>
            <span>Generate </span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </main>
  );
}
