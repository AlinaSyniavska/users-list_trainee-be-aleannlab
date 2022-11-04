
let dragSrcEl;

export function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);

    // console.log(this.getAttribute('data-id'))
    // console.log(this.getAttribute('data-rank'))
    // e.dataTransfer.setData('text/html', this.getAttribute('data-id'));
    // e.dataTransfer.setData('text/html', this.getAttribute('data-rank'));
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
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    e.dataTransfer.clearData();

    // renderUsers()

    return false;
}

