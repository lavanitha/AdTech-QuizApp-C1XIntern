import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Landing } from './components/Landing';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { AboutUs } from './components/AboutUs';
import { AppView } from './types';

function App() {
  const [view, setView] = useState<AppView>('landing');
  const [finalScore, setFinalScore] = useState(0);

  const startQuiz = () => setView('quiz');
  
  const finishQuiz = (score: number) => {
    setFinalScore(score);
    setView('results');
  };

  const retryQuiz = () => {
    setFinalScore(0);
    setView('landing');
  };

  const goToAbout = () => setView('about');
  const goBackHome = () => setView('landing');

  return (
    <Layout onAboutClick={goToAbout} onLogoClick={goBackHome}>
      {view === 'landing' && <Landing onStart={startQuiz} />}
      {view === 'quiz' && <Quiz onFinish={finishQuiz} />}
      {view === 'results' && <Results score={finalScore} onRetry={retryQuiz} />}
      {view === 'about' && <AboutUs onBack={goBackHome} />}
    </Layout>
  );
}

export default App;