import {headerListHtml} from "./htmlTemplates.js";
import {rangeRank, userStatus} from "./constants.js";
import {addEventAllBtnEdit, addEventAllBtnTrash} from "./eventListeners.js";

export const renderUsers = (arr, objDOM) => {
    const {usersContainer} = objDOM;

    const sortedArr = arr.slice().sort((a, b) => b.rank - a.rank);

    usersContainer.innerHTML = headerListHtml;

    sortedArr.forEach(item => {
        if (item.userStatus !== userStatus.DELETED) {
            const user = document.createElement('div');
            user.classList.add('user', 'userItem');
            user.setAttribute('id', item.id);
            user.setAttribute('data-rank', item.rank);
            user.setAttribute('draggable', 'true');

            user.ondragstart = (ev) => {
                onDragStart(ev);
            }

            const userRank = document.createElement('div');
            userRank.classList.add('userRank');
            userRank.innerHTML = item.rank;

            const userName = document.createElement('div');
            userName.classList.add('userName');
            userName.innerHTML = item.name;

            const userEmail = document.createElement('div');
            userEmail.classList.add('userEmail');
            userEmail.innerText = item.email;

            const userOrder = document.createElement('div');
            userOrder.classList.add('userOrder');
            userOrder.innerText = item.order;

            const btnControl = document.createElement('div');
            btnControl.classList.add('btnControl');

            const btnEdit = document.createElement('div');
            btnEdit.classList.add('btnEdit');
            btnEdit.innerHTML = '<i class="fa-solid fa-pen"></i>'

            const btnTrash = document.createElement('div');
            btnTrash.classList.add('btnTrash');
            btnTrash.innerHTML = '<i class="fa-solid fa-trash"></i>'

            btnControl.append(btnEdit, btnTrash);

            user.append(userRank, userName, userEmail, userOrder, btnControl);
            usersContainer.appendChild(user);
        }
    })

    addEventAllBtnTrash(getDOMButtons(), arr);
    addEventAllBtnEdit(getDOMButtons(), arr, objDOM);
}

export const renderRanks = (rankContainer) => {
    for (let i = rangeRank.MIN; i <= rangeRank.MAX; i++) {
        const rankElement = document.createElement('input');
        rankElement.setAttribute("id", `rank${i}`);
        rankElement.setAttribute("type", "radio");
        rankElement.setAttribute("name", "noteRank");
        rankElement.setAttribute("value", `${i}`);

        if (i === rangeRank.MIN) {
            rankElement.setAttribute("checked", "true");
        }

        const rankLabel = document.createElement('label');
        rankLabel.setAttribute("for", `rank${i}`);
        rankLabel.innerText = `${i}`;

        rankContainer.appendChild(rankElement);
        rankContainer.appendChild(rankLabel);
    }
}

function getDOMButtons() {
    const btnTrash = document.querySelectorAll('.userItem > .btnControl > .btnTrash');
    const btnEdit = document.querySelectorAll('.usersContainer > .userItem > .btnControl > .btnEdit');

    return {
        btnTrash,
        btnEdit,
    };
}

// ************* Drag and Drop API *****************

export function onDragStart(event) {
    event
        .dataTransfer
        .setData('text/plain', event.target.id);

    event
        .currentTarget
        .style
        .backgroundColor = 'yellow';
}

export function onDragOver(event) {
    event.preventDefault();
}

export function onDrop(event) {
    const id = event
        .dataTransfer
        .getData('text');

    const draggableElement = document.getElementById(id);

    const dropzone = event.target;

    dropzone.appendChild(draggableElement);

    event
        .dataTransfer
        .clearData();
}





