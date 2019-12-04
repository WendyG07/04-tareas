/*Ejecutable*/
const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer');
const colors = require('colors');
/*Con esta variable tomamos los atributos del archivo yargs*/
let comando = argv._[0];
/* Dentro de un switch tenemos las acciones que se ejecutaran cuando se ingrese los comandos */
switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = tareas.getLista(argv.completado);
        for (let tarea of listado) {
            if (argv.completado === 'false' && (tarea.completado === false || tarea.completado === 'false')) {
                console.log("*****POR HACER*****".red)
                console.log(`${tarea.descripcion}`.blue)
            }
            if (argv.completado === 'true' && (tarea.completado === true || tarea.completado === 'true')) {
                console.log("*****TERMINADA*****".blue)
                console.log(`${tarea.descripcion}`.yellow)
            }
            if (argv.completado !== 'true' && argv.completado !== 'false') {
                console.log("*****TAREA*****".magenta)
                console.log(tarea.descripcion);
                console.log("Estado: ", tarea.completado);
            }
        }
        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}