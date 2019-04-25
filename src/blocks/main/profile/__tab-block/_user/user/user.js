import { validFields } from "./__input/__input.validate";

export const changeInfo = (dataName, event) => {
  const arrProp = dataName.split('.');
  const elementChange = event.target;
  const currentProfileData = JSON.parse(localStorage.getItem('profile'));

  // Запоминает только при снятии фокуса
  elementChange.addEventListener('change', () => {
    localStorage.setItem('profile', JSON.stringify(currentProfileData));
  });
  // мониторит ввод пользователя
  elementChange.addEventListener('input', () => {
    if (dataName === 'fullName') {
      currentProfileData[`${arrProp[0]}`] = validFields(
        elementChange,
        /[^A-Za-zА-Яа-я\s]/g,
        dataName,
        'Имя может состоять только из букв!'
      );
    } else if (dataName === 'info.phone') {
      currentProfileData[`${arrProp[0]}`][`${arrProp[1]}`] = validFields(
        elementChange,
        /[^0-9\s()+-]/g,
        dataName,
        'Телефон не может состоять из букв!'
      );
    } else if (dataName === 'info.email') {
      currentProfileData[`${arrProp[0]}`][`${arrProp[1]}`] = validFields(
        elementChange,
        /@/g,
        dataName,
        'Отсутствует @!'
      );
    } else {
      if (arrProp.length > 1) {
        currentProfileData[`${arrProp[0]}`][`${arrProp[1]}`] = validFields(
          elementChange,
          /[^A-Za-zА-Яа-я]/g,
          dataName,
          'Любые сиволы кроме буквенных недопустимы!'
        );
      } else currentProfileData[`${ arrProp[0] }`] = validFields(
        elementChange,
        /[^A-Za-zА-Яа-я\s\-]/g,
        dataName,
        'Любые сиволы кроме буквенных недопустимы!'
      );
    }
  });
};