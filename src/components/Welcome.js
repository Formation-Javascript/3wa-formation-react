// rfc => créer un composant
import React from 'react';

export default function Welcome() {
  return (
    <section className="flex-center flex-col md:h-screen">
      <h1 className="text-4xl md:text-5xl text-white text-center mb-2">
        Welcome to the <span className="font-extrabold text-yellow-500 block">Frontend Quiz !</span>
      </h1>

      <p className="text-gray-300">Pick a subject to get started</p>
    </section>
  );
}
