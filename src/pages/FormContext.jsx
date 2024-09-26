import React, { createContext, useState } from 'react';

// Créer un contexte
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [player1Value, setPlayer1Value] = useState('');
  const [player2Value, setPlayer2Value] = useState('');

  const [player1ScoreT3, setPlayer1ScoreT3] = useState(0);
  const [player2ScoreT3, setPlayer2ScoreT3] = useState(0);

  const [player1ScoreRps, setPlayer1ScoreRps] = useState(0);
  const [player2ScoreRps, setPlayer2ScoreRps] = useState(0);
  return (
    <FormContext.Provider value={{ player1Value, setPlayer1Value, player2Value, setPlayer2Value,
      player1ScoreT3, setPlayer1ScoreT3, player2ScoreT3, setPlayer2ScoreT3,
      player1ScoreRps, setPlayer1ScoreRps, player2ScoreRps, setPlayer2ScoreRps,
     }}>
      {children}
    </FormContext.Provider>
  );
};
