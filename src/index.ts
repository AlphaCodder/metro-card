import fs from "fs"
import { vaultManager } from "./vaultManager"

const filename = process.argv[2]

fs.readFile(filename, "utf8", (err, data) => {
    if (err) { throw err }

    const inputLines: string[] = data.toString().split("\n")
    inputLines.forEach((line) => {
        console.log(vaultManager(line))
    })
})