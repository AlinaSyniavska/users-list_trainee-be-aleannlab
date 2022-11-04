import {rangeRank} from "./constants.js";

let dragSrcEl, idDragSrcEl, rankDragSrcEl;

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

    console.log(this.getAttribute('data-rank'))
    console.log(this.nextSibling)

    const bottomRank = this.nextSibling.getAttribute('data-rank');
    console.log(bottomRank)

    for (let i = bottomRank; i <= rangeRank.MAX; i++) {
        console.log(`Possible rank = ${i}`)
    }

    // renderUsers()
    return false;
}

