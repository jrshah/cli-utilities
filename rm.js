#! /usr/bin/env node
'use strict'
require('./helper')

let fs = require('fs').promise
let argv = require('yargs').argv
let path = require('path')
let co = require('co')

function* rm() {
	let pathName = argv._[0]
	try {
		let status = (yield fs.stat(pathName)).isDirectory()
		if(status) {
			yield removeSubFiles(pathName)
		}	
	} catch (error) {	
	}
	fs.rmdir(pathName)
}

let removeSubFiles = co.wrap(function*  (rootpath) {

	let filenames = yield fs.readdir(rootpath)
	
	for (let file of filenames){
    	let filePath = path.join(rootpath, file)
    	let status = yield fs.stat(filePath)
    	if (status.isDirectory()){
    	 	yield removeSubFiles(filePath)
    		fs.rmdir(filePath)
    	} 
    	else {
    		fs.unlink(filePath)
    	}
    }
    return
    		
})

module.exports = rm