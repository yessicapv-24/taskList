# taskList
Página Web generada para llevar control de tareas
![Demostración de la página](https://github.com/yessicapv-24/taskList/blob/main/task-list/imagenes/Captura%20de%20pantalla%20.png)

 Para poder desarrollar la página web se utilizó lo siguiente:
 1. React
 2. typescrpt
 3. Next.js
 4. Zustand
 5. Drag & Drop
 6. talwind

Descripción 
La página web realiza peticiones https para acceder a arreglo tipo json, te permite agragar tareas de dos formas (manual y a tavés de las peticiones), se encuentraformulado de tal manera que cuando una tarea es marcada como no completed, automáticamete se acomoda en la columna de "To do" y cuando una tarea se encuentra terminada, se agrupa dentro de la columna "completed", pero además puedes desplazar una tarea de una columna a otra mediante Drag & Drop (arrastrando la tarea), cuando arrastras la tarea de una columna a otra o la desplazas de lugar, esta cambia de color to do = rojo, completed = verde.
Utiliza un modal para la función AddItem y dependiendo del estado de la tarea, la coloca en la columna correspondiente.

Consideraciones: 
1. clonar repositorio
2. npm install
3. npm run dev
4. http://localhost:3000/



