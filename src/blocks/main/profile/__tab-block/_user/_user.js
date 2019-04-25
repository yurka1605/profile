import { imageUser, fullNameUser, cityUser, familyUser, phoneNumber, emailUser} from "../../../../vars";

export const renderUsers = (user) => {
  imageUser.src = user.picture;
  imageUser.title = imageUser.alt = user.fullName;
  fullNameUser.value = user.fullName;
  cityUser.value = user.city;
  familyUser.value = user.info.family;
  phoneNumber.value = user.info.phone;
  emailUser.value = user.info.email;
};