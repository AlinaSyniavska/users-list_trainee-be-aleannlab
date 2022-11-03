import {rangeRank, userStatus} from './js/constants.js';
import {guid, getRandomIntRank} from './js/helpers.js';
import {renderUsers} from "./js/rendering.js";

const usersArray = [
    {
        id: guid(),
        rank: getRandomIntRank(rangeRank.MIN, rangeRank.MAX),
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        order: 'item1, item2, item3',
        userStatus: userStatus.ACTIVE,
    },
    {
        id: guid(),
        rank: getRandomIntRank(rangeRank.MIN, rangeRank.MAX),
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        order: 'item1, item2',
        userStatus: userStatus.ACTIVE,
    },
    {
        id: guid(),
        rank: getRandomIntRank(rangeRank.MIN, rangeRank.MAX),
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        order: 'item1, item2, item3',
        userStatus: userStatus.ACTIVE,
    },
    {
        id: guid(),
        rank: getRandomIntRank(rangeRank.MIN, rangeRank.MAX),
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        order: 'item1, item2, item3',
        userStatus: userStatus.ACTIVE,
    },
    {
        id: guid(),
        rank: getRandomIntRank(rangeRank.MIN, rangeRank.MAX),
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        order: 'item1',
        userStatus: userStatus.ACTIVE,
    },
    {
        id: guid(),
        rank: getRandomIntRank(rangeRank.MIN, rangeRank.MAX),
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        order: 'item1, item2',
        userStatus: userStatus.ACTIVE,
    },
    {
        id: guid(),
        rank: getRandomIntRank(rangeRank.MIN, rangeRank.MAX),
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        order: 'item1, item2',
        userStatus: userStatus.ACTIVE,
    },
    {
        id: guid(),
        rank: getRandomIntRank(rangeRank.MIN, rangeRank.MAX),
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        order: 'item1, item2, item3',
        userStatus: userStatus.ACTIVE,
    },
    {
        id: guid(),
        rank: getRandomIntRank(rangeRank.MIN, rangeRank.MAX),
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        order: 'item1, item2, item3',
        userStatus: userStatus.ACTIVE,
    },
    {
        id: guid(),
        rank: getRandomIntRank(rangeRank.MIN, rangeRank.MAX),
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        order: 'item1',
        userStatus: userStatus.ACTIVE,
    }
];

const usersContainer = document.getElementsByClassName('usersContainer')[0];
const iframe = document.getElementById('newUserWin');

const btnCreateUser = document.getElementById('btnCreateUser');

const objDOMElements = {
    usersContainer,
    iframe,
};

renderUsers(usersArray, objDOMElements);
// iframe.classList.add('visible');

btnCreateUser.onclick = () => {
    iframe.classList.add('visible');
}

window.onmessage = function (event) {
    if ('id' in event.data && 'rank' in event.data && 'name' in event.data && 'username' in event.data && 'email' in event.data && 'order' in event.data && 'userStatus' in event.data) {
        usersArray.push({...event.data});
    } /*else if ('name' in event.data && 'created' in event.data && 'category' in event.data && 'content' in event.data && 'dates' in event.data) {
        notesArray[updateNoteIndex] = Object.assign(notesArray[updateNoteIndex], {...event.data});
    }*/
    renderUsers(usersArray, objDOMElements);
};





