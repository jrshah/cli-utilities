#!/usr/bin/env node
'use strict'

require('./helper')
let fs = require('fs').promise
let argv = require('yargs').argv

function* echo() {
    // Use 'yield' in here
    // Your implementation here
    if (argv._.length > 0) {
    	for(let argument of argv._){
    		process.stdout.write(argument + " ")	
    	}
    } else {
    	process.stdout.write("Please pass data you want to echo")
    }
    
	process.stdout.write("\n")	
}

module.exports = echo
