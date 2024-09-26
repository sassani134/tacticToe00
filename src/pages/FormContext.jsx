import React, { createContext, useState } from 'react';

// Créer un contexte
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [player1Value, setPlayer1Value] = useState('');
  const [player2Value, setPlayer2Value] = useState('');
  return (
    <FormContext.Provider value={{ player1Value, setPlayer1Value, player2Value, setPlayer2Value }}>
      {children}
    </FormContext.Provider>
  );
};
