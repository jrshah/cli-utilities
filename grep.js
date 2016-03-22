#!/usr/bin/env node
'use strict'

require('./helper')
let fs = require('fs').promise
let argv = require('yargs').argv
let path = require("path")

function* grep() {
    // Use 'yield' in here
    // Your implementation here
    let needle = argv._[0]
    let haystack = argv._[1]

    let fileData = (yield fs.readFile(haystack)).toString().split('\n')
    
    if (fileData) {
        for (let line of fileData) {
            if(line.match(needle)) {
                process.stdout.write(line + '\n')
            }
        }
    }
    
}

module.exports = grep