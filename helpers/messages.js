import color from 'colors'
import readline from 'readline'



export const showMenu = () => {
    return new Promise(resolve => {
        console.clear()
        console.log("=============================".green)
        console.log('Seleccione una opción'.green)
        console.log("=============================\n".green)

        console.log(`${'1'.green}. Crear una tarea`)
        console.log(`${'2'.green}. Listar tarea `)
        console.log(`${'3'.green}. Listar tareas completadas`)
        console.log(`${'4'.green}. Listar tareas pendientes`)
        console.log(`${'5'.green}. Completar tarea(s)`)
        console.log(`${'6'.green}. Borrar tareas\n`)

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        rl.question('Selecciones una opcion: ', (opt) => {
            rl.close()
            resolve(opt)
        })

    })


}

export const pause = () => {
    return new Promise(resolve => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`Presiones ${'ENTER'.blue} para continuar  `, () => {

            rl.close()
            resolve(

            )
        })
    }
    )
}