import { requestWakeLock } from "./utils/wakelock.js";
import { APP_NAME, APP_VERSION } from "../app-properties.js";
import { bpmToMillisecondsPerBeat, getRandomIntegerBetween, setFavicon, setHTMLTitle } from "./utils/UTILS.js";
import { getSvgIcon } from "./services/icons.service.js";
import { getAlmanaxItemsIhm } from "./services/almanaxItem.service.js";
import { isLaptop, isPhone, isTablet } from "./utils/breakpoints.js";
import { getUser, setStorage, setUser } from "./services/storage.service..js";

/* ########################################################### */
/* VARIABLES */
/* ########################################################### */
//const HEADER = document.getElementById('header');
const MAIN = document.getElementById('main');
const FOOTER = document.getElementById('footer');

/* ########################################################### */
/* FUNCTIONS */
/* ########################################################### */


/* ########################################################### */
/* DOM INITIALIZATION */
/* ########################################################### */
// Keep screen awake
//requestWakeLock();
setStorage();
setHTMLTitle(APP_NAME);
let USER = getUser();
let str = getAlmanaxItemsIhm(USER.almanax);
MAIN.innerHTML = str;

let today = new Date();
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today.setMilliseconds(0);

let element = document.getElementById(`${today.toISOString()}`);
element.classList.add('today');
setTimeout(() => {
  element.scrollIntoView(true);
}, 50);

/* ########################################################### */
/* EXECUTION */
/* ########################################################### */
