import { mainTab, tabBlock } from "../../../vars";

export const getActiveTab = (active) => {
  if(active === '0') {
    mainTab[0].classList.remove('header__main-tab_deactivated');
    mainTab[1].classList.add('header__main-tab_deactivated');
    tabBlock[0].style.display = 'flex';
    tabBlock[1].style.display = 'none';
  } else {
    mainTab[1].classList.remove('header__main-tab_deactivated');
    mainTab[0].classList.add('header__main-tab_deactivated');
    tabBlock[1].style.display = 'flex';
    tabBlock[0].style.display = 'none';
  }
  sessionStorage.setItem('tabId', active);
};