import React from 'react';
import data from '../public/characters.json';
import LoginPage from './LoginPage';

function Characters({ onLogout }) {
  return (
    <div className="bg-black h-screen w-screen text-white p-4">
      <div className="mx-40 my-20">
        <button
          className="bg-black text-white font-light py-2 px-8 rounded absolute top-4 right-4"
          onClick={onLogout}
        >
          Se deconnecter
        </button>
        <div className="grid grid-cols-4 gap-4">
          {data.map((character, index) => (
            <div
              key={index}
              className={`bg-neutral-800 p-4 rounded-lg ${
                index === 0
                  ? 'col-span-1 row-span-1'
                  : index === 1
                  ? 'col-span-1 row-span-1'
                  : index === 2
                  ? 'col-span-2 row-span-2'
                  : index === 3
                  ? 'col-span-2 row-span-1'
                  : index >= 4 && index <= 8
                  ? 'col-span-1 row-span-1'
                  : 'col-span-1 row-span-1'
              }`}
            >
              <h2 className="font-light text-xl text-slate-300 font-semibold">{character.name}</h2>
              {index === 2 ? (
                <img
                  src={`/images${character.imageUrl}`}
                  alt={character.name}
                  className="mt-2 max-h-64 max-w-64 object-cover"
                />
              ) : (
                <div className="mt-2 w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={`/images${character.imageUrl}`}
                    alt={character.name}
                    className="max-w-full max-h-full"
                  />
                </div>
              )}
              <p className="text-neutral-500 mt-2 text-xl">{character.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Characters;
