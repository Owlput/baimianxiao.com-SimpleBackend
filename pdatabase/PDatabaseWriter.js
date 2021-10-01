const fs = require("fs");
const crypto = require("crypto");

let imageInfo = []
let imageFilesArray = fs.readdirSync("./files/img/images/");
for(fname of imageFilesArray){
  let letters =""
  let fileInfo = {
    base:fname,
    name:""
  };
  for(letter of fname){
    if(letter != "."){
      letters += letter
    } else {
      fileInfo.name = letters
      break;
    }
  }
  imageInfo.push(fileInfo)
}

//console.log(JSON.stringify(imageInfo))

function dataGenerator() {
  let thumbData = [];

  for (image of imageInfo) {
    let imageUUID = crypto.randomUUID();
    let thumbDatum = {
      pri: `TempPRI${imageUUID}`,
      imageInfo: {
        title: `${image.name}`,
        source: `http://localhost:7000/files/img/thumbs/${image.name}.webp`,
      },
      imageAuthor: {
        name: "Default",
        image: "http://localhost:7000/files/img/authorProfile/Default.png",
      },
    };
    let imageDatum = {
      pri: `TempPRI${imageUUID}`,
      imageInfo: {
        title: `${image.name}`,
        source: `http://localhost:7000/files/img/images/${image.base}`,
      },
      authorInfo: {
        name: "Default",
        image: "http://localhost:7000/files/img/authorProfile/Default.png",
      },
    };
    thumbData.push(thumbDatum);
    fs.writeFileSync(
      `./pdatabase/data/imageData/TempPRI${imageUUID}.json`,
      `${JSON.stringify(imageDatum)}`,
      "utf8"
    );
  }
  fs.writeFileSync(
    "./pdatabase/data/thumbData/imageAllThumbs.json",
    `{"thumbs":${JSON.stringify(thumbData)}}`,
    "utf8"
  );
}
dataGenerator();
