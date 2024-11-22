import { getSvgIcon } from "./icons.service.js";
import { getUser, setUser } from "./storage.service..js";

const getAlmanaxItemIhm = (almanaxItem) => {
  let date = new Date(almanaxItem.date);
  return `
    <button onclick="onAlmanaxItemClick('${almanaxItem.date}')" id="${almanaxItem.date}" class="almanax-item-container ${almanaxItem.completed ? 'completed' : ''}">
      <div class="item-container-header">
        <span>${date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()}/${date.getMonth() + 1 < 10 ? '0'+(date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}</span>
        <span class="meryde">${almanaxItem.meryde}</span>
      </div>
      <div class="item-container-body">
        <div class="body-category">
          <div class="body-title">
            ${getSvgIcon('chevron-right', 'icon-xxs orange-icon')}
            <span class="body-title-text">Offrande</span>
          </div>
          <div class="offrande-container">
            <!-- <span>Offrande :</span> -->
            <span class="offrande-count"><b>${almanaxItem.offrandeQuantity} x</b></span>
            <span class="offrande">${almanaxItem.offrande}</span>
          </div>
        </div>
        <div class="body-category">
          <div class="body-title">
            ${getSvgIcon('chevron-right', 'icon-xxs orange-icon')}
            <span class="body-title-text">Bonus</span>
          </div>
          <div class="bonus-type-container">
            <span><b>Type :</b></span>
            <span><i>${almanaxItem.bonusType}</i></span>
          </div>
          <span>${almanaxItem.bonus}</span>
        </div>
      </div>
    </button>
  `;
}

export const getAlmanaxItemsIhm = (almanax) => {
  let str = '<div class="almanax-list">';
  for (let item of almanax) {
    str += getAlmanaxItemIhm(item);
  }
  str += '</div>';
  return str;
}

const onAlmanaxItemClick = (itemId) => {
  let USER = getUser();
  let button = document.getElementById(itemId);
  if (button.classList.contains('completed')) {
    button.classList.remove('completed');
    USER.almanax.find((i) => i.date == itemId).completed = false;
    setUser(USER);
  } else {
    button.classList.add('completed');
    USER.almanax.find((i) => i.date == itemId).completed = true;
    setUser(USER);
  }
}
window.onAlmanaxItemClick = onAlmanaxItemClick;