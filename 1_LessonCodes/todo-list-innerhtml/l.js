let tasks = [];
function addTask(e) {
  let input1 = document.getElementById("taskInfo");
  let input2 = document.getElementById("taskHour");

  let newObject = { id: tasks.length, txt: input1.value, hour: input2.value };
  tasks.push(newObject);

  e.preventDefault();

  getData();
}

function getData() {
  let tasksEle = document.getElementById("tasks");

  let loadingEl = document.getElementsByClassName("loading");

  loadingEl[0].style.display = "block";

  let row = "";

  setTimeout(() => {
    for (let i = 0; i < tasks.length; i++) {
      console.log(tasks[i].txt);
      row += `<div> 
   <span> ${tasks[i].txt}</span>
   <span> ${tasks[i].hour}</span>
   <button id="edit" onclick="edit(${tasks[i].id})"> zasah</button>
    </div>`;
    }
    tasksEle.innerHTML = row;
    loadingEl[0].style.display = "none";
  }, 3000);
}

function edit(id) {
  console.log(id);
  //find element hiigeed set input
}

// setTimeout(getData, 3000);

// getData();
