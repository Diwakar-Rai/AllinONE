showTodo();
let addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", function () {
  console.log("clicked");
  let input = document.querySelector("#todoInput");
  let todo = localStorage.getItem("todo");

  if (todo == null) {
    dataTodo = [];
  } else {
    dataTodo = JSON.parse(todo);
  }

  let myTodo = {
    list: input.value,
  };
  dataTodo.push(myTodo);
  localStorage.setItem("todo", JSON.stringify(dataTodo));
  input.value = "";
  showTodo();
  console.log(dataTodo);
});

function showTodo() {
  let section3 = document.querySelector(".section3");

  let todo = localStorage.getItem("todo");
  if (todo == null) {
    dataTodo = [];
  } else {
    dataTodo = JSON.parse(todo);
  }

  let html = "";
  dataTodo.forEach((ele, index) => {
    html += `
        <div class="task">
        <div class="date">date</div>
        <div class="work">${ele.list}</div>
        <div class="done"><i class="right fa-solid fa-check"></i></div>
        <div class="delete"><i class="cancel fa-solid fa-xmark" id=${index} onclick="deleteTodo(this.id)"></i></div>
      </div>
        `;
  });
  section3.innerHTML = html;
}

function deleteTodo(index) {
  let todo = localStorage.getItem("todo");
  if (todo == null) {
    dataTodo = [];
  } else {
    dataTodo = JSON.parse(todo);
  }

  dataTodo.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(todo));
  showTodo();
}
