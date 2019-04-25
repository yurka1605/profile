import { userFriends } from "../../../../vars";

export const renderFriends = (friends, ) => {
  friends.forEach(friend => {
    // блок инфо о друге
    let newFriend = document.createElement('div');
    newFriend.className = 'friend';
    newFriend.innerHTML = `
                <img src="${friend.picture}" alt="${friend.fullName}" title="${friend.fullName}">
                <div class="friend__info">
                     <div class="friend__info-main">
                         <a href="${friend.picture}" class="friend__info-full-name">${friend.fullName}</a>
                         <span class="friend__info-city-name">c. ${friend.city}</span>
                     </div>
                     <span class="friend__info-status">${friend.status}</span>
                </div>
            `;
    userFriends.appendChild(newFriend);
  });
};