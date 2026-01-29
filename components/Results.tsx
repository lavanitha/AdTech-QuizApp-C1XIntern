import React from 'react';
import { Button } from './Button';
import { QUESTIONS } from '../data/questions';

interface ResultsProps {
  score: number;
  onRetry: () => void;
}

export const Results: React.FC<ResultsProps> = ({ score, onRetry }) => {
  const percentage = Math.round((score / QUESTIONS.length) * 100);
  
  let level = 'Beginner';
  let message = 'Good start! Read the book to master the basics.';
  let color = 'text-gray-600';

  if (percentage >= 90) {
    level = 'AdTech Expert';
    message = 'Outstanding! You have mastered the AdTech ecosystem.';
    color = 'text-[#FF3E24]';
  } else if (percentage >= 70) {
    level = 'Intermediate';
    message = 'Great job! You know your DSPs from your SSPs.';
    color = 'text-[#1A0C2F]';
  }

  return (
    <div className="flex-grow flex items-center justify-center p-6 animate-fade-in">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-gray-100">
        
        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 relative">
             <svg className="w-full h-full -rotate-90 absolute top-0 left-0">
                <circle cx="48" cy="48" r="40" stroke="#f3f4f6" strokeWidth="8" fill="none" />
                <circle cx="48" cy="48" r="40" stroke="#FF3E24" strokeWidth="8" fill="none" strokeDasharray="251.2" strokeDashoffset={251.2 - (251.2 * percentage) / 100} className="transition-all duration-1000 ease-out" />
             </svg>
             <span className="text-2xl font-bold text-[#1A0C2F]">{percentage}%</span>
        </div>

        <h2 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-2">Your Level</h2>
        <h1 className={`text-4xl font-bold mb-4 ${color}`}>{level}</h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
            {message} <br/>
            You scored <span className="font-bold text-[#1F1F1F]">{score}</span> out of <span className="font-bold text-[#1F1F1F]">{QUESTIONS.length}</span>.
        </p>

        <div className="space-y-3">
          <Button onClick={onRetry} fullWidth>
            Try Again
          </Button>
          <a href="https://www.avenga.com/whitepapers/adtech-book/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 text-center text-[#1A0C2F] font-semibold hover:bg-gray-50 rounded-full transition-colors border border-gray-200">
            Download the Book
          </a>
        </div>
      </div>
    </div>
  );
};