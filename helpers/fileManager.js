import fs from 'fs'

const file = './db/data.json'

export const saveFile = (data) => {
    fs.writeFileSync(file, JSON.stringify(data))
}

export const readFile = () => {
    if (!fs.existsSync(file)) {
        return null
    }
    const info = fs.readFileSync(file, { encoding: 'utf-8' })
    const data = JSON.parse(info)
    return data;
}