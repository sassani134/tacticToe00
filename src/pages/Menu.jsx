import React from 'react';
import { FormContext } from './FormContext';
import { useContext } from 'react';

function Menu() {
    
    const { player1Value, player2Value } = useContext(FormContext);
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

        <a class="group relative inline-block focus:outline-none focus:ring" href="/pfs">
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

        <div>{player1Value}</div>
        <div>{player2Value}</div>
      </>
    )
  }

  export default Menu

