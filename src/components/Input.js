import { BiDollar } from 'react-icons/bi';
import { FaUser } from "react-icons/fa6";

export default function Input(props) {
  return (
    <div>
      <label htmlFor={props.name} className="block text">
        {props.name}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {props.name === "Bill" ?
          <BiDollar className="h-4 w-4 text-gray-400" aria-hidden="true" />
        : <FaUser className="h-4 w-4 text-gray-400" aria-hidden="true" />}
        </div>
        <input
        value={props.value}
        onChange={props.onChange}
          type="number"
          id={props.name}
          className="block w-full  rounded-md border-0 py-3 pl-10 pr-5 font-mono text-2xl text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-end"
          placeholder="0"
        />
      </div>
    </div>
  );
}
