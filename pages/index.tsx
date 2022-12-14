import Link from 'next/link';

export default function Home() {
  return (
    <div className="px-8">
      <main className="min-h-screen py-12 flex-1 flex flex-col items-center gap-8">
        <h1 className="text-6xl">
          Bienvenido a mi{' '}
          <a
            href="https://www.linkedin.com/posts/gonzalopozzo_codesandbox-activity-7003348601644945408--Zfm?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            className="text-cyan-500 inline-block font-medium hover:underline"
          >
            Adviency!
          </a>
        </h1>

        <p className="text-2xl max-w-4xl text-center">
          El reto creado por{' '}
          <a
            href="https://www.linkedin.com/in/gonzalopozzo/"
            target="_blank"
            className="text-cyan-500 inline-block font-medium hover:underline"
          >
            Goncy
          </a>{' '}
          que consiste en hacer la misma app 24 veces desde 0, con una funcionalidad nueva cada día
        </p>
        <p className="text-2xl max-w-4xl text-center">
          Elegí hacer el challenge con React, TypeScript y Tailwind usando el framework Next.js
        </p>

        <div className="w-full border rounded p-4">
          <ul className="">
            {allDays.map((day) => (
              <li className="my-2" key={day.day}>
                <Link
                  href={`/day${day.day}`}
                  className="flex gap-2 text-lg hover:text-cyan-500 transition-colors"
                >
                  <p className="font-medium">Día {day.day} </p>
                  <span>-</span>
                  <p className="flex-1">{day.description} &rarr;</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="py-8 text-center border-t-2 border-slate-700">
        <p>Adviency 2022 - Manuel Salvador </p>
      </footer>
    </div>
  );
}

const allDays: { day: number; description: string }[] = [
  {
    day: 1,
    description: 'Creamos la app con una lista de regalos, en mi caso uso un State.',
  },
  {
    day: 2,
    description: 'La app se ve muy poco navideña, ¡vamos a darle estilos!',
  },
  {
    day: 3,
    description:
      'Colocar un formulario con un input para escribir nuestro regalo y un botón para agregarlo a nuestra lista, todavía no los podemos borrar, pero... es navidad! Por que querríamos borrar regalos?',
  },
  {
    day: 4,
    description:
      'Agregar un botón de eliminar a cada elemento para poder borrarlos individualmente.',
  },
  {
    day: 5,
    description: 'Agregar un botón para poder eliminar toda la lista completa.',
  },
  {
    day: 6,
    description:
      'Nuestra aplicación no se ve muy bien cuando no hay regalos, agreguemos un mensaje alentando a agregar regalos cuando no haya ninguno!',
  },
  {
    day: 7,
    description:
      'Tuvimos algunos reportes de regalos vacíos o repetidos, asegurmosnos que la gente solo pueda agregar un regalo si escribió algo y si ese regalo no está ya en la lista!',
  },
  {
    day: 8,
    description:
      'Cometimos un error el día anterior, la gente quiere agregar regalos repetidos para regalarselos a diferentes personas, agreguemos un input para poner la cantidad de unidades del regalo que deberíamos comprar.',
  },
];
