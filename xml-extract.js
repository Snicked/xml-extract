const fs = require("fs");
const xml2js = require("xml2js");
const args = process.argv.slice(2);
const parser = new xml2js.Parser();

var file = "";
var xmlPath = [];

args.forEach((element) => {
  const value = "" + element;
  if (value.indexOf("-f") == 0) {
    file = value.split("=")[1];
  } else if (value.indexOf("-p") == 0) {
    xmlPath = value.split("=")[1].split(".");
  } else if (value.indexOf("-h") == 0 || value.indexOf("--help")) {
    console.log("Script to extract values from a xml document");
    console.log("");
    console.log("Options:");
    console.log(" -f       Filename");
    console.log(" -p       XML Path");
    process.exit();
  } else {
    logger.log(`Argument ${element} is unknown`);
  }
});

fs.readFile(file, function (err, data) {
  parser.parseString(data, function (err, result) {
    tmp = result;
    for (var key in xmlPath) {
      tmp = getPath(xmlPath[key], tmp);
    }
  });
});

function getPath(key, input) {
  var tmp = input;
  if (Array.isArray(input)) {
    tmp = [];
    for (var index in input) {
      tmp.push(getPath(key, input[index]));
    }
  } else if (typeof tmp == "object") {
    tmp = tmp[key];
  } else {
    if (input != undefined) {
      console.log(input);
    }
  }
  return tmp;
}
