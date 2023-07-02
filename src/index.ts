import fs from 'fs'
import { inputParser } from "./utils/inputParser"
import { inputHandler } from './utils/inputHandler'
import { initCollection } from './utils/initCollection'

initCollection()

fs.readFile(process.argv[2], "utf8", (err, data) => {
    if (err) { throw err.message }
    const dataLines = data.split('\n')
    dataLines.map((data) => {
        console.log(inputHandler(inputParser(data)))
    })
})