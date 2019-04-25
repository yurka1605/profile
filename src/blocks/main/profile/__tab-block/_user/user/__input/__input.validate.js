import { imageUser } from "../../../../../../vars";
import { showMessage } from "../../../../../../message-info/message-info";

export const validFields = (elementChange, regexp, dataName, message) => {
  if (dataName === 'info.email' ? regexp.test(elementChange.value) : !regexp.test(elementChange.value)) {
    if (dataName === 'fullName') imageUser.title = imageUser.alt = elementChange.value;
    return elementChange.value.trim();
  } else {
    if (dataName !== 'info.email') elementChange.value = elementChange.value.replace(regexp, '');
    showMessage(`${ message }`,'message-info_type_danger');
  }
};