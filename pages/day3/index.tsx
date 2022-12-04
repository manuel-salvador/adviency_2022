import { useState, FormEvent, ChangeEvent } from 'react';

const initialGifts = [
  'RTX 4080',
  'GitHub Copilot',
  'Zapatillas',
  'Coleccion completa de Harry Potter',
  'Varita que tira fuego de Harry Potter',
  'Viaje a NY',
];

export default function Day3() {
  const [gifts, setGifts] = useState<string[]>(initialGifts);
  const [newGift, setNewGift] = useState<string>('');

  const handleAddItem = (e: FormEvent) => {
    e.preventDefault();
    setGifts((prevData) => [...prevData, newGift]);
    setNewGift('');
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGift(e.target.value);
  };

  return (
    <div className="h-screen bg-navideño2 bg-cover bg-center flex justify-center items-center">
      <div className=" max-w-lg py-4 px-8 bg-red-900 bg-opacity-70 shadow-xl shadow-red-900 backdrop-blur-sm rounded-md">
        <h2 className="text-4xl text-center mb-4">Regalos</h2>
        <form action="" onSubmit={handleAddItem} className="flex gap-3 my-4">
          <input
            type="text"
            value={newGift}
            onChange={handleOnChange}
            placeholder="ej. 10 BTC"
            className="bg-white py-1 px-2 text-black"
          />
          <button type="submit" className="bg-green-800 px-3">
            Agregar
          </button>
        </form>
        <ul>
          {gifts.map((gift, index) => (
            <li key={gift + index} className="text-base my-2">
              &#10052; {gift}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
