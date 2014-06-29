var path = require('path')
var fs = require('fs')

module.exports = function(filepaths){

	filepaths = filepaths || {}

	var inputStream = process.stdin
	var outputStream = process.stdout

	if(filepaths.input){
		if(typeof(filepaths.input)==='string'){
			if(!fs.existsSync(filepaths.input)){
		    console.error('error - file: ' + inputpath + ' does not exit')
		    process.exit(1)
		  }
		  inputStream = fs.createReadStream(filepaths.input)
		}
		else{
			inputStream = filepaths.input
		}
	}

	if(filepaths.output){
		if(typeof(filepaths.output)==='string'){
		  var outputfolder = path.dirname(filepaths.output)
		  if(!fs.existsSync(outputfolder)){
		    console.error('error - folder: ' + outputfolder + ' does not exit')
		    process.exit(1)
		  }
		  outputStream = fs.createWriteStream(filepaths.output)
		}
		else{
			outputStream = filepaths.output
		}
	}

	return {
		input:inputStream,
		output:outputStream
	}
}