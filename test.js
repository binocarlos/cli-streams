var tape = require('tape')
var clistreams = require('./')
var fs = require('fs')

tape('test a filepipe', function(t){

	var streams = clistreams({
		input:__dirname + '/package.json',
		output:__dirname + '/package.out.json'
	})

	streams.output.on('close', function(){
		var packageorig = require(__dirname + '/package.json')
		var packageout = require(__dirname + '/package.out.json')

		t.deepEqual(packageorig, packageout, 'the files are the same')
		fs.unlinkSync(__dirname + '/package.out.json')
		t.end()
	})

	streams.input.pipe(streams.output)
})
