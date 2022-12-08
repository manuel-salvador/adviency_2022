import { ChangeEvent, FormEvent, useState } from 'react';

export default function Day7() {
  const [gifts, setGifts] = useState<string[]>([]);
  const [newGift, setNewGift] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!!error) setError('');
    setNewGift(e.target.value);
  };

  const addNewGift = (e: FormEvent) => {
    e.preventDefault();

    if (newGift === '') return setError('¡Faltó escribir el regalo!');

    if (gifts.includes(newGift)) return setError('¡El regalo ya esta en tu lista!');

    setGifts((prev) => [...prev, newGift]);
    setNewGift('');
  };

  const deleteGift = (index: number) => {
    const newGiftList = [...gifts];
    newGiftList.splice(index, 1);
    setGifts(newGiftList);
  };

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };

  const deleteAllGifts = () => {
    setGifts([]);
    setOpenModal(false);
  };

  return (
    <div className="min-h-screen bg-navideño bg-cover bg-fixed flex justify-center items-center">
      <div className="flex flex-col gap-8 p-8 w-96 bg-red-900 bg-opacity-70 rounded-lg shadow-lg shadow-red-800 ">
        <h1 className="text-center text-3xl">📜 Lista de Regalos 🎄</h1>
        <form className="flex flex-col items-start gap-4" onSubmit={addNewGift}>
          <div className="flex w-full gap-4">
            <input
              type="text"
              value={newGift}
              onChange={handleOnChange}
              className="flex-1 px-2 py-1 bg-yellow-400 text-black rounded"
            />
            <button className="bg-green-800 hover:bg-green-900 transition-colors px-2 py-1 rounded">
              Agregar
            </button>
          </div>
          {!!error ? <span className="self-center">👮‍♂️✋ {error}</span> : ''}
        </form>
        {gifts.length > 0 ? (
          <>
            <ul className="flex flex-col gap-3">
              {gifts.map((gift, index) => (
                <li className="flex justify-between items-center " key={gift + index}>
                  <p className="text-lg">&#10052; {gift}</p>
                  <span
                    className="px-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded cursor-pointer select-none transition-colors"
                    onClick={() => deleteGift(index)}
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
            <button
              className="bg-slate-800 hover:bg-red-600 transition-colors w-fit px-2 py-1 self-center rounded"
              onClick={handleOpenModal}
            >
              ⚠ Eliminar todos los regalos ⚠
            </button>
          </>
        ) : (
          <p className="text-base text-center">
            Tu lista esta vacía 😕
            <br />
            ¡No dejes pasar la oportunidad de hacer una lista de regalos que te hagan feliz! 🤝
          </p>
        )}
      </div>
      {openModal ? (
        <div className="absolute h-screen w-screen flex justify-center items-center backdrop-brightness-50 backdrop-blur-lg">
          <div className="bg-red-800 p-6 rounded-lg">
            <h3 className="text-xl font-medium">
              ¿Seguro/a que desea eliminar todos los regalos? 🤔
            </h3>
            <div className="mt-8 flex justify-center gap-8 text-lg">
              <button
                className="bg-black hover:bg-slate-800 transition-colors px-5 py-1 rounded"
                onClick={deleteAllGifts}
              >
                Confirmar 🚮
              </button>
              <button
                className="hover:bg-red-700 transition-colors px-5 py-1 border rounded"
                onClick={handleOpenModal}
              >
                Cancelar 😎
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
