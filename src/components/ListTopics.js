import { Link } from 'react-router-dom';
import data from '../assets/data';
import Topic from './Topic';

export default function ListTopics() {
  return (
    <section>
      <ul className="flex flex-col space-y-5">
        {data.quizzes.map((item, index) => (
          <Link key={index} to={`/${index}`}>
            <Topic title={item.title} index={index} icon={item.icon} />
          </Link>
        ))}
      </ul>
    </section>
  );
}
