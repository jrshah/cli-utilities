#!/usr/bin/env node
'use strict'

require('./helper')
let fs = require('fs').promise
let argv = require('yargs').argv
let path = require("path")

function* touch() {
    // Use 'yield' in here
    // Your implementation here
    if (argv._.length > 0) {
    	for (let fileName of argv._) {
    		try {
    			
    			let result = yield fs.stat(fileName)
                if (result.isFile()) {
                    let fd = yield fs.open(fileName, 'a');
                    yield fs.futimes(fd, new Date(), new Date())
                }
		    
	    	} catch (e) {
	    		process.stdout.write(e + '\n')

		    }
		}
    } else {
    	process.stdout.write("Please pass fileName" + '\n \n')
    }
}

module.exports = touch
