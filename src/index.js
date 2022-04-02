import "./style.css";




import deleteTask from "./delete.js";

// import menu from "./menu.js"

const taskInput = document.querySelector(".task-input input");
const taskBox = document.querySelector(".task-box");

let toDos = JSON.parse(localStorage.getItem("todo-list"));

let showtoDos = () => {
  let li = "";
  if(toDos) {
  toDos.forEach((todo, id) => {
    li += `<li class="task">
        <label for="${id}">
          <input class="clicked" type="checkbox" id="${id}" />
          <p>${todo.name}</p>
        </label>
        <div class="settings">
          <i id="ellipsis" class="fa-solid fa-ellipsis"></i>
          <ul class="task-menu">
            <li><i class="fa-solid fa-pen"></i>Edit</li>
            <li onclick="deleteTask(${id})" ><i class="fa-solid fa-trash"></i>Delete</li>
          </ul>
        </div>
      </li>`;
  });
}
  taskBox.innerHTML = li;
}
showtoDos();

// data-deleted="${id}" class="delete"

// const deleted = document.querySelectorAll(".delete");

// deleted.forEach(box => box.addEventListener('click', () =>{
//   // removing selected task from to do list
//   toDos.splice(box);
//   localStorage.setItem("todo-list", JSON.stringify(toDos));
//   showtoDos();
// }))

const input = document.querySelectorAll(".clicked");

input.forEach(box => box.addEventListener('click', () => {
    let taskName = box.parentElement.lastElementChild;
    if(box.checked) {
        taskName.classList.add("checked");
    } else {
        taskName.classList.remove("checked");
    }
}))

const menu = document.querySelectorAll("#ellipsis");

menu.forEach(box => box.addEventListener('click', () => {
  let taskmenu = box.parentElement.lastElementChild;
  taskmenu.classList.add("show");
  document.addEventListener("click", e => {
  // removing the show class from task menu document click
  if(e.target.tagName != "I" || e.target != box) {
    taskmenu.classList.remove("show");
  }
  })

}))


taskInput.addEventListener("keyup", (e) => {
  let userTask = taskInput.value.trim();
  if (e.key == "Enter" && userTask) {
    if (!toDos) {
      toDos = [];
    }
    taskInput.value = "";
    let taskInfo = { name: userTask, completed: "false" };
    toDos.push(taskInfo);
    localStorage.setItem("todo-list", JSON.stringify(toDos));
    showtoDos();
  }
});
