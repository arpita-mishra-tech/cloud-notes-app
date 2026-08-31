const notes = [];

function addNote() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    alert("Please enter title and content!");
    return;
  }

  notes.push({ title, content });
  displayNotes();

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

function displayNotes() {
  const container = document.getElementById("notes");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    container.innerHTML += `
      <div class="note">
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <button onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  displayNotes();
}
