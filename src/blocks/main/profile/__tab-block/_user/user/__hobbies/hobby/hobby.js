import { fieldEnterHobby, hobbyName, userHobby } from "../../../../../../../vars";
import { showMessage } from "../../../../../../../message-info/message-info";
import { activePopup } from "../../../../../../../popup/popup";
import { createHobbyDomNode} from "../__hobbies";

export const addHobbies = (inputValue, event) => {
  let currentHobbies = JSON.parse(localStorage.getItem('hobby'));
  let countIdentical = 0;
  currentHobbies.forEach(element => {
    if (inputValue === element) countIdentical++;
  });
  if (countIdentical === 0) {
    currentHobbies.splice( 0, 0, inputValue);
    localStorage.setItem('hobby', JSON.stringify(currentHobbies));
    createHobbyDomNode(inputValue, 'before');
    fieldEnterHobby.value = '';
    activePopup(event, 'close');
    showMessage(`${ inputValue } успешно добавлен в список ваших интересов`, 'message-info_type_access');
  } else showMessage('Hobby with this name already exists', 'message-info_type_danger');
};

export const deleteHobby = (nameHobby) => {
  let notDeleteElem = JSON.parse(localStorage.getItem('hobby'));
  for (let i = 0; i < hobbyName.length; i++) {
    if (hobbyName[i].innerHTML === nameHobby) {
      userHobby.removeChild(hobbyName[i]);
      notDeleteElem.splice( i, 1);
    }
  }
  localStorage.setItem('hobby', JSON.stringify(notDeleteElem));
  showMessage(`${ nameHobby } успешно удален из списка интересов`, 'message-info_type_access');
};