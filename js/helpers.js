export const guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


export function getRandomIntRank(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function checkEmptyFields(form, event) {
    const errorName = document.querySelector('.errorName');
    const errorEmail = document.querySelector('.errorEmail');

    if (form.noteName.value === '' || form.noteEmail.value === '') {
        event.preventDefault();
        if (form.noteName.value === '') {
            errorName.classList.add('visible');
        }
        if (form.noteEmail.value === '') {
            errorEmail.classList.add('visible');
        }

        return false;
    }

    const emailTemplate = new RegExp(/^(([^<>()\\[\].,;:\s@"]+(\.[^<>()\\[\].,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/, 'g');

    if (!emailTemplate.test(form.noteEmail.value)) {
        errorEmail.classList.add('visible');
        errorEmail.innerText = 'Email not correct';

        return false;
    }

    return true;
}


