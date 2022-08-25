const addBtn = document.querySelector("#add");

// set local storage
const updateLocalStorageData = () => {
  const textArea = document.querySelectorAll("textarea");
  const notes = [];

  textArea.forEach((data) => {
    return notes.push(data.value);
  });

  localStorage.setItem("notes", JSON.stringify(notes));
};

const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");

  const htmlData = `<div class="action">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash"></i></button>
      </div>

      <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}"></textarea>`;

  note.insertAdjacentHTML("afterbegin", htmlData);

  const editBtn = note.querySelector(".edit");
  const delBtn = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  delBtn.addEventListener("click", () => {
    note.remove();
    updateLocalStorageData();
  });

  textArea.value = text;
  mainDiv.innerHTML = text;

  editBtn.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
    updateLocalStorageData();
  });

  textArea.addEventListener("change", (e) => {
    const value = e.target.value;
    mainDiv.innerHTML = value;
  });

  document.body.appendChild(note);
};

// get local Storage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener("click", () => addNewNote());
