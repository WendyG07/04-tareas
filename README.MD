## Aplicación de comandos NodeJS

Recuerda instalar los paquetes

```
npm install 
npm install --save yargs
npm install colors
```

El archivo data.json se crea al registrar la primera tarea.


# Descripción de comandos:


**crear:** Agrega tareas al la lista de tareas (data.json) y por default no van a estar completadas o sea que se van a registrar como *false*. Necesita de dos parámetros para crear la tarea:

-d: Es el nombre de la tarea. (descripción)


-c: Es el estado de la tarea falso en caso de que aún no se termine y true en caso de que este lista, al momento de crear la tarea este atributo sera por defecto false (no completado).


**listar:** Este comando listara las tareas según el estado, si queremos listar aquellas que estan listas entonces el comando debe ser el siguiente:


```
node app.js listar -c true
```


Y para las que aún no estan terminadas cambiamos *true* por *false* y si queremos listar todas las listas sin importar su estado ejecutamos:


```
node app.js listar -c
```


**actualizar:** Cambia el estado de la tarea en caso de que se haya completado se podrá cambiar a true, de lo contrario se mantendra como *false*. Este comando necesita de los mismos parámetros que crear, *-d* para especificar que tarea es y *-c* a que estado se va a cambiar.


```
node app.js actualizar -d /*nombre de la tarea*/ -c /*estado de la tarea*/
```

**borrar:** Elimina una tarea de la lista sin importar el estado de la misma. Necesita un solo parámetro *-d* para especificar la tarea que se borrara.

```
node app.js borrar -d /*nombre de la tarea*/
```

