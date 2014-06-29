#!/usr/bin/env node
var args = require('minimist').parse(process.argv, {
	i:'input',
  o:'output'
})
var resolve = require('cli-path-resolve')
var streams = require('./')
var through = require('through2')

var data = streams(resolve(args.input), resolve(args.output))

// data is now a duplex that is either stdin/stdout/files
data.pipe(through(function(chunk, enc, next){
	this.push(chunk.toString().toUpperCase())
	next()
})).pipe(data)