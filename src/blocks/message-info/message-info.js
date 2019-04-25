'use strict';
// show message
import { infoMessage } from "../vars";

export const showMessage = (message, typeMessage) => {
  infoMessage.innerHTML = message;
  infoMessage.classList.add(`${ typeMessage }`);
  setTimeout( () =>{
    infoMessage.classList.remove(`${ typeMessage }`);
  },2000);
};