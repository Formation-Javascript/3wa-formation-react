// Importation de l'image de remerciement et du composant Heading
import img from '../assets/thanks.png'; // Importe l'image pour l'affichage
import Heading from './Heading'; // Importe le composant Heading pour les titres

// Définition du composant fonctionnel End
export default function End(props) {
  return (
    // Conteneur principal avec style flex pour une mise en page centrée verticalement
    <div className="flex flex-col justify-between items-center h-full">
      {/* Bloc contenant l'image de remerciement et la note sélectionnée */}
      <div className="flex flex-col space-y-3">
        {/* Image de remerciement */}
        <img src={img} alt="thanks" className="w-32 h-32 block mx-auto" />
        {/* Affiche la note sélectionnée par l'utilisateur */}
        <span className="block text-sm text-yellow-500 bg-gray-700 text-center py-1 rounded-full w-48 mx-auto">
          You selected {props.ratingSelected} out of 5
        </span>
      </div>

      {/* Bloc pour le message de remerciement */}
      <div className="flex flex-col items-center space-y-3">
        {/* Utilisation du composant Heading pour afficher le titre "Thank you!" */}
        <Heading title="Thank you!" />
        {/* Paragraphe de remerciement */}
        <p className="text-gray-400 text-sm leading-6 text-center">
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
          touch!
        </p>
      </div>
    </div>
  );
}
