# Adviency

🔔 Recordá que la idea es empezar la app de 0 cada día, no editar la del día anterior, si no te dan los tiempos o te parece mucho, editá la anterior, mejor poco que nada! 🔔

- Día 1: Para calentar motores vamos a mantener las cosas simples, mostremos una lista de regalos, 3 elementos, fijos, sin nada más.

- Día 2: Nuestra app se ve muy poco navideña, demosle unos colores más lindos, rojo, verde, amarillo! Podemos ponernos creativos con lo que queramos!

- Día 3: Estámos generosos, vamos a agregar un formulario con un input para escribir nuestro regalo y un botón para agregarlo a nuestra lista, todavía no los podemos borrar, pero... es navidad! Por que querríamos borrar regalos?

- Día 4: Papa noel no estuvo muy contento con la demanda de regalos, vamos a tener que agregar un botón de eliminar a cada elemento para poder borrarlos individualmente.

- Día 5: La gente está muy indecisa y agrega muchos regalos y después los debe borrar de a uno! Agreguemos un botón para eliminar todos los regalos a la vez!

- Día 6: Nuestra aplicación no se ve muy bien cuando no hay regalos, agreguemos un mensaje alentando a agregar regalos cuando no haya ninguno!

- Día 7: Tuvimos algunos reportes de regalos vacíos o repetidos, asegurmosnos que la gente solo pueda agregar un regalo si escribió algo y si ese regalo no está ya en la lista!

- Día 8: Cometimos un error el día anterior, la gente quiere agregar regalos repetidos para regalarselos a diferentes personas, agreguemos un campo al lado del input de texto para poner la cantidad de unidades del regalo que deberíamos comprar.

- Día 9: La gente está triste por que al cerrar la aplicación pierde todos sus regalos 😢. Usemos `localStorage` para guardar los regalos en el dispositivo del usuario y cargarlos cuando vuelve!

- Día 10: Las palabras dicen mucho pero las imágenes más! Agreguemos un campo donde podamos pegar un link de imágen para cada regalo y mostremoslo en la lista.

- Día 11: Nuestro formulario tiene muchas cosas y molesta a la vista de los usuarios, pasemoslo a un modal / drawer o lo que quieras y pongamos un botón de "Agregar regalo" que lo muestre.

- Día 12: La gente no recuerda que regalo corresponde a cada quien, agreguemos un campo para destinatario y mostremoslo.

- Día 13: Nuestros usuarios se ponen muy contentos y se equivocan al cargar regalos, agreguemos un botón editar que nos permita cambiar regalos ya agregados.

- Día 14: Nuestra aplicación no es muy accesible, hagamos que podamos agregar, borrar y editar regalos sin tocar el mouse.

- Día 15: Pronto tendremos que preparar una api para nuestra aplicación, preparemos un método para traernos nuestros regalos que use promesas o async await.

- Día 16: La gente está perdiendo la creatividad y necesita una ayuda, agreguemos un botón para obtener un regalo aleatorio para el campo "regalo", podés tener una lista fija de regalos, no es necesario que sean generados.

- Día 17: Nos olvidamos de agregar un campo de precio para nuestros regalos! Aseguremosnos de mostrar el precio correcto tomando en cuenta la cantidad de unidades del regalo.

- Día 18: La gente agrega muchos regalos y necesita saber el total de lo que gastaría, pongamos el total.

- Día 19: La gente quiere hacer el mismo regalo pero a diferentes personas o en diferentes cantidades, agreguemos un botón de duplicar que abra el modal precargado.

- Día 20: Queremos tener una lista de regalos para ir a comprar pero no queremos que tenga los botones o precios, agreguemos un botón de previsualizar que nos abra un modal.

- Día 21: Fuimos a comprar los regalos pero no teniamos datos en el celular, no queremos que le pase a alguien más, agreguemos un botón de imprimir a esa lista.

- Día 22: Levantemos el espíritu navideño agregando un sonido navideño de fondo. No tan alto, tiene que estar deshabilitado por defecto y el usuario puede habilitarlo.

- Día 23: Ya casi es navidad! Agreguemos unos copitos de nieve a nuestra app para darle el último toque navideño ❄

---

# First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
