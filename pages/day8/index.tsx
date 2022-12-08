import { ChangeEvent, FormEvent, useState } from 'react';

type Gift = {
  name: string;
  quantity: number;
};

export default function Day8() {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [newGift, setNewGift] = useState<Gift>({ name: '', quantity: 1 });
  const [inputMessage, setInputMessage] = useState<string>('');
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!!inputMessage) setInputMessage('');
    const { name, value } = e.target;
    setNewGift((prev) => ({ ...prev, [name]: value }));
  };

  const addNewGift = (e: FormEvent) => {
    e.preventDefault();

    if (newGift.name == '' || newGift.quantity < 1) {
      setInputMessage('👮‍♂️✋ Asegurese de escribir el nombre del regalo y la cantidad');
      return;
    }

    const indexGiftFounded = gifts.findIndex((gift) => gift.name === newGift.name);
    const sameQuantity = gifts[indexGiftFounded]?.quantity == newGift.quantity;

    const newGiftList = [...gifts];

    if (indexGiftFounded > -1) {
      if (!sameQuantity) {
        newGiftList[indexGiftFounded].quantity = newGift.quantity;
        setInputMessage('Cantidad de regalos actualizado 🤙');
      } else {
        setInputMessage(
          'El regalo ya esta en la lista, puede actualizar la cantidad cambiando el campo correspondiente'
        );
        return;
      }
    } else {
      newGiftList.push(newGift);
    }

    setGifts(newGiftList);
    setNewGift({ name: '', quantity: 1 });
  };

  const deleteGift = (index: number) => {
    if (!!inputMessage) setInputMessage('');
    setGifts((gifts) => gifts.filter((_, i) => i !== index));
  };

  const handleOpenModal = () => {
    if (!!inputMessage) setInputMessage('');
    setOpenModal((prev) => !prev);
  };

  const deleteAllGifts = () => {
    setGifts([]);
    setOpenModal(false);
  };

  return (
    <main className="h-screen bg-navideño bg-cover bg-center bg-fixed flex justify-center items-center">
      <div className="w-96 p-8 gap-8 flex flex-col bg-red-800 bg-opacity-60 rounded-xl shadow-lg shadow-red-700">
        <h1 className="text-center text-3xl">📜 Lista de Regalos 🎄</h1>
        <form onSubmit={addNewGift}>
          <div className="flex gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                value={newGift.name}
                onChange={handleOnChange}
                className="bg-yellow-500 w-3/4 px-2 rounded text-black"
                autoComplete="off"
              />
              <input
                type="number"
                name="quantity"
                value={newGift.quantity}
                onChange={handleOnChange}
                className="w-1/4 px-2 text-center rounded"
                min={0}
              />
            </div>
            <button className="bg-green-800 hover:bg-green-900 transition-colors px-3 py-1 rounded">
              Agregar
            </button>
          </div>
          {!!inputMessage && <span className="mt-3 block text-center">{inputMessage}</span>}
        </form>
        {gifts.length > 0 ? (
          <>
            <ul className="flex flex-col gap-3">
              {gifts.map((gift, index) => (
                <li key={gift.name + index} className="flex justify-between items-center">
                  <p className="text-lg">
                    &#10052; {gift.name} x{gift.quantity}
                  </p>
                  <span
                    onClick={() => deleteGift(index)}
                    className="px-2 bg-yellow-500 hover:bg-yellow-600 transition-colors text-black rounded cursor-pointer select-none"
                  >
                    X
                  </span>
                </li>
              ))}
            </ul>
            <button
              className="bg-black hover:bg-red-600 transition-colors w-fit px-2 py-1 self-center rounded"
              onClick={handleOpenModal}
            >
              ⚠ Eliminar todos los regalos ⚠
            </button>
          </>
        ) : (
          <p className="text-center">
            Tu lista esta vacía 😕
            <br />
            ¡No dejes pasar la oportunidad de hacer una lista de regalos que te hagan feliz! 🤝
          </p>
        )}
      </div>
      {openModal && (
        <div className="absolute h-screen w-screen backdrop-blur-lg backdrop-brightness-50 flex justify-center items-center">
          <div className="bg-red-800 p-4 rounded-md">
            <h3 className="font-medium">¿Seguro que desea eliminar todos los regalos? 🤔</h3>
            <div className="mt-4 flex justify-center gap-8">
              <button
                className="bg-black hover:bg-slate-900 transition-colors px-3 py-1 rounded"
                onClick={deleteAllGifts}
              >
                Confirmar 🚮
              </button>
              <button
                className="border hover:bg-red-700 transition-colors px-3 py-1 rounded"
                onClick={handleOpenModal}
              >
                Cancelar 😎
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
