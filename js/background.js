( function() {

'use strict';

var prisjaktChromeNorge = {

  init: function() {

    chrome.contextMenus.onClicked.addListener(prisjaktChromeNorge.selectText);

    chrome.runtime.onInstalled.addListener(function() {
      var context = "selection";
      var title = "Sök ”%s” på Prisjakt";
      var id = chrome.contextMenus.create({
        "title": title,
        "contexts": [context],
        "id": "context" + context
      });
    });

  },

  selectText: function(info) {
    var phrase = info.selectionText;
    prisjaktChromeNorge.openPrisjakt(phrase);
  },

  openPrisjakt: function(phrase) {
    var encodedQuery = encodeURIComponent(phrase);
    var url = "http://www.prisjakt.no/#rparams=ss=" + encodedQuery;
    window.open(url, '_blank');
  }

};

document.addEventListener('DOMContentLoaded', function() {
  prisjaktChromeNorge.init();
});

}());