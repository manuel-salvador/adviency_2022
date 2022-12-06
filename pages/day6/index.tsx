import { ChangeEvent, FormEvent, useState } from 'react';

const initialGifts: string[] = [
  'RTX 4080',
  'GitHub Copilot',
  'Zapatillas',
  'Coleccion completa de Harry Potter',
  'Varita que tira fuego de Harry Potter',
  'Viaje a NY',
];

export default function Day6() {
  const [gifts, setGifts] = useState<string[]>(initialGifts);
  const [newGift, setNewGift] = useState<string>('');
  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);

  const addNewGift = (e: FormEvent) => {
    e.preventDefault();
    if (newGift !== '') {
      setGifts((prev) => [...prev, newGift]);
      setNewGift('');
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewGift(e.target.value);
  };

  const handleDeleteGift = (index: number) => {
    const newGiftList = [...gifts];
    newGiftList.splice(index, 1);
    setGifts(newGiftList);
  };

  const handleOpenModal = () => {
    setShowConfirmModal((prev) => !prev);
  };

  const handleDeleteGiftList = () => {
    setGifts([]);
    setShowConfirmModal(false);
  };

  return (
    <div className="h-screen bg-navideño bg-cover flex justify-center items-center">
      <div className="p-8 w-96 bg-red-900 bg-opacity-60 rounded-lg flex flex-col gap-8 shadow-lg shadow-red-800">
        <h2 className="text-3xl text-center">Lista de Regalos</h2>
        <form onSubmit={addNewGift} className="flex gap-4">
          <input
            type="text"
            value={newGift}
            onChange={handleOnChange}
            className="bg-white flex-1 text-black px-2"
          />
          <button className="bg-green-800 px-4 py-1 rounded hover:bg-green-900 transition-colors">
            Agregar
          </button>
        </form>
        {gifts.length > 0 ? (
          <>
            <ul className="flex flex-col gap-3">
              {gifts.map((gift, index) => (
                <li className="flex justify-between items-center">
                  <p>&#10052; {gift}</p>
                  <span
                    onClick={() => handleDeleteGift(index)}
                    className="bg-yellow-600 px-2 rounded hover:bg-yellow-700 transition-colors cursor-pointer select-none"
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={handleOpenModal}
              className="bg-black w-fit self-center px-3 py-1 rounded hover:bg-red-700 transition-colors"
            >
              Eliminar todos los regalos
            </button>
          </>
        ) : (
          <p className="text-base text-center">
            Tu lista esta vacía.
            <br />
            ¡No dejes pasar la oportunidad de hacer una lista de regalos que te hagan feliz!
          </p>
        )}
      </div>
      {showConfirmModal ? (
        <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center backdrop-blur-md backdrop-brightness-50">
          <div className="p-4 bg-red-900 rounded-md">
            <h3>¿Seguro/a que quiere eliminar todos los regalos?</h3>
            <div className="mt-6 flex justify-center gap-14">
              <button
                onClick={handleDeleteGiftList}
                className="bg-black px-3 py-1 rounded hover:bg-slate-900 transition-colors"
              >
                Confirmar
              </button>
              <button
                onClick={handleOpenModal}
                className="border border-white px-3 py-1 rounded hover:bg-red-800 transition-colors"
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
