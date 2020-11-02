'use strict';

var characters = 

(function () {
var classList = {};
var charList = [];

function AddClass(name, bonuses, caps) {
  (bonuses || []).splice(4, 0, 0); // 0 Lck bonus
  caps.unshift(60);           // 60 HP cap
  caps.splice(4, 0, 30);   // 30 Lck cap

  classList[name] = {
    bonuses: bonuses,
    caps: caps,
  };
};

function AddChar(name, finalClass, level, stats, growths) {
  var final = classList[finalClass] || {};

  charList.push({
    name: name,
    level: (level % 20) || 20,
    promoted: level > 20, // promoted characters are represented as 20+lv
    stats: stats,
    growths: growths || [0, 0, 0, 0, 0, 0, 0],
    bonuses: final.bonuses,
    caps: final.caps,
  });
};

// AddClass('Archsage', null, [30, 30, 25, 20, 30]);
// AddClass('DruidF', null, [29, 26, 26, 20, 29]);
// AddClass('GeneralF', null, [25, 25, 22, 30, 26]);
// AddClass('HeroF', null, [24, 30, 26, 24, 24]);
// AddClass('NmdTrooperF', null, [23, 28, 30, 22, 25]);
AddClass('Assassin', [3, 1, 0, 0, 2, 2, 0], [20, 30, 30, 20, 20]);
AddClass('Berserker', [4, 1, 1, 1, 2, 2, 3], [30, 29, 28, 23, 21]);
AddClass('BishopF', [3, 1, 2, 1, 2, 2, 1], [25, 25, 26, 21, 30]);
AddClass('BishopM', [3, 2, 1, 0, 3, 2, 1], [25, 26, 24, 22, 30]);
AddClass('BladeLord', [3, 2, 2, 0, 3, 5, 1], [24, 29, 30, 22, 22]);
AddClass('DruidM', [4, 0, 0, 3, 2, 2, 1], [29, 26, 26, 21, 28]);
AddClass('Falcoknight', [5, 2, 0, 0, 2, 2, 1], [23, 25, 28, 23, 26]);
AddClass('GeneralM', [4, 2, 2, 3, 2, 3, 2], [29, 27, 24, 30, 25]);
AddClass('GreatLord', [3, 0, 2, 3, 1, 5, 2], [30, 24, 24, 29, 20]);
AddClass('HeroM', [4, 0, 2, 2, 2, 2, 1], [25, 30, 26, 25, 22]);
AddClass('KnightLord', [4, 2, 0, 1, 1, 3, 2], [27, 26, 24, 23, 25]);
AddClass('NmdTrooperM', [3, 2, 1, 1, 3, 3, 1], [25, 28, 30, 24, 23]);
AddClass('PaladinF', null, [23, 27, 25, 24, 26]);
AddClass('PaladinM', [2, 1, 1, 1, 2, 1, 2], [25, 26, 24, 25, 25]);
AddClass('SageF', [3, 1, 1, 0, 3, 3, 1], [30, 28, 26, 21, 25]);
AddClass('SageM', [4, 1, 0, 0, 3, 3, 1], [28, 30, 26, 21, 25]);
AddClass('SniperF', [4, 3, 1, 1, 2, 2, 1], [24, 30, 29, 24, 24]);
AddClass('SniperM', [3, 1, 2, 2, 2, 3, 1], [25, 30, 28, 25, 23]);
AddClass('SwordmasterF', null, [22, 29, 30, 22, 25]);
AddClass('SwordmasterM', [5, 2, 0, 0, 2, 1, 1], [24, 29, 30, 22, 23]);
AddClass('Valkyrie', [3, 2, 1, 0, 2, 3, 1], [25, 24, 25, 24, 28]);
AddClass('Warrior', [3, 1, 2, 0, 3, 3, 2], [30, 28, 26, 26, 22]);
AddClass('WyvernLordF', null, [25, 26, 24, 27, 23]);
AddClass('WyvernLordM', [4, 0, 2, 2, 0, 2, 1], [27, 25, 23, 28, 22]);

// AddChar('Athos', 'Archsage', 40, [40, 30, 24, 20, 25, 20, 28, 9], null);
AddChar('Bartre', 'Warrior', 2, [29, 9, 5, 3, 4, 4, 0, 13], [85, 50, 35, 40, 30, 30, 25]);
AddChar('Canas', 'DruidM', 8, [21, 10, 9, 8, 7, 5, 8, 7], [70, 45, 40, 35, 25, 25, 45]);
AddChar('Dart', 'Berserker', 8, [34, 12, 8, 8, 3, 6, 1, 10], [70, 65, 20, 60, 35, 20, 15]);
AddChar('Dorcas', 'Warrior', 3, [30, 7, 7, 6, 3, 3, 0, 14], [80, 60, 40, 20, 45, 25, 15]);
AddChar('Eliwood', 'KnightLord', 1, [18, 5, 5, 7, 7, 5, 0, 7], [80, 45, 50, 40, 45, 30, 35]);
AddChar('Erk', 'SageM', 1, [17, 5, 6, 7, 3, 2, 4, 5], [65, 40, 40, 50, 30, 20, 40]);
AddChar('Farina', 'Falcoknight', 12, [24, 10, 13, 14, 10, 10, 12, 5], [75, 50, 40, 45, 45, 25, 30]);
AddChar('Fiora', 'Falcoknight', 7, [21, 8, 11, 13, 6, 6, 7, 5], [70, 35, 60, 50, 30, 20, 50]);
AddChar('Florina', 'Falcoknight', 1, [17, 5, 7, 9, 7, 4, 4, 4], [60, 40, 50, 55, 50, 15, 35]);
AddChar('Geitz', 'Warrior', 23, [40, 17, 12, 13, 10, 11, 3, 13], [85, 50, 30, 40, 40, 20, 20]);
AddChar('GeitzHM', 'Warrior', 23, [44, 19, 13, 14, 10, 12, 4, 13], [85, 50, 30, 40, 40, 20, 20]);
AddChar('Guy', 'SwordmasterM', 3, [21, 6, 11, 11, 5, 5, 0, 5], [75, 30, 50, 70, 45, 15, 25]);
AddChar('GuyHM', 'SwordmasterM', 3, [25, 8, 13, 13, 5, 6, 1, 5], [75, 30, 50, 70, 45, 15, 25]);
AddChar('Harken', 'HeroM', 28, [38, 21, 20, 17, 12, 15, 10, 11], [80, 35, 30, 40, 20, 30, 25]);
AddChar('HarkenHM', 'HeroM', 28, [42, 23, 22, 18, 12, 16, 11, 11], [80, 35, 30, 40, 20, 30, 25]);
AddChar('Hawkeye', 'Berserker', 24, [50, 18, 14, 11, 13, 14, 10, 16], [50, 40, 30, 25, 40, 20, 35]);
AddChar('Heath', 'WyvernLordM', 7, [28, 11, 8, 7, 7, 10, 1, 9], [80, 50, 50, 45, 20, 30, 20]);
AddChar('HeathHM', 'WyvernLordM', 7, [32, 13, 10, 9, 7, 11, 2, 9], [80, 50, 50, 45, 20, 30, 20]);
AddChar('Hector', 'GreatLord', 1, [19, 7, 4, 5, 3, 8, 0, 13], [90, 60, 45, 35, 30, 50, 25]);
AddChar('Isadora', 'PaladinF', 21, [28, 13, 12, 16, 10, 8, 6, 6], [75, 30, 35, 50, 45, 20, 25]);
AddChar('Jaffar', 'Assassin', 33, [34, 19, 25, 24, 10, 15, 11, 8], [65, 15, 40, 35, 20, 30, 30]);
AddChar('Karel', 'SwordmasterM', 28, [31, 16, 23, 20, 15, 13, 12, 9], [70, 30, 50, 50, 30, 10, 15]);
AddChar('Karla', 'SwordmasterF', 25, [29, 14, 21, 18, 16, 11, 12, 7], [60, 25, 45, 55, 40, 10, 20]);
AddChar('Kent', 'PaladinM', 1, [20, 6, 6, 7, 2, 5, 1, 9], [85, 40, 50, 45, 20, 25, 25]);
AddChar('Legault', 'Assassin', 12, [26, 8, 11, 15, 10, 8, 3, 9], [60, 25, 45, 60, 60, 25, 25]);
AddChar('LegaultHM', 'Assassin', 12, [29, 8, 13, 17, 10, 8, 4, 9], [60, 25, 45, 60, 60, 25, 25]);
AddChar('Louise', 'SniperF', 24, [28, 12, 14, 17, 16, 9, 12], [60, 40, 40, 40, 30, 20, 30]);
AddChar('Lowen', 'PaladinM', 2, [23, 7, 5, 7, 3, 7, 0, 10], [90, 30, 30, 30, 50, 40, 30]);
AddChar('Lucius', 'BishopM', 3, [18, 7, 6, 10, 2, 1, 6, 6], [55, 60, 50, 40, 20, 10, 60]);
AddChar('Lyn', 'BladeLord', 1, [16, 4, 7, 9, 5, 2, 0, 5], [70, 40, 60, 60, 55, 20, 30]);
AddChar('Marcus', 'PaladinM', 21, [31, 15, 15, 11, 8, 10, 8, 11], [65, 30, 50, 25, 30, 15, 35]);
AddChar('Matthew', 'Assassin', 2, [18, 4, 4, 11, 2, 3, 0, 7], [75, 30, 40, 70, 50, 25, 20]);
AddChar('Nino', 'SageF', 5, [19, 7, 8, 11, 10, 4, 7, 3], [55, 50, 55, 60, 45, 15, 50]);
AddChar('Oswin', 'GeneralM', 9, [28, 13, 9, 5, 3, 13, 3, 14], [90, 40, 30, 30, 35, 55, 30]);
AddChar('Pent', 'SageM', 26, [33, 18, 21, 17, 14, 11, 16, 8], [50, 30, 20, 40, 40, 30, 35]);
AddChar('Priscilla', 'Valkyrie', 3, [16, 6, 6, 8, 7, 3, 6, 4], [45, 40, 50, 40, 65, 15, 50]);
AddChar('Rath', 'NmdTrooperM', 7, [25, 8, 9, 10, 5, 7, 2, 7], [80, 50, 40, 50, 30, 10, 25]);
AddChar('Raven', 'HeroM', 5, [25, 8, 11, 13, 2, 5, 1, 8], [85, 55, 40, 45, 35, 25, 15]);
AddChar('RavenHM', 'HeroM', 5, [29, 10, 13, 15, 2, 6, 2, 8], [85, 55, 40, 45, 35, 25, 15]);
AddChar('Rebecca', 'SniperF', 1, [17, 4, 5, 6, 4, 3, 1, 5], [60, 40, 50, 60, 50, 15, 30]);
AddChar('Renault', 'BishopM', 36, [43, 12, 22, 20, 10, 15, 18, 9], [60, 40, 30, 35, 15, 20, 40]);
AddChar('Sain', 'PaladinM', 1, [19, 8, 4, 6, 4, 6, 0, 9], [80, 60, 35, 40, 35, 20, 20]);
AddChar('Serra', 'BishopF', 1, [17, 2, 5, 8, 6, 2, 5, 4], [50, 50, 30, 40, 60, 15, 55]);
AddChar('Vaida', 'WyvernLordF', 29, [43, 20, 19, 13, 11, 21, 6, 12], [60, 45, 25, 40, 30, 25, 15]);
AddChar('VaidaHM', 'WyvernLordF', 29, [47, 22, 21, 14, 11, 22, 7, 12], [60, 45, 25, 40, 30, 25, 15]);
AddChar('Wallace', 'GeneralM', 12, [30, 13, 7, 5, 10, 15, 2, 13], [70, 45, 40, 20, 30, 35, 35]);
AddChar('Wil', 'SniperM', 2, [20, 6, 5, 5, 6, 5, 0, 6], [75, 50, 50, 40, 40, 20, 25]);

return charList;
})();
