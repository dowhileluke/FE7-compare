'use strict';

function App() {
  var self = this;

  self.selectedCharacters = ko.observableArray();
  self.availableCharacters = ko.observableArray();

  self.pendingCharacter = ko.observable();
  self.pendingCharacter.subscribe(function (char) {
    if (char) {
      self.availableCharacters.remove(char);
      self.selectedCharacters.push(char);
      self.pendingCharacter(null);
    };
  });

  self.hideCharacter = function (char) {
    if (char) {
      self.selectedCharacters.remove(char);
      self.availableCharacters.unshift(char);
    };
  };

  var allCharacters = characters.map(function (c) {
    return new Character(self, c);
  });

  self.availableCharacters(allCharacters);

  self.maxDistance = ko.pureComputed(function () {
    var max = self.selectedCharacters().reduce(function (best, c) {
      var curr = c.distance();

      if (!best || curr > best) {
        return curr;
      };

      return best;
    }, null);

    console.log(max);

    return max;
  });

  // title

  self.title = ko.pureComputed(function () {
    var base = "FE7 Comparison Tool";
    var names = self.selectedCharacters().map(function (c) { return c.name; });
    var text = names.length ? (names.join(', ') + ' - ' + base) : base;

    document.title = text;

    return text;
  });

  // hash read/write

  var hash = location.hash.slice(1);

  if (!!hash) {
    hash.split(',').forEach(function (h) {
      var parts = h.split('@');
      var name = parts[0].toLowerCase();
      var char = self.availableCharacters.remove(function (c) { return (c.name.toLowerCase() === name); })[0];

      if (char) {
        var lv = parts[1];

        if (lv) {
          var lvParts = lv.split('/');
          var former = parseInt(lvParts[0]);
          var latter = parseInt(lvParts[1]);

          if (latter) {
            var minLv = Math.max(former, 10);
            var maxLv = Math.min(minLv, 20);

            char.promotionLv(maxLv);
            char.selectedLv(latter + 20);
          } else {
            var s = char.isPromoted ? (former + 20) : former;

            char.selectedLv(s);
          };
        };

        self.selectedCharacters.push(char);
      };
    });
  };

  var hashWrite;

  if (history.replaceState) {
    hashWrite = function (newVal) {
      history.replaceState(null, null, newVal);
    };
  } else {
    hashWrite = function (newVal) {
      location.hash = newVal;
    };
  };

  var hashVal = ko.pureComputed(function () {
    return '#' + self.selectedCharacters().map(function (c) {
      var lvAlias = c.selectedLv();

      if (!lvAlias) {
        return c.name;
      };

      var lv = (lvAlias % 20) || 20;

      if (c.isPromoted) {
        return (c.name + '@' + lv);
      };

      var lvText = (lvAlias > 20) ? (c.promotionLv() + '/' + lv) : lv;
      var charText = (c.name + '@' + lvText);

      return charText;
    }).join(',');
  });

  hashVal.subscribe(hashWrite);
};

var app = new App();

ko.applyBindings(app);
