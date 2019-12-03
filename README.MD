## Aplicación de comandos NodeJS

Recuerda instalar los paquetes
colors

```
npm install
```
Descripción de comandos:


crear: Necesita de dos parámetros para crear la tarea:

-d: Es el nombre de la tarea. (descripción)
-c: Es el estado de la tarea falso en caso de que aún no se termine y true en caso de que este lista, al momento de crear la tarea este atributo sera por defecto false. (completado)

listar: Un solo parámetro:
Este comando listara las tareas según el estado, si queremos listar aquellas que estan listas entonces el comando deber como el siguiente:
```
node app.js listar -c true
```
Y para las que aún no estan terminadas cambiamos true por false, y si queremos listar todas las listas sin importar su estado ejecutamos:
```
node app.js listar -c
```
actualizar: Este comando necesita de los mismos parámetros que crear, para cambiar el estado de una tarea.
```
node app.js actualizar -d //nombre de la tarea -c //estado de la tarea
```

