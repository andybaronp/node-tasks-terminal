import colors from 'colors'
import { Task } from "./index.js";


export class Tasks {

    /**
 *  
 * _lis: {
 * 'uuid-132333: {id:12 , desc: 'desd', complete: 12323}'
 * }
 * 
 */

    _list = {};

    get listadoArr() {
        const listado = [];
        //Obteniendo las keys se crea un array con ellas 
        Object.keys(this._list).forEach(key => {
            const task = this._list[key]
            listado.push(task)
        })
        return listado
    }

    constructor() {
        this._list = {}
    }

    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id]
        }
    }


    loadTaksFromArray(tasks = []) {

        tasks.forEach(task => {
            this._list[task.id] = task
        })

    }

    newTask(desc) {
        const task = new Task(desc)
        this._list[task.id] = task;
    }

    listAllTasks() {

        console.log()
        this.listadoArr.forEach((task, index) => {
            const idx = `${index + 1}`.green
            const { desc, completeIn } = task

            const state = completeIn ? 'Completado'.green : 'Pendiente'.red
            console.log(`${idx}. ${desc}: ${state}`)
        })
    }

    listCompletedOrPending(complete = true) {

        const filtrada = this.listadoArr.filter(task => complete ? task.completeIn !== null : task.completeIn === null)
        if (filtrada.length === 0) {
            console.log('No hay tareas'.yellow)

        }
        console.log()
        filtrada.forEach((task, index) => {
            const idx = `${index + 1}`.green
            const { desc, completeIn } = task
            // const state = (completeIn !== null) ? `${completeIn}`.green : 'Pendiente'.red
            const state = completeIn ? `${completeIn}`.green : 'Pendiente'.red

            console.log(`${idx}. ${desc}: ${state}`)
        })
    }


    toggleCompleted(ids = []) {

        ids.forEach(id => {
            const task = this._list[id]
            if (!task.completeIn) {
                task.completeIn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach(task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completeIn = null
            }
        })
    }

}