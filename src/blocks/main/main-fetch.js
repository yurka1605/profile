import { showMessage } from "../message-info/message-info";

export const fetcherForAll = function () {
  const request = new Request(this.url, {
    method: 'GET',
    headers: new Headers(),
    mode: 'cors',
    cache: 'default'
  });
  fetch(request)
    .then( response => {
      if (response.status === 200) return response.json();
      else throw new Error('Response status not 200!');
    })
    .then( success => {
      this.parseDataUsers(success.results);
    })
    .catch( message => {
      handlerErrorFetcher.call(this, message);
    });
};

export const fetcherForIE = function () {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.url, false);
    xhr.send();
    this.parseDataUsers(JSON.parse(xhr.responseText).results);
  } catch (message) {
    handlerErrorFetcher.call(this, message);
  }
};

// При ошибке запроса выгрузка статичных данных из объекта defaultSettings
// Запроса к серверу повторно каждую минуту
const handlerErrorFetcher = function (e) {
  showMessage(e, 'message-info_type_danger');
  this.renderDataUsers();
  setTimeout(() => {
    showMessage('Не удалось получить данные', 'message-info_type_danger');
    this.getDataUser(this.url);
  }, 60000);
};