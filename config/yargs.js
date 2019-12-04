/*En este documento yargs tenemos los comandos y sus respectivos parámetros
 *Primero definimos los parámetros de una menera global, porque todos los comandos
 *comparten los mismos parámetros y esta es una manera para repetirlos en cada comando.
 */

/*Definir parámetros*/
const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
};

const completado = {
    default: true,
    alias: 'c',
    desc: "Marca como completada o pendiente la tarea"
};
/*Definimos los comandos agregando los parámetros que cada uno necesita*/

const argv = require('yargs')
    .command('crear', 'Crear una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion
    })
    .command('listar', 'Lista las tareas según su estado', {
        completado
    })
    .help()
    .argv;
/*Exportamos argv */
module.exports = {
    argv
}