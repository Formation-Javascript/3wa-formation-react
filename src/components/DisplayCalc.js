import React from 'react';

export default function DisplayCalc(props) {
  return (
    <div className="flex justify-between items-center gap-4">
      <div>
        <p className='text-sm  font-medium leading-6 text-white'>{props.title}</p>
        <span className="block text-xs text-white/70">/ person</span>
      </div>

      <p className='text-4xl text-indigo-300'>${props.calc}</p>
    </div>
  );
}
