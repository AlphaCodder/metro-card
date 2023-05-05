import fs from "fs"

const filename = process.argv[2]

fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
        throw err
    }
    const inputLines: string[] = data.toString().split("\n")
    // Add your code here to process input commands
    console.log(data)
})