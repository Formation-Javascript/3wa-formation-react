import React from 'react';

// Définition du composant fonctionnel Rating
export default function Rating(props) {
  return (
    // Rendu d'un bouton avec gestionnaire d'événement et styles conditionnels
    <button
      onClick={props.onClick} // Gestionnaire d'événement onClick utilisant la prop 'onClick'
      className={` w-10 h-10 rounded-full text-gray-400 hover:bg-gray-400 hover:text-gray-50 ${
        props.ratingSelected === props.number // Condition pour vérifier si le bouton est sélectionné
        ? 'bg-yellow-500 text-white' // Style appliqué si le bouton est le rating sélectionné
        : 'bg-gray-700' // Style par défaut quand le bouton n'est pas sélectionné
      }`}>
      {props.number} {/* Affiche le numéro du bouton, passé via la prop 'number' */}
    </button>
  );
}
