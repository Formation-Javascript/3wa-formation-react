import React from 'react';

export default function Greeting() {
  return (
    <div>
      <h1 className="text-white text-5xl font-light">
        Welcome to the <br /> <span className="font-bold">Frontend Quiz</span>
      </h1>

      <p className='text-gray-400 mt-8 italic'>Pick a subject to get started</p>
    </div>
  );
}
