var tape = require('tape')
var streams = require('./')

tape('test a filepipe', function(t){
	var resolved = resolve('package.json')

	t.equal(resolved, __dirname + '/package.json')
	t.end()
})
