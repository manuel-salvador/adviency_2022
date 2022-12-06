import { ChangeEvent, FormEvent, useState } from 'react';

const initialGifts: string[] = [
  'RTX 4080',
  'GitHub Copilot',
  'Zapatillas',
  'Coleccion completa de Harry Potter',
  'Varita que tira fuego de Harry Potter',
  'Viaje a NY',
];

export default function day5() {
  const [gifts, setGifts] = useState<string[]>(initialGifts);
  const [newGift, setNewGift] = useState<string>('');
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  const addNewGift = (e: FormEvent) => {
    e.preventDefault();
    if (newGift !== '') {
      setGifts((prevGifts) => [...prevGifts, newGift]);
      setNewGift('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGift(e.target.value);
  };

  const deleteGift = (index: number) => {
    const newGiftList = [...gifts];
    newGiftList.splice(index, 1);
    setGifts(newGiftList);
  };

  const openConfirmModal = () => {
    setShowConfirmModal(true);
  };

  const deleteAllGifts = () => {
    setGifts([]);
    setShowConfirmModal(false);
  };

  return (
    <div className="h-screen bg-navideño2 bg-center bg-cover flex items-center justify-center">
      <div className="flex flex-col rounded-lg gap-8 py-4 px-8 w-96 p-2 bg-red-900 bg-opacity-50 backdrop-blur-sm shadow-md shadow-red-900">
        <h2 className="text-4xl text-center">Regalos</h2>
        <form className="flex gap-4" onSubmit={addNewGift}>
          <input
            type="text"
            value={newGift}
            onChange={handleChange}
            className="flex-1 bg-white text-black px-2"
          />
          <button className="bg-green-700 px-3 py-1 rounded hover:bg-green-800 transition-colors">
            Agregar
          </button>
        </form>
        <ul className="w-full flex flex-col gap-3">
          {gifts.map((gift, index) => (
            <li key={`${gift}${index}`} className="flex justify-between gap-2">
              <p>&#10052; {gift}</p>
              <span
                onClick={() => deleteGift(index)}
                className="bg-yellow-500 text-black px-2 rounded cursor-pointer select-none hover:bg-yellow-600 transition-colors"
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <button
          onClick={openConfirmModal}
          className="bg-black p-2 w-fit self-center rounded hover:bg-red-800 transition-colors"
        >
          Eliminar todos los regalos
        </button>
      </div>
      {showConfirmModal ? (
        <div
          className={`absolute top-0 left-0 h-screen w-screen bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center`}
        >
          <div className="p-4 bg-red-800 rounded">
            <h3>¿Seguro que desea eliminar todos los regalos?</h3>
            <div className="flex justify-center gap-8 mt-6">
              <button className="bg-black rounded px-3 py-1" onClick={deleteAllGifts}>
                Confirmar
              </button>
              <button
                className=" bg-slate-300 border border-black text-black rounded px-3 py-1"
                onClick={() => setShowConfirmModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
