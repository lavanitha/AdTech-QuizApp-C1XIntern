import React, { useState } from 'react';
import { QUESTIONS } from '../data/questions';
import { Button } from './Button';
import { QuizState } from '../types';

interface QuizProps {
  onFinish: (score: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({ onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex) / QUESTIONS.length) * 100;

  const handleOptionClick = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
    setIsAnswered(true);

    if (optionId === question.correctOptionId) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onFinish(selectedOption === question.correctOptionId ? score + 1 : score); // Add last point if correct current
    }
  };

  return (
    <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 max-w-3xl mx-auto w-full">
      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-[#FF3E24] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Chapter Badge */}
      <div className="mb-6 inline-block px-4 py-1 rounded-full bg-[#1A0C2F]/5 text-[#1A0C2F] text-xs font-bold tracking-wider uppercase">
        {question.chapterSource}
      </div>

      {/* Question */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#1A0C2F] mb-8 text-center leading-snug">
        {question.question}
      </h2>

      {/* Options Grid */}
      <div className="grid grid-cols-1 gap-4 w-full mb-8">
        {question.options.map((option) => {
          let optionStyles = "bg-white border-2 border-transparent hover:border-gray-200 shadow-sm";
          
          if (isAnswered) {
            if (option.id === question.correctOptionId) {
              optionStyles = "bg-green-50 border-green-500 text-green-900 shadow-none";
            } else if (option.id === selectedOption) {
              optionStyles = "bg-red-50 border-red-500 text-red-900 shadow-none";
            } else {
              optionStyles = "bg-gray-50 text-gray-400 border-transparent opacity-60";
            }
          } else if (selectedOption === option.id) {
            optionStyles = "bg-[#1A0C2F] text-white border-[#1A0C2F]";
          } else {
             optionStyles = "bg-white text-[#1F1F1F] hover:shadow-md hover:-translate-y-0.5 border-gray-100";
          }

          return (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              disabled={isAnswered}
              className={`w-full p-4 md:p-5 rounded-xl text-left transition-all duration-200 font-medium ${optionStyles} flex items-center justify-between group`}
            >
              <span>{option.text}</span>
              {isAnswered && option.id === question.correctOptionId && (
                <svg className="w-6 h-6 text-green-500 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              )}
              {isAnswered && selectedOption === option.id && selectedOption !== question.correctOptionId && (
                <svg className="w-6 h-6 text-red-500 ml-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation Box */}
      {isAnswered && (
        <div className="w-full bg-[#1A0C2F] text-white p-6 rounded-xl shadow-xl mb-8 animate-fade-in-up">
            <h3 className="font-bold text-[#FF3E24] uppercase tracking-wider text-xs mb-2">Explanation</h3>
            <p className="text-white/90 leading-relaxed">{question.explanation}</p>
        </div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <div className="w-full flex justify-end">
          <Button onClick={handleNext} className="shadow-xl">
            {currentQuestionIndex === QUESTIONS.length - 1 ? "See Results" : "Next Question"}
          </Button>
        </div>
      )}
    </div>
  );
};