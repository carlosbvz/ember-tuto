/* eslint-disable no-undef */
const fs = require("fs")
const path = require("path")

const pathToFile = path.join(__dirname, "_redirects")
const pathToNewDestination = path.join(__dirname, "dist", "_redirects")

fs.copyFile(pathToFile, pathToNewDestination, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Successfully copied and moved the file!")
  }
})