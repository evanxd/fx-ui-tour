'use strict';

(function() {
  var addons = document.querySelector("#add-ons");
  var firefoxSync = document.querySelector("#firefox-sync");
  var oneOffSearch = document.querySelector("#one-off-search");

  addons.addEventListener("click", function() {
    document.dispatchEvent(new CustomEvent("mozUITour",
      {bubbles: true, detail: {action: "showMenu", data:{name: "appMenu"}}}));
  });

  firefoxSync.addEventListener("click", function() {
    document.dispatchEvent(new CustomEvent("mozUITour",
      {bubbles: true, detail: {action: "showFirefoxAccounts", data:{}}}));
  });

  oneOffSearch.addEventListener("click", function() {
    document.dispatchEvent(new CustomEvent("mozUITour",
      {bubbles: true, detail: {action: "openSearchPanel", data:{}}}));
  });
}());
