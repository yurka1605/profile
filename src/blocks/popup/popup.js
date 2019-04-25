'use strict';
import { overlay, popupAddHobby, wrapper } from "../vars";

export const activePopup = (event, eventUser = '') => {
  if(event.target.className === 'popup__button-close' || eventUser === 'close') {
    popupAddHobby.classList.remove('popup_show');
    wrapper.classList.remove('wrapper-filter');
    overlay.style.display = 'none';
  } else {
    popupAddHobby.classList.add('popup_show');
    wrapper.classList.add('wrapper-filter');
    overlay.style.display = 'block';
  }
};