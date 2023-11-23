import React from 'react';

export default function ItemTopics(props) {
  return (
    <li className="bg-sky-900 py-5 w-full flex items-center gap-3 rounded-lg px-5 shadow shadow-orange-50/20">
      <img src={props.logo} alt={`logo's ${props.title}`} />
      <span className="font-semibold text-white text-2xl">{props.title}</span>
    </li>
  );
}
