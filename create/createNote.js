import {renderRanks} from "../js/rendering.js";
import {checkEmptyFields, guid} from "../js/helpers.js";
import {rangeRank, userStatus} from "../js/constants.js";

const form = document.forms.noteForm;
const rankContainer = document.getElementsByClassName('noteRank')[0];
const btnSetNote = document.getElementById('btnSetNote');
const btnSendEditNote = document.getElementById('btnEditNote');
const btnClose = document.getElementById('btnClose');

renderRanks(rangeRank.MIN, rankContainer);

form.noteName.addEventListener('input', () => {
    const error = document.querySelector('.errorName');
    error.classList.remove('visible');
})

form.noteEmail.addEventListener('input', () => {
    const error = document.querySelector('.errorEmail');
    error.classList.remove('visible');
})

btnSetNote?.addEventListener('click', (e) => {
    if (checkEmptyFields(form, e)) {
        const newNote = {
            id: guid(),
            rank: form.noteRank.value,
            name: form.noteName.value,
            username: form.noteUsername.value.trim() !== '' ? form.noteUsername.value : form.noteName.value,
            email: form.noteEmail.value,
            order: form.noteOrder.value,
            userStatus: userStatus.ACTIVE,
        }

        window.top.postMessage(newNote, '*');
        window.parent.document.getElementById('newUserWin').classList.remove('visible');
    }
})

btnSendEditNote?.addEventListener('click', (e) => {
    if (checkEmptyFields(form, e)) {
        const editNote = {
            rank: form.noteRank.value,
            name: form.noteName.value,
            username: form.noteUsername.value.trim() !== '' ? form.noteUsername.value : form.noteName.value,
            order: form.noteOrder.value,
        }

        document.forms.noteForm.reset();
        document.forms.noteForm.noteEmail.removeAttribute('disabled');
        document.getElementById('btnSetNote').removeAttribute('disabled');
        document.getElementById('btnEditNote').setAttribute('disabled', 'true');

        window.top.postMessage(editNote, '*');
        window.parent.document.getElementById('newUserWin').classList.remove('visible');
    }
})

btnClose?.addEventListener('click', () => {
    document.forms.noteForm.reset();
    document.forms.noteForm.noteEmail.removeAttribute('disabled');
    document.getElementById('btnSetNote').removeAttribute('disabled');
    document.getElementById('btnEditNote').setAttribute('disabled', 'true');

    window.parent.document.getElementById('newUserWin').classList.remove('visible');
})

window.onmessage = function (event) {
    if ('id' in event.data && 'rank' in event.data && 'name' in event.data && 'username' in event.data && 'email' in event.data && 'order' in event.data && 'userStatus' in event.data) {
        form.noteRank.value = event.data.rank;
        form.noteName.value = event.data.name;
        form.noteUsername.value = event.data.username;
        form.noteEmail.value = event.data.email;
        form.noteOrder.value = event.data.order;

        form.noteEmail.setAttribute('disabled', 'true');
        btnSetNote.setAttribute('disabled', 'true');
        btnSendEditNote.removeAttribute('disabled');
    }
};

