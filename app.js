import color from 'colors'
import { inquirerMenu, listTaskDelete, pauseInquirer, readInput, confirmAction, showTaskCheckList } from './helpers/inquirer.js';
import { readFile, saveFile } from './helpers/fileManager.js';
import { Tasks } from './models/index.js';



const main = async () => {

    let opt = '';
    const tasks = new Tasks()

    //Leer el archivo db
    const tasksDB = readFile()
    if (tasksDB) {//Cargar taks
        tasks.loadTaksFromArray(tasksDB)
    }

    do {
        opt = await inquirerMenu()

        switch (opt) {
            case 1:
                const desc = await readInput('Descripcion:');
                tasks.newTask(desc)
                break;

            case 2:
                tasks.listAllTasks()
                break;
            case 3:
                //Completadas
                tasks.listCompletedOrPending(true);
                break;
            case 4:
                //Pendientes
                tasks.listCompletedOrPending(false);
                break;
            case 5:
                //Completado o pendiente
                const ids = await showTaskCheckList(tasks.listadoArr)
                tasks.toggleCompleted(ids)
                console.log('Tareas actualizadas')
                break;
            case 6:
                // Borrar
                const id = await listTaskDelete(tasks.listadoArr)
                if (id !== 0) {
                    const res = await confirmAction('Quiere borrar eso?')
                    if (res) {
                        tasks.deleteTask(id)
                        console.log('\n Tarea borrada')
                    }
                }
                break;
        }

        saveFile(tasks.listadoArr)

        await pauseInquirer()

    } while (opt !== 0);


}

main();