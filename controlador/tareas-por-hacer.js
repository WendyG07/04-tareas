/*En este archivo defenimos la función de cada comando*/
const fs = require('fs');
let tareasPorHacer = [];
/*Leemos el archivo data.json*/
const cargarDB = () => {
    try {
        tareasPorHacer = require('../db/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}

/*El archivo data.json se creará al momento de agregar una taera, y después 
 *de eso se irán agregando al archivo sin ningún problema */
const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

/*Debemos agregar la función cargarDB() en todas la funciones, para obtener los datos del data.json */
const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };
    /*Con push agregamos la tarea al vector tareasPorHacer*/
    tareasPorHacer.push(tarea);
    /* Guardamos el vector en el data.json*/
    guardarDB();
    return tarea;
}

/*Esta función retorna todas las tareas*/
const getLista = (completado) => {
    cargarDB();
    return tareasPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    /*Con findIndex obtenemos la posición de la tarea que queremos actualizar
     *Vamos comparando la descripción de las tareas con la descripción que se ingresó 
     *como parámetro del comando*/
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    /*Si hay coincidencia, quiere decir que index es un número mayor que 0, entonces lo entra al if*/
    if (index >= 0) {
        /*Como ya tenemos la posición de la tarea la ubicamos en el vector tareasPorHacer 
         *en el atributo completado porque es donde tenemos el estado de la tarea y reemplazamos 
         *el nuevo valor*/
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;

}

const borrar = (descripcion) => {
    cargarDB();
    /*Con la función filter nos da un nuevo vector donde se guradará las tareas que son diferentes a la descripción
     *ingresada
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    /*Si la longuitud de los dos vectores son iguales quiere decir que ninguna tarea se ha eliminado porque ninguna coincide con
     *la descripción ingresada*/
    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
        /*De lo contrario tareasPorHacer va a ser igual al nuevoListado*/
    } else {
        tareasPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

/*Exportamos las funciones*/
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}