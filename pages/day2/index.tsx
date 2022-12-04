import { useState } from 'react';

const initialGifts: string[] = [
  'RTX 4080',
  'GitHub Copilot',
  'Zapatillas',
  'Coleccion completa de Harry Potter',
  'Varita que tira fuego de Harry Potter',
];

export default function Day2() {
  const [gifts, setGifts] = useState<string[]>(initialGifts);

  return (
    <div className="bg-navideño bg-no-repeat bg-cover bg-top h-screen flex justify-center items-center">
      <div className="py-4 px-8 backdrop-brightness-75 backdrop-blur-md rounded-xl shadow-xl shadow-lime-900">
        <h2 className="text-4xl text-center mb-4">Regalos</h2>
        <ul>
          {gifts.map((gift) => (
            <li className="mb-2">&#10052; {gift}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
