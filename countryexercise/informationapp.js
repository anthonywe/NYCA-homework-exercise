
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




