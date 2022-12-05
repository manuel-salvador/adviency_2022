import { useState, ChangeEvent, FormEvent } from 'react';

const initialGifts: string[] = [
  'RTX 4080',
  'GitHub Copilot',
  'Zapatillas',
  'Coleccion completa de Harry Potter',
  'Varita que tira fuego de Harry Potter',
  'Viaje a NY',
];

export default function Day4() {
  const [gifts, setGifts] = useState<string[]>(initialGifts);
  const [newGift, setNewGift] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGift(e.target.value);
  };

  const addGift = (e: FormEvent) => {
    e.preventDefault();

    if (newGift !== '') {
      setGifts((prevEl) => [...prevEl, newGift]);
      setNewGift('');
    }
  };

  const deleteGift = (gift: number) => {
    const newGifts = [...gifts];
    newGifts.splice(gift, 1);

    setGifts(newGifts);
  };

  return (
    <div className="h-screen bg-navideño2 bg-cover bg-center flex justify-center items-center">
      <div className="bg-red-900 py-4 px-7 bg-opacity-50 backdrop-blur-sm shadow-lg shadow-red-900 max-w-md">
        <h2 className="text-center text-4xl mb-4">Regalos</h2>
        <form onSubmit={addGift} className="flex gap-4 my-4">
          <input
            type="text"
            value={newGift}
            className="px-2 py-1 bg-white text-black flex-1"
            onChange={handleChange}
          />
          <button className="bg-lime-700 px-3 py-1 rounded">Agregar</button>
        </form>
        <ul className="w-80">
          {gifts.map((gift, index) => (
            <li
              key={gift}
              className="my-3 text-base w-full flex justify-between items-center gap-4"
            >
              <p>&#10052; {gift}</p>
              <span
                className="px-2 bg-yellow-400 text-black rounded cursor-pointer"
                onClick={() => deleteGift(index)}
              >
                X
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
