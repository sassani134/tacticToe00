import React from 'react';
import { FormContext } from './FormContext';
import { useContext } from 'react';

function Menu() {
    
    const { player1Value, player2Value, player1ScoreT3, player2ScoreT3, player1ScoreRps, player2ScoreRps } = useContext(FormContext);
    return (
      <>
        <div> Choisis un jeu :</div>
        <div className='flex flex-row gap-5'>
        <a class="group relative inline-block focus:outline-none focus:ring" href="/tictactoe">
            <span
                class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5">

            </span>

            <span
                class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
            >
                Tic Tac Toe
            </span>
        </a>

        <a class="group relative inline-block focus:outline-none focus:ring" href="/rps">
            <span
                class="absolute inset-0 translate-x-0 translate-y-0 bg-yellow-300 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5">

            </span>

            <span
                class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
            >
                Pierre Feuille Ciseaux
            </span>
        </a>
        </div>



        <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
            <tr>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Player</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tic Tac Toe</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Rock Paper Scicssors</th>
            </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
            <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{player1Value}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{player1ScoreT3}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{player1ScoreRps}</td>
            </tr>

            <tr>
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{player2Value}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{player2ScoreT3}</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">{player2ScoreRps}</td>
            </tr>
            </tbody>
        </table>
        </div>


      </>
    )
  }

  export default Menu

