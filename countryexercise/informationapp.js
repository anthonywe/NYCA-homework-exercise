
var fs = require ('fs')

var countryname = process.argv[2]


function readjason ( filename, calback) {
	fs.readFile(filename,'utf8', function (err,data) {
		if(err) {
			console.log("there was an error: " + err);
			throw err;
		} 
		var jsondata = JSON.parse(data)
		jsondata.forEach(function(country){
			if (country.name == countryname) {
				console.log("country: " + country.name)
				console.log("top level domain: " + country.topLevelDomain[0])
			}
		})
		calback(jsondata)
	});
}



module.exports.water = readjason

// underneat is function that can ready and output any json file, while the above code more specified for 
// they json file (country)
/*

var fs = require('fs');

var path = './example/';

fs.readdir(path, function (err, files) {
	if (err) {
		throw err;
	}

	console.log(files.length + " files found.");
	files.forEach(function(fileName) {
		readAndOutputFile(fileName);
	});
});

function readAndOutputFile(fileName) {
	fs.readFile(path + fileName, function (err, data) {
		console.log("file: " + fileName);

		if (err) {
			throw err;
		}

		var text = data.toString();
		console.log(text + '\n');
	});
}

*/