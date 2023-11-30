import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../assets/data';

export default function QuizPage() {
  const params = useParams();
  const index = params.indexTopic;
  const quiz = data.quizzes[index];

 
  return <div>
    
  </div>;
}
