import { userHobby } from "../../../../../../vars";

export const createHobbyDomNode = ( hobby, method ) =>{
  let newHobby = document.createElement('div');
  newHobby.className = 'hobby';
  newHobby.innerHTML = hobby;
  method === 'after' ? userHobby.appendChild(newHobby) : userHobby.insertBefore(newHobby, userHobby.firstChild);
};