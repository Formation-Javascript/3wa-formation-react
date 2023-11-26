import React from 'react';

// Définition du composant fonctionnel Heading
export default function Heading(props) {
  return (
    // Rendu d'un élément h2 avec des classes de style pour la mise en forme
    <h2 className="text-2xl text-gray-100">
      {props.title} {/* La prop 'title' est utilisée ici pour afficher le texte du titre */}
    </h2>
  );
}
