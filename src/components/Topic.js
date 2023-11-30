import React, { useEffect, useState } from 'react';
export default function Topic(props) {
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    switch (props.title) {
      case 'HTML':
        setBgColor('bg-orange-100');
        break;
      case 'CSS':
        setBgColor('bg-green-100');
        break;
      case 'JavaScript':
        setBgColor('bg-blue-100');
        break;
      default:
        setBgColor('bg-violet-100');
        break;
    }
  }, []);

  return (
    <div className="bg-indigo-500 rounded-xl px-3 py-4 w-80 max-w-[15rem] flex items-center space-x-5 ">
      <div className={`w-12 h-12 ${bgColor} p-2 rounded`}>
        <img src={props.icon} alt={props.title} />
      </div>

      <span className="text-white font-bold">{props.title}</span>
    </div>
  );
}
