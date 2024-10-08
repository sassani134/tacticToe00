import React from 'react';
import { useContext } from 'react';
import { FormContext } from './FormContext';

function Rockpaperscissors() {
    
  const { player1Value, player2Value, player1ScoreRps, player2ScoreRps,  setPlayer1ScoreRps, setPlayer2ScoreRps, } = useContext(FormContext);



  const handleWin1 = () => {
    setPlayer1ScoreRps(player1ScoreRps + 1);
  };

  const handleWin2 = () => {
    setPlayer2ScoreRps(player2ScoreRps + 1);
  };
  
    return (
      <>
      <div role="alert" className="p-4 border-red-500 rounded border-s-4 bg-red-50">
      <div className="flex items-center gap-2 text-red-800">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path
          fillRule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>

    <strong className="block font-medium"> Jeu à développer</strong>
    </div>

    <p className="mt-2 text-sm text-red-700">
      Mais vous pouvez toujours changer le score via les buttons
      Vous pouvez aussi revenir en arriere.
    </p>
  </div>











  <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
            <tr>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Player</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Rock Paper Scicssors</th>
            </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
            <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{player1Value}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{player1ScoreRps}</td>
            </tr>

            <tr>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{player2Value}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{player2ScoreRps}</td>
            </tr>
            </tbody>
        </table>
        </div>

        <div className='flex flex-row gap-5'>
          <button onClick={handleWin1}>{player1Value} a gagner</button>
          <button onClick={handleWin2}>{player2Value} a gagner</button>

        </div>
  
      </>
    )
  }

  export default Rockpaperscissors
