let newObjImage = {
  type: "png",
  size: "1800x2090",
  file: { fileName: "img.png", path: "./descktop/simpleimg.png" },
};

function getImage(image) {
  let imagePromise = new Promise((resolve, reject) => {
    if (image.type != "png") {
      reject("PNG файл биш байна");
    } else {
      resolve(image);
    }
  });
  return imagePromise;
}

function reSizeImage(rightImage) {
  let rightImagePromise = new Promise((resolve, reject) => {
    if (rightImage.size != "1800x2090") {
      reject("зөв хэмжээтэй файл биш байна.");
    } else {
      let resizedImage = rightImage;
      resolve(resizedImage);
    }
  });
  return rightImagePromise;
}

function saveImage(resizedImage) {
  let saveImagePromise = new Promise((resolve, reject) => {
    if (resizedImage == undefined) {
      reject("Алдаа гарлаа.");
    } else {
      let saveImage = resizedImage;
      resolve(saveImage);
    }
  });
  return saveImagePromise;
}

getImage(newObjImage)
  .then((image) => console.log(image))
  .catch((err) => console.log(err));

getImage(newObjImage)
  .then((image) => reSizeImage(image))
  .then((reSizedImage) => saveImage(reSizedImage))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
