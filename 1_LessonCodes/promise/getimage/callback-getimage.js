let newObjImage = {
  type: "png",
  size: "1800x2090",
  file: { fileName: "img.png", path: "./descktop/simpleimg.png" },
};

getImage(newObjImage, (rightTypeImage, err) => {
  if (err.length > 0) return err;

  reSizeImage(rightTypeImage, (resizedImage, err) => {
    if (err.length > 0) return err;

    saveImage(resizedImage, (savedImage, err) => {
      if (err.length > 0) return err;

      alert("Success");
    });
  });
});
//newImage-object { type: "png", size:"1800x1920", file: {fileName:"fileName", path: "./iu"} }

//checking image - png файл оруулах ёстой
function getImage(image, callback) {
  let err = "";
  if (image.type != "png") {
    err = "PNG file биш байна"; //Хэрвээ алдаа гарсан err хувьсагчдаа утга оноосон байгаа.
  }
  callback(image, err); //файл нь зөв учир дараагийн функц руу явуулж байна.
}

//resize image - файлын хэмжээг шалгаад тухайн зургийг 700x780 хэмжээтэй болгох
function reSizeImage(image, callback) {
  let err = "";
  if (image.size != "1800x2090") {
    err = "зөв хэмжээтэй файл биш байна.";
  }
  let resizedImage = image;
  //resize image үйлдлийг энд хийсэн гэж үзээд шинэ файлаа callback руу явуулж байна.
  callback(resizedImage, err);
}

//save image to DB - энд орж ирэх файл нь DB руу хадгалах файл юм
function saveImage(image, callback) {
  let savedImage = image; // Хадгалсан гэж үзье
  let err = "";
  // if (!saveImage.success) err = "error DB ";
  callback(savedImage, err);
}

///Promise ashiglasan ued
