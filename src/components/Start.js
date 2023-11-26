import { FaStar } from 'react-icons/fa';
import Rating from './Rating';
import Heading from './Heading';

// Définition du composant fonctionnel Start
export default function Start(props) {
  const ratings = [1, 2, 3, 4, 5]; // Tableau des valeurs de notation possibles

  return (
    // Conteneur principal avec mise en page flex
    <div className="flex flex-col justify-between h-full">
      {/* Icône de l'étoile pour la décoration */}
      <div className="bg-gray-700 w-min p-3 rounded-full shadow-xl">
        <FaStar className="text-yellow-500 text-md" />
      </div>
      <div className="flex flex-col space-y-4">
        {/* Affiche le titre "How did we do ?" */}
        <Heading title="How did we do ?" />
        {/* Paragraphe expliquant le but de la notation */}
        <p className="text-gray-400 text-sm leading-6">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our
          offering!
        </p>

        {/* Affichage des boutons de notation */}
        <div className="flex justify-between items-center">
          {ratings.map((item) => (
            // Crée un bouton Rating pour chaque valeur dans le tableau ratings
            <Rating onClick={() => props.selectRating(item)} ratingSelected={props.ratingSelected} number={item} key={item} />
          ))}
        </div>
      </div>

      {/* Bouton pour soumettre la notation sélectionnée */}
      <button onClick={props.onSubmit} className="uppercase bg-yellow-500 text-gray-100 w-full rounded-full py-2">Submit</button>
    </div>
  );
}
