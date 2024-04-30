
const noteTitleInput = document.getElementById('title');
const noteTextInput = document.getElementById('note');
const addNoteButton = document.querySelector('.addNote');
const notesContainer = document.querySelector('.notes-container');


let notes = [];


addNoteButton.addEventListener('click', () => {
  
  const title = noteTitleInput.value.trim();
  const note = noteTextInput.value.trim();

  if (title && note) {

    const newNote = {
      title,
      note
    };

    notes.push(newNote);


    noteTitleInput.value = '';
    noteTextInput.value = '';


    renderNotes();
  }
});


function renderNotes() {

  notesContainer.innerHTML = '';


  notes.forEach((note, index) => {
    const noteElement = document.createElement('div');
    noteElement.className = 'note';

    const titleElement = document.createElement('h2');
    titleElement.textContent = note.title;

    const noteTextElement = document.createElement('p');
    noteTextElement.textContent = note.note;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '&times;';
    deleteButton.addEventListener('click', () => {
      // Remove the note from the notes array
      notes.splice(index, 1);

      // Render the notes again
      renderNotes();
    });

    noteElement.appendChild(titleElement);
    noteElement.appendChild(noteTextElement);
    noteElement.appendChild(deleteButton);

    notesContainer.appendChild(noteElement);
  });
}

// Render the notes initially
renderNotes();