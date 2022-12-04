import { useState } from 'react';

type Gift = string;

const initialGifts: Gift[] = [
  'Zapatillas',
  'RTX 4080',
  'Colección completa de Harry Potter',
  'Varita HP con fuego',
];

export default function Day1() {
  const [gifts, setGifts] = useState<Gift[]>(initialGifts);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-sky-300 to-sky-800">
      <main>
        <h1 className="text-5xl">Regalos</h1>
        <ul className="my-4 list-disc">
          {gifts.map((gift, index) => (
            <li key={index} className="text-lg">
              {gift}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
