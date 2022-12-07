showNotes();

let noteBtn = document.querySelector("#noteBtn");
let dis = document.querySelector(".dis");
noteBtn.addEventListener("click", function () {
  dis.classList.toggle("dis");
});
let saveBtn = document.querySelector(".saveBtn");
saveBtn.addEventListener("click", () => {
  dis.classList.toggle("dis");
  let titleInput = document.querySelector("#titleInput");
  let noteInput = document.querySelector("#noteInput");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    data = [];
  } else {
    data = JSON.parse(notes);
  }
  let myNotes = {
    title: titleInput.value,
    note: noteInput.value,
  };

  data.push(myNotes);
  localStorage.setItem("notes", JSON.stringify(data));
  titleInput.value = "";
  noteInput.value = "";
  showNotes();
});

function showNotes() {
  let noteSegment = document.querySelector(".noteSegment");

  let notes = localStorage.getItem("notes");

  if (notes == null) {
    data = [];
  } else {
    data = JSON.parse(notes);
  }

  let html = "";

  data.forEach((ele, index) => {
    html += `
        <div class="noteDiv">
          <div class="title">
            ${ele.title}
          </div>
          <div class="note">${ele.note}</div>
          <div class="modify">
            <i class="fa-solid fa-trash-can" id=${index} onclick="deleteNote(this.id)"></i>
          </div>
        </div>
        `;
  });

  noteSegment.innerHTML = html;
}

function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if(notes==null){
        data = []
    }else{
        data = JSON.parse(notes);
    }

    data.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(data))
    showNotes();
}
