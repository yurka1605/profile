'use strict';
import './css/common.css'
import { currentUserAgent, URL } from "./blocks/vars";
import { Profile } from "./blocks/main/main";

const profile = new Profile(localStorage, URL, currentUserAgent);
profile.init();