import React from 'react';
import charactersData from '../public/characters.json'; 

const CharactersPage = () => {
  const characters = charactersData;

  return (
    <div className="flex flex-wrap justify-center bg-gray-800 p-8">
      {characters.map((character, index) => (
        <div key={index} className="m-4 p-6 bg-gray-200 rounded-md text-black">
          <img
            src={`/images${character.imageUrl}`}
            alt={character.name}
            className="mb-4 max-w-full max-h-32"
          />
          <h2 className="text-xl font-bold mb-2">{character.name}</h2>
          <p>{character.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CharactersPage;
