#! /usr/bin/env node
'use strict'
require('./helper')

let fs = require('fs').promise
let argv = require('yargs').argv

function* mkdir() {
	let pathName = argv._[0]
	let aDirectory = pathName.split('/')
	
	if (aDirectory.length > 2) {
		let newPathName = "."
		for(let name of aDirectory) {
			if (!(name == "." || name == "")) {
				newPathName = newPathName + "/" + name;
				yield fs.mkdir(newPathName)
			}
		}
	} else {
		yield fs.mkdir(pathName)
	}
	
}

module.exports = mkdir