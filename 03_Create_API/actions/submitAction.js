"use server"
import { writeFile } from "fs"
import fs from "fs/promises"
export const submitAction = async(e) => {
    let a = await fs.appendFile("form.txt", `Name: ${e.get("name")} Address: ${e.get("add")}\n`)
}