'use strict';

(function() {
  var addons = document.querySelector("#add-ons");
  var oneOffSearch = document.querySelector("#one-off-search");

  addons.addEventListener("click", function() {
    document.dispatchEvent(new CustomEvent("mozUITour",
      {bubbles: true, detail: {action: "showMenu", data:{name: "appMenu"}}}));
  });

  oneOffSearch.addEventListener("click", function() {
    document.dispatchEvent(new CustomEvent("mozUITour",
      {bubbles: true, detail: {action: "openSearchPanel", data:{}}}));
  });
}());
