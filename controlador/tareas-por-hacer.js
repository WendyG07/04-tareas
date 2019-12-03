const fs = require('fs');

let tareasPorHacer = [];
let tareasTrue = [];
let tareasFalse = [];

const cargarDB = () => {
    try {
        tareasPorHacer = require('../db/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    };
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}

const getLista = (completado) => {
    cargarDB();
    return tareasPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;

}

const borrar = (descripcion) => {
    cargarDB();

    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        tareasPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}