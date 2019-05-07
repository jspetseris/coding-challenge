function test(csv) {
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
  return console.log(newArray)
}

function test2(url) {
  const axios = require('axios');
  axios.get(url)
	.then(function (response) {
		return console.log(response)
	})
	.catch(function (error) {
		// handle error
		return console.log(`Error: ${error.message}`)
	})
}

test('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13')
test2('https://www.omdbapi.com/?t=Matrix&y=&plot=short&apikey=')