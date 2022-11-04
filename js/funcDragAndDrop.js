import {renderRanks} from "./rendering.js";

let dragSrcEl, idDragSrcEl, rankDragSrcEl;
export let newRank, idUserNewRank;

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");

export function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;
    idDragSrcEl = e.target.id;
    rankDragSrcEl = e.target.getAttribute('data-rank');

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

export function handleDragEnd(e) {
    this.style.opacity = '1';

    const items = document.querySelectorAll('.user');

    items.forEach(function (item) {
        item.classList.remove('over');
    });
}

export function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    return false;
}

export function handleDragEnter(e) {
    this.classList.add('over');
}

export function handleDragLeave(e) {
    this.classList.remove('over');
}

export function handleDrop(e) {
    e.stopPropagation();

    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        dragSrcEl.id = this.id;
        dragSrcEl.setAttribute('data-rank', this.getAttribute('data-rank'));

        this.innerHTML = e.dataTransfer.getData('text/html');
        this.id = idDragSrcEl;
        this.setAttribute('data-rank', rankDragSrcEl);
    }

    const bottomRank = this.nextSibling.getAttribute('data-rank');
    const possibleRankContainer = document.getElementsByClassName('possibleRankContainer')[0];

    possibleRankContainer.innerHTML = '';
    newRank = bottomRank;
    idUserNewRank = this.id;

    renderRanks(bottomRank, possibleRankContainer);
    openModal();

    return false;
}


const openModal = function () {
    const ranks = modal.querySelectorAll('input[type=radio]');

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    ranks.forEach(rank => {
        rank.addEventListener('change', (e) => {
            newRank = e.target.value;
        })
    })
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

closeModalBtn?.addEventListener("click", closeModal);
overlay?.addEventListener("click", closeModal);


