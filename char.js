'use strict';

function Character(app, json) {
  var self = this;

  var isPromoted = self.isPromoted = json.promoted;

  self.name = json.name;
  self.bonuses = getBonuses(json);
  self.promotionLv = ko.observable(20);
  self.selectedLv = ko.observable();

  self.hide = app.hideCharacter.bind(null, self);

  self.promotionLvToggler = function (lv) {
    return function () {
      var curr = self.promotionLv();
      var next = (curr === lv) ? 20 : lv;

      self.promotionLv(next);

      var s = self.selectedLv();

      if (s && next < s && s <= 20) {
        self.selectedLv(null);
      };
    };
  };

  self.selectedLvToggler = function (lv) {
    return function () {
      var curr = self.selectedLv();
      var next = (curr === lv) ? null : lv;

      self.selectedLv(next);
    };
  };

  var initLv = json.level;
  var initStats = json.stats.slice(0, 7).map(function (s) {
    return new Stat(s, 0);
  });
  var initLevel = new Level(null, initLv, initStats);
  var fixedLevels = getLevelProgression(self, json, initLevel, isPromoted);
  var dynamicLevels = ko.pureComputed(function () {
    if (isPromoted) {
      return [];
    };

    var idx = self.promotionLv() - initLv;
    var promoLevel = fixedLevels[idx];
    var promoStats = promoLevel.stats.map(function (s, i) {
      var promoInt = s.int + json.bonuses[i];

      return new Stat(promoInt, s.frac);
    });
    var promoSeed = new Level(null, 1, promoStats);
    var levels = getLevelProgression(self, json, promoSeed, true);

    return levels;
  });

  self.lowerLevels = ko.pureComputed(function () {
    if (isPromoted) {
      return [];
    };

    var cutoff = self.promotionLv() - initLv + 1;

    return fixedLevels.slice(0, cutoff);
  });

  self.upperLevels = ko.pureComputed(function () {
    if (isPromoted) {
      return fixedLevels;
    };

    return dynamicLevels();
  });

  self.allLevels = ko.pureComputed(function () {
    return self.lowerLevels().concat(self.upperLevels());
  });

  self.distance = ko.pureComputed(function () {
    var s = self.selectedLv();

    if (!s) {
      return null;
    };

    var base = s - initLv;

    if (isPromoted) {
      return (base - 20);
    };
    
    var p = self.promotionLv();

    if (s > p) {
      var skipped = 20 - self.promotionLv();

      return (base - skipped);
    };

    return base;
  });

  self.padding = ko.pureComputed(function () {
    if (self.selectedLv()) {
      var max = app.maxDistance();
      var own = self.distance();

      if (own < max) {
        var delta = max - own;

        return (14 * delta) + 'px';
      };
    };

    return 0; 
  });
};

function Stat(int, frac, max) {
  var self = this;

  self.int = int;
  self.frac = frac;
  self.fracText = (frac % 10) ? frac : (frac / 10);
  self.rounded = (frac < 50) ? int : (int + 1);
  self.isMax = (self.rounded >= max);

  if (frac === 5) {
    self.fracText = '05';
  };
};

function Level(char, lvAlias, stats, canPromote) {
  var self = this;

  self.lv = (lvAlias % 20) || 20;
  self.stats = stats;
  self.canPromote = canPromote;

  var sum = stats.reduce(function (prev, curr) {
    return new Stat(prev.int + curr.int, prev.frac + curr.frac);
  }, new Stat(0, 50)); // 50 to make things round correctly

  self.bst = Math.floor(sum.frac / 100) + sum.int;

  if (char) { // null for initLevel
    self.select = char.selectedLvToggler(lvAlias);
    self.isSelected = ko.pureComputed(function () { return (char.selectedLv() === lvAlias); });
    self.isPromoted = ko.pureComputed(function () { return (canPromote && char.promotionLv() === lvAlias); });
  };

  if (canPromote) {
    self.promote = char.promotionLvToggler(lvAlias);
  };
};

function getLevelProgression(char, json, seedLevel, isPromoted) {
  var results = [];
  var initLv = seedLevel.lv;
  var caps = isPromoted ? json.caps : [60, 20, 20, 20, 30, 20, 20];

  for (var lv = initLv; lv <= 20; lv++) {
    var delta = lv - initLv;
    var lvAlias = isPromoted ? (lv + 20) : lv;
    var stats = getLevelStats(seedLevel, delta, json.growths, caps);
    var canPromote = !isPromoted && lv >= 10;
    var level = new Level(char, lvAlias, stats, canPromote);

    results.push(level);
  };

  return results;
};

function getLevelStats(seedLevel, lvDelta, growths, caps) {
  return seedLevel.stats.map(function (s, i) {
    var growth = growths[i] * lvDelta + s.frac;
    var growthInt = Math.floor(growth / 100);
    var growthFrac = growth % 100;
    var potential = growthInt + s.int;
    var maximum = caps[i];

    if (potential < maximum) {
      return new Stat(potential, growthFrac, maximum);
    } else {
      return new Stat(maximum, 0, maximum);
    };
  });
};

function getBonuses(json) {
  var bonuses = json.bonuses;

  if (!bonuses || json.promoted) {
    return [];
  };

  return bonuses.slice(0, 7).map(function (b) {
    return (b ? ('+' + b) : '');
  });
};
