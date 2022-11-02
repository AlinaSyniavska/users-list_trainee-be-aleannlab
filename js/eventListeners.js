import {userStatus} from "./constants.js";

export let updateNoteIndex;

export function addEventAllBtnTrash(objBtn, arr) {
    objBtn.btnTrash.forEach((btn) => {
        btn.addEventListener('click', () => {
            const idDeletedNote = btn.parentElement.parentElement.getAttribute('data-id');
            const indexDeletedNote = arr.findIndex(item => item.id === idDeletedNote);

            arr[indexDeletedNote].userStatus = userStatus.DELETED;

            const note = document.querySelector(`[data-id="${idDeletedNote}"]`);
            note.remove();
        })
    })
}

export function addEventAllBtnEdit(objBtn, arr, objDOM) {
    objBtn.btnEdit.forEach((btn) => {
        btn.addEventListener('click', () => {
            const idEditNote = btn.parentElement.parentElement.getAttribute('data-id');
            const editNote = arr.find(item => item.id === idEditNote);
            updateNoteIndex = arr.findIndex(item => item.id === idEditNote);

            objDOM.iframe.contentWindow.postMessage(editNote, '*');
            objDOM.iframe.classList.add('visible');
        })
    })
}


