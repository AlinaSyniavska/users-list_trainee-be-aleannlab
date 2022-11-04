import {renderRanks} from "../js/rendering.js";
import {changeNewRank} from "../js/funcDragAndDrop.js";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");

export const initModal = function (bottomRank, possibleRankContainer) {
    renderRanks(bottomRank, possibleRankContainer);
    openModal();
}

const openModal = function () {
    const ranks = modal.querySelectorAll('input[type=radio]');

    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    ranks.forEach(rank => {
        rank.addEventListener('change', (e) => {
            changeNewRank(e.target.value);
        })
    })
};

const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

closeModalBtn?.addEventListener("click", closeModal);
overlay?.addEventListener("click", closeModal);


