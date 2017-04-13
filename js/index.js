'use strict';

(function() {
  var addons = document.querySelector("#add-ons");
  var customizeFirefox = document.querySelector("#customize-firefox");
  var defaultBrowser = document.querySelector("#default-browser");
  var firefoxSync = document.querySelector("#firefox-sync");
  var oneOffSearch = document.querySelector("#one-off-search");
  var privateBrowsing = document.querySelector("#private-browsing");

  addons.addEventListener("click", function() {
    document.dispatchEvent(new CustomEvent('mozUITour',
      {bubbles:true, detail: {action:'showHighlight', data: { target: 'addons', effect: 'wobble' }}}));
  });

  customizeFirefox.addEventListener("click", function() {
    document.dispatchEvent(new CustomEvent("mozUITour",
      {bubbles: true, detail: {action:'showHighlight', data: { target: 'customize', effect: 'wobble' }}}));
  });

  defaultBrowser.addEventListener("click", function() {
    // TODO: Add a new action to open default browser setting panel in the UITour library.
  });

  firefoxSync.addEventListener("click", function() {
    document.dispatchEvent(new CustomEvent("mozUITour",
      {bubbles: true, detail: {action: "showFirefoxAccounts", data:{}}}));
  });

  oneOffSearch.addEventListener("click", function() {
    document.dispatchEvent(new CustomEvent("mozUITour",
      {bubbles: true, detail: {action: "openSearchPanel", data:{}}}));
  });

  privateBrowsing.addEventListener("click", function() {
    document.dispatchEvent(new CustomEvent("mozUITour",
      {bubbles: true, detail: {action:'showHighlight', data: { target: 'privateWindow', effect: 'wobble' }}}));
  });
}());
