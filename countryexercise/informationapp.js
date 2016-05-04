
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

/*

var countryname = process.argv[2] // the jason file is case sensitive!
var fs = require ('fs')

// Function that reads and loops json country file

fs.readfile("./countries.json", function (error, filedata ) {
	if ( error ) {
		console.log ("something is up! Details: " + error)
		throw error
	}
	// store our file data in var as json
	var jsondata = JSON.parse(fiedata)

	// loop through the json to match country to parameter
	jsondata.forEach ( function(country)) {
		if ( country.name == countryname) {
			console.log("Country: " + country.name)
			console.log("Top Level Domain: " + country.topLevelDomain)
		}
	})
})

*/


