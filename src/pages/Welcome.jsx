import React from 'react';
import { FormContext } from './FormContext';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

function Welcome() {

  const { player1Value, setPlayer1Value, player2Value, setPlayer2Value } = useContext(FormContext); // Accès au contexte
  const navigate = useNavigate();
  

  const handlePlayer1 = (e) => {
    setPlayer1Value(e.target.value);
  };

  const handlePlayer2 = (e) => {
    setPlayer2Value(e.target.value);
  };

  const handleSubmit = () => {
    // Naviguer vers la page suivante
    navigate('/menu');
  };


    return (
      <>
        <div>
          <h1>Page 1</h1>
          <textarea value={player1Value} onChange={handlePlayer1} />
          <textarea value={player2Value} onChange={handlePlayer2} />
          <button onClick={handleSubmit}>choisir un jeu</button>

        </div>
      </>
    )
  }

  export default Welcome
