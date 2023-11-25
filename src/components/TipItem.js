import React from 'react';

export default function TipItem(props) {

  return (
    <button
      className={`${
        props.currentTip === props.tip ? 'bg-indigo-300' : 'bg-indigo-500'
      }  text-white py-3 rounded shadow-md`}
      onClick={props.onClick}>
      {props.tip}%
    </button>
  );
}
