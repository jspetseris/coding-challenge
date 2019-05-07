module.exports.run = function(csv){
/*
	A stringified CSV file will be passed into this function.
	Parse the string so it is an array of objects and return the array.
	The object properties are the header of the csv file, and the very first row of the csv file are the headers.

	Example

	function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
		[
			{FirstName: Dan, LastName: Tran, Age: 29},
			{FirstName: Don, LastName: Tran, Age: 25},
			{FirstName: Jasmine, LastName: Tran, Age: 13},
		]

	Write your code below the comment.
*/
		// check type
		if (typeof csv !== "string") {
			return [{error: "csv is not stringified" }]
		}

		function buildObject(header, line) {
			let newObj = {}
	    line = line.split(",")
			for (let i = 0; i < header.length; i++) {
				newObj[header[i]] = line[i]
			}
			return newObj
		}

		let splitOnLine = csv.split("\n")
		let header = splitOnLine[0].split(',')
		let body = splitOnLine.slice(1)
		// maps body array and builds an object for each line
		let newArray = body.map(line => {
			return buildObject(header, line)
		})
		// console.log(newArray)
		return newArray

};
