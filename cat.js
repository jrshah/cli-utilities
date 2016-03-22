#!/usr/bin/env node
'use strict'

require('./helper')
let fs = require('fs').promise
let argv = require('yargs').argv
let path = require("path")

function* cat() {
    // Use 'yield' in here
    // Your implementation here
    if (argv._.length > 0) {
    	for (let fileName of argv._) {
    		try {
    			
    			let result = yield fs.readFile(fileName, 'utf8')
		    	process.stdout.write(result + "\n")	
		    
	    	} catch (e) {
	    		process.stdout.write(e + '\n')

		    }
		}
    } else {
    	process.stdout.write("Please pass filename" + '\n \n')
    }
}

module.exports = cat
