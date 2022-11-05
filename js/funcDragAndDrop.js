import {initModal} from '../modal/modal.js'

let dragSrcEl, idDragSrcEl, rankDragSrcEl;
export let newRank, idUserNewRank;
export const changeNewRank = rank => newRank = rank;

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
    let bottomRank;

    e.stopPropagation();

    if (dragSrcEl !== this) {
        dragSrcEl.innerHTML = this.innerHTML;
        dragSrcEl.id = this.id;
        dragSrcEl.setAttribute('data-rank', this.getAttribute('data-rank'));

        this.innerHTML = e.dataTransfer.getData('text/html');
        this.id = idDragSrcEl;
        this.setAttribute('data-rank', rankDragSrcEl);
    }

    try {
        bottomRank = this.nextSibling.getAttribute('data-rank');
    }catch (e) {
        bottomRank = dragSrcEl.getAttribute('data-rank');
    }

    const possibleRankContainer = document.getElementsByClassName('possibleRankContainer')[0];

    possibleRankContainer.innerHTML = '';
    newRank = bottomRank;
    idUserNewRank = this.id;

    initModal(bottomRank, possibleRankContainer);

    return false;
}





