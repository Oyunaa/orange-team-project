//Цай чанах
//1. Саваа угаах
//2. Ус хийх
//3. Гал дээр тавих, асаах
//4. Давс хийх
//5. Идээ хийх

function listenMusic() {
  return new Promise((resolve, reject) => {
    // resolve("play christmas song");
    resolve([
      { id: 1, name: "Bold" },
      { id: 2, name: "Tuya" },
    ]);
  });
}

function washPot(isWater) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isWater
        ? resolve([
            { id: 3, name: "Gan" },
            { id: 4, name: "Sukh" },
          ])
        : reject("no water");
    }, 2000);
  });
}

function doWaterToPot(size) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (size == 100) {
        resolve("full water");
      } else {
        resolve("water is not enough");
      }
    }, 2000);
  });
}
function putIntoFire(isElectricity) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      isElectricity ? resolve("turn on fire") : reject("no electricity");
    }, 2000);
  });
}

function putSaltintoPot(sizeSalt) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      sizeSalt < 5 ? resolve("put salt into water") : reject("too much salt");
    }, 2000);
  });
}

function putTeaintoPot() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("water has tea");
    }, 2000);
  });
}

washPot(true)
  .then((res) => {
    console.log(res);
    return doWaterToPot(100);
  })
  .then((res) => {
    console.log(res);
    putIntoFire(true);
  })
  .then((res) => putSaltintoPot(3))
  .then((res) => putTeaintoPot())
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("hahahah"));

function checkError() {
  return new Promise((resolve, reject) => {
    //form - utga shalgah
    //yamar neg amlalt uguh eseh
    //yamar negen uildeh hiih eseh
  });
}

let prom = new Promise((resolve, reject) => {
  resolve("ss");
});

// prom.then((result) => {
//   console.log(result);
// });

// prom.catch((err) => console.log(err));

// let combined_promise = Promise.all([listenMusic(), washPot(true)]);

// combined_promise.then((res) => console.log(res));

// console.log("j", combined_promise);

async function allWork() {
  try {
    let a = await washPot(true);
    let b = await doWaterToPot(100);
    let c = await putIntoFire(true);

    return c;
  } catch (err) {
    console.log(err);
  }
}

allWork().then((res) => console.log("all", res));

console.log("allWork", allWork());
