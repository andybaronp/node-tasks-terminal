import inquirer from 'inquirer';
import color from 'colors'


const questions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1'.green}. Crear tarea`
            },
            {
                value: 2,
                name: `${'2'.green}. Listar tarea`
            },
            {
                value: 3,
                name: `${'3'.green}. Listar tareas completadas`
            },
            {
                value: 4,
                name: `${'4'.green}. Listar tareas pendientes`
            },
            {
                value: 5,
                name: `${'5'.green}. Completar tarea(s)`
            },
            {
                value: 6,
                name: `${'6'.green}. Borrar tarea`
            },
            {
                value: 0,
                name: `${'0'.green}. Salir`
            },
        ]
    }
]
const pauseQuestion = [{
    type: 'input',
    name: 'opcion',
    message: `Presiones ${'ENTER'.blue} para continuar   `,

}]
export const inquirerMenu = async () => {
    console.clear()
    console.log('============================='.green)
    console.log('Seleccione una opción'.white)
    console.log('=============================\n'.green)

    const { option } = await inquirer.prompt(questions)
    return option
}


export const pauseInquirer = async () => {

    console.log(`\n`)
    await inquirer.prompt(pauseQuestion)


}

export const readInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]

    const { desc } = await inquirer.prompt(question)
    return desc;

}


export const listTaskDelete = async (tasks = []) => {


    const choices = tasks.map((task, index) => {
        const idx = `${index + 1}.`.green
        return {
            value: task.id,
            name: `${idx} ${task.desc} `
        }
    })

    choices.unshift({
        value: 0,
        name: '0.'.green + ' Cancelar'
    })
    const question = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt(question)
    return id
}


export const confirmAction = async (message = '') => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message,

        }
    ]
    const { ok } = await inquirer.prompt(question)
    return ok
}



export const showTaskCheckList = async (tasks = []) => {


    const choices = tasks.map((task, index) => {
        const idx = `${index + 1}.`.green
        return {
            value: task.id,
            name: `${idx} ${task.desc} `,
            checked: (task.completeIn) ? true : false
        }
    })


    const question = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    const { ids } = await inquirer.prompt(question)
    return ids
}
