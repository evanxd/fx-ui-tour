'use strict';

(function() {
  var oneOffSearch = document.querySelector("#one-off-search");
  oneOffSearch.addEventListener('click', function() {
    document.dispatchEvent(new CustomEvent('mozUITour',
      {bubbles: true, detail: {action: 'openSearchPanel', data:{}}}));
  });
}());
