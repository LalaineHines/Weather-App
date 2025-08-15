import "./style.css";

import {
    handleFirstContentLoad,
    handleSearchEnter,
    handleSearchInput,
    handleTemptUnitButtonClick,
} from './eventHandler.js';

const temperatureBtnContainer = document.getElementById(
    "temp-button-container",
);
const searchInput = document.getElementById("city-inquiry");

document.addEventListener("DOMContentLoaded", handleFirstContentLoad, {
    once: true,
});
searchInput.addEventListener("keydown", handleSearchEnter);
searchInput.addEventListener("input", handleSearchInput);
temperatureBtnContainer.addEventListener("click", handleTempUnitButtonClick);