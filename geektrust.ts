import * as fs from "fs"
import { inputParser, inputHandler } from "./src/utils/input"
import { initCollection } from './src/utils/collection'

initCollection()

fs.readFile(process.argv[2], "utf8", (err, data) => {
    if (err) { throw err.message }
    const dataLines = data.split('\n')
    dataLines.map((data) => {
        inputHandler(inputParser(data))
    })
})