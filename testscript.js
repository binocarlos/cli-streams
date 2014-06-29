#!/usr/bin/env node
var args = require('minimist').parse(process.argv, {
	i:'input',
  o:'output'
})
var resolve = require('cli-path-resolve')
var clistreams = require('./')
var through = require('through2')

var streams = clistreams(resolve(args.input), resolve(args.output))

// data is now a duplex that is either stdin/stdout/files
data.input.pipe(through(function(chunk, enc, next){
	this.push(chunk.toString().toUpperCase())
	next()
})).pipe(data.output)