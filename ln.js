#!/usr/bin/env node
'use strict'

require('./helper')
let fs = require('fs').promise
let argv = require('yargs').argv
let path = require("path")

function* ln() {
    // Use 'yield' in here
    // Your implementation here
    let source = argv._[0] || __dirname
    let target = argv._[1]
    yield fs.symlink(source, target)
}

module.exports = ln