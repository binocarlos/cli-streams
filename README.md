cli-streams
===========

A duplex stream of process.stdin/stdout or filestreams depending on cli options

## installation

```
$ npm install cli-streams
```

## usage

A module to use when a cli program will accept stdin and write to stdout but can optionally redirect either to a filestream.

```js
var args = require('minimist').parse(process.argv, {
	i:'input',
  o:'output'
})
var resolve = require('cli-path-resolve')
var streams = require('cli-streams')
var through = require('through2')

var data = streams(resolve(args.input), resolve(args.output))


// data is now a duplex that is either stdin/stdout/files
data.pipe(through(function(chunk, enc, next){
	this.push(chunk)
	next()	
}))
```

## api

### `var duplex = streams(inputPath, outputPath)`

Return a duplex stream

If inputpath is not null - the file is checked to exist and will throw an error if not

If it is null - the readable stream is process.stdin

If outputPath is not null - the directory is checked to exist and will throw an error if not

If it is null - the writable stream is process.stdout

### license

MIT