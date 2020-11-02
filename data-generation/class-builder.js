const classes = {};

function extend(name, obj) {
  const c = classes[name] || {};

  classes[name] = { ...c, ...obj };
};

function DefineClassBaseStats(name, bases) {
  extend(name, { bases });
};

function DefineClassGrowthRates(name, growths) {
  extend(name, { growths });
};

function DefineClassPromotionBonuses(name, bonuses, caps, baseForm) {
  extend(name, { bonuses, caps, baseForm });
};

DefineClassBaseStats('LordLyn', [16,4,7,9,2,0,5,5]);
DefineClassBaseStats('LordEliwood', [18,5,5,7,5,0,7,5]);
DefineClassBaseStats('LordHector', [19,7,4,5,8,0,13,5]);
DefineClassBaseStats('BladeLord', [18,3,3,4,5,0,6,6]);
DefineClassBaseStats('KnightLord', [18,3,3,4,5,0,9,7]);
DefineClassBaseStats('GreatLord', [18,3,3,4,5,0,15,5]);
DefineClassBaseStats('Dancer', [14,1,2,7,0,1,4,5]);
DefineClassBaseStats('Bard', [14,1,2,7,1,0,3,5]);
DefineClassBaseStats('Soldier', [20,3,0,1,0,0,6,5]);
DefineClassBaseStats('CavalierM', [20,5,2,5,6,0,9,7]);
DefineClassBaseStats('CavalierF', [18,5,3,3,6,0,9,7]);
DefineClassBaseStats('PaladinM', [23,7,4,7,8,3,11,8]);
DefineClassBaseStats('PaladinF', [23,6,6,11,7,6,9,8]);
DefineClassBaseStats('KnightM', [17,5,2,0,9,0,13,4]);
DefineClassBaseStats('KnightF', [16,4,3,1,8,1,10,4]);
DefineClassBaseStats('GeneralM', [21,8,4,3,13,3,15,5]);
DefineClassBaseStats('GeneralF', [20,8,5,5,11,4,11,5]);
DefineClassBaseStats('MercenaryM', [18,4,8,8,4,0,9,5]);
DefineClassBaseStats('MercenaryF', [16,3,5,6,2,0,8,5]);
DefineClassBaseStats('HeroM', [22,6,9,10,8,2,10,6]);
DefineClassBaseStats('HeroF', [22,6,10,11,6,3,9,6]);
DefineClassBaseStats('MyrmidonM', [16,4,9,9,2,0,8,5]);
DefineClassBaseStats('MyrmidonF', [15,3,9,10,1,1,5,5]);
DefineClassBaseStats('SwordmasterM', [21,6,11,10,5,2,9,6]);
DefineClassBaseStats('SwordmasterF', [19,6,11,12,4,3,7,6]);
DefineClassBaseStats('ThiefM', [16,3,1,9,2,0,6,6]);
DefineClassBaseStats('ThiefF', [15,2,3,8,1,2,5,6]);
DefineClassBaseStats('Assassin', [16,3,1,9,2,0,6,6]);
DefineClassBaseStats('ArcherM', [18,4,3,3,3,0,7,5]);
DefineClassBaseStats('ArcherF', [17,3,3,4,3,0,5,5]);
DefineClassBaseStats('SniperM', [21,7,6,5,5,2,8,6]);
DefineClassBaseStats('SniperF', [19,6,6,7,5,3,6,6]);
DefineClassBaseStats('NomadM', [16,5,4,5,4,0,7,7]);
DefineClassBaseStats('NomadF', [15,4,5,6,3,0,5,7]);
DefineClassBaseStats('NmdTrooperM', [21,7,6,7,6,3,8,8]);
DefineClassBaseStats('NmdTrooperF', [21,6,6,7,5,4,6,8]);
DefineClassBaseStats('WyvernRiderM', [20,7,3,5,8,0,10,7]);
DefineClassBaseStats('WyvernRiderF', [19,6,5,5,7,0,9,7]);
DefineClassBaseStats('WyvernLordM', [25,9,5,7,10,1,11,8]);
DefineClassBaseStats('WyvernLordF', [24,8,7,7,9,2,10,8]);
DefineClassBaseStats('MageM', [16,1,2,3,3,3,6,5]);
DefineClassBaseStats('MageF', [16,1,3,2,2,4,3,5]);
DefineClassBaseStats('SageM', [20,5,4,4,5,5,7,6]);
DefineClassBaseStats('SageF', [19,4,6,5,3,6,4,6]);
DefineClassBaseStats('Monk', [18,1,1,2,1,5,6,5]);
DefineClassBaseStats('Cleric', [16,1,2,2,0,6,4,5]);
DefineClassBaseStats('BishopM', [21,4,4,4,3,8,7,6]);
DefineClassBaseStats('BishopF', [19,4,5,4,2,9,5,6]);
DefineClassBaseStats('ShamanM', [16,2,1,2,2,4,7,5]);
DefineClassBaseStats('ShamanF', [15,3,1,1,1,5,3,5]);
DefineClassBaseStats('DruidM', [19,6,3,4,4,6,8,6]);
DefineClassBaseStats('DruidF', [17,7,3,4,3,7,4,6]);
DefineClassBaseStats('Fighter', [20,5,2,4,2,0,11,5]);
DefineClassBaseStats('Warrior', [28,8,5,6,5,0,13,6]);
DefineClassBaseStats('Pirate', [19,4,2,6,3,0,10,5]);
DefineClassBaseStats('Berserker', [24,7,6,7,6,0,13,6]);
DefineClassBaseStats('PegKnight', [14,4,5,5,3,2,5,7]);
DefineClassBaseStats('Falcoknight', [20,6,7,7,5,4,6,8]);
DefineClassBaseStats('Troubadour', [15,1,1,3,2,5,5,7]);
DefineClassBaseStats('Valkyrie', [19,4,3,5,4,8,6,8]);

DefineClassGrowthRates('ArcherF',[70,35,40,32,35,15,20]);
DefineClassGrowthRates('ArcherM',[70,35,40,32,35,15,15]);
DefineClassGrowthRates('Archsage',[45,45,30,25,15,10,35]);
DefineClassGrowthRates('Assassin',[50,5,45,40,40,5,20]);
DefineClassGrowthRates('Bard',[45,45,30,60,70,0,13]);
DefineClassGrowthRates('Berserker',[75,50,35,25,15,10,13]);
DefineClassGrowthRates('BishopF',[45,35,25,22,40,8,50]);
DefineClassGrowthRates('BishopM',[45,35,25,22,40,8,40]);
DefineClassGrowthRates('BladeLord',[90,45,40,45,40,15,12]);
DefineClassGrowthRates('CavalierF',[75,35,40,28,30,15,15]);
DefineClassGrowthRates('CavalierM',[75,35,40,28,30,15,15]);
DefineClassGrowthRates('Cleric',[50,30,35,32,45,8,50]);
DefineClassGrowthRates('Dancer',[45,45,30,60,70,0,13]);
DefineClassGrowthRates('DruidF',[45,55,30,25,20,10,35]);
DefineClassGrowthRates('DruidM',[45,55,30,25,20,10,35]);
DefineClassGrowthRates('Falcoknight',[60,30,30,30,30,12,30]);
DefineClassGrowthRates('Fighter',[85,55,35,30,15,15,15]);
DefineClassGrowthRates('GeneralF',[75,30,25,10,20,23,25]);
DefineClassGrowthRates('GeneralM',[75,30,20,10,20,23,25]);
DefineClassGrowthRates('GreatLord',[90,45,40,45,40,15,20]);
DefineClassGrowthRates('HeroF',[75,30,30,20,25,20,20]);
DefineClassGrowthRates('HeroM',[75,30,30,20,25,20,20]);
DefineClassGrowthRates('KnightF',[80,40,30,15,25,28,20]);
DefineClassGrowthRates('KnightM',[80,40,30,15,25,28,20]);
DefineClassGrowthRates('KnightLord',[90,45,40,45,40,15,15]);
DefineClassGrowthRates('LordEliwood',[90,45,40,45,40,15,15]);
DefineClassGrowthRates('LordHector',[90,45,40,45,40,15,12]);
DefineClassGrowthRates('LordLyn',[90,45,40,45,40,15,20]);
DefineClassGrowthRates('MageF',[55,55,40,35,20,5,40]);
DefineClassGrowthRates('MageM',[55,55,40,35,20,5,30]);
DefineClassGrowthRates('MercenaryF',[80,40,40,32,30,18,30]);
DefineClassGrowthRates('MercenaryM',[80,40,40,32,30,18,20]);
DefineClassGrowthRates('Monk',[50,30,35,32,45,8,40]);
DefineClassGrowthRates('MyrmidonF',[70,35,40,40,30,15,20]);
DefineClassGrowthRates('MyrmidonM',[70,35,40,40,30,15,20]);
DefineClassGrowthRates('NmdTrooperF',[60,25,30,35,25,15,20]);
DefineClassGrowthRates('NmdTrooperM',[60,25,30,35,25,15,15]);
DefineClassGrowthRates('NomadF',[65,30,40,45,30,12,15]);
DefineClassGrowthRates('NomadM',[65,30,40,45,30,12,15]);
DefineClassGrowthRates('PaladinF',[70,25,35,25,25,12,25]);
DefineClassGrowthRates('PaladinM',[70,25,30,18,25,12,20]);
DefineClassGrowthRates('PegKnight',[65,35,40,40,35,12,35]);
DefineClassGrowthRates('Pirate',[75,50,35,25,15,10,13]);
DefineClassGrowthRates('SageF',[45,45,30,25,15,10,40]);
DefineClassGrowthRates('SageM',[45,45,30,25,15,10,40]);
DefineClassGrowthRates('ShamanF',[50,45,32,30,20,10,40]);
DefineClassGrowthRates('ShamanM',[50,50,32,30,20,10,30]);
DefineClassGrowthRates('SniperF',[65,30,30,20,30,15,25]);
DefineClassGrowthRates('SniperM',[65,30,30,20,30,15,20]);
DefineClassGrowthRates('Soldier',[80,50,30,20,25,12,15]);
DefineClassGrowthRates('SwordmasterF',[65,25,30,30,25,15,22]);
DefineClassGrowthRates('SwordmasterM',[65,25,30,30,25,15,22]);
DefineClassGrowthRates('ThiefF',[45,5,45,40,40,5,25]);
DefineClassGrowthRates('ThiefM',[50,5,45,40,40,5,20]);
DefineClassGrowthRates('Troubadour',[50,25,35,55,45,12,40]);
DefineClassGrowthRates('Valkyrie',[45,35,25,45,40,10,40]);
DefineClassGrowthRates('Warrior',[80,45,25,20,15,16,17]);
DefineClassGrowthRates('WyvernLordF',[75,40,30,20,20,20,17]);
DefineClassGrowthRates('WyvernLordM',[75,40,30,20,20,20,17]);
DefineClassGrowthRates('WyvernRiderF',[80,45,35,30,25,25,17]);
DefineClassGrowthRates('WyvernRiderM',[80,45,35,30,25,25,15]);

DefineClassPromotionBonuses('Archsage', null, [30, 30, 25, 20, 30]);
DefineClassPromotionBonuses('Assassin', [3, 1, 0, 0, 2, 2, 0], [20, 30, 30, 20, 20], 'ThiefM');
DefineClassPromotionBonuses('Berserker', [4, 1, 1, 1, 2, 2, 3], [30, 29, 28, 23, 21], 'Pirate');
DefineClassPromotionBonuses('BishopF', [3, 1, 2, 1, 2, 2, 1], [25, 25, 26, 21, 30], 'Cleric');
DefineClassPromotionBonuses('BishopM', [3, 2, 1, 0, 3, 2, 1], [25, 26, 24, 22, 30], 'Monk');
DefineClassPromotionBonuses('BladeLord', [3, 2, 2, 0, 3, 5, 1], [24, 29, 30, 22, 22], 'Lord');
DefineClassPromotionBonuses('DruidF', null, [29, 26, 26, 20, 29], 'ShamanF');
DefineClassPromotionBonuses('DruidM', [4, 0, 0, 3, 2, 2, 1], [29, 26, 26, 21, 28], 'ShamanM');
DefineClassPromotionBonuses('Falcoknight', [5, 2, 0, 0, 2, 2, 1], [23, 25, 28, 23, 26], 'PegKnight');
DefineClassPromotionBonuses('GeneralF', null, [25, 25, 22, 30, 26], 'KnightF');
DefineClassPromotionBonuses('GeneralM', [4, 2, 2, 3, 2, 3, 2], [29, 27, 24, 30, 25], 'KnightM');
DefineClassPromotionBonuses('GreatLord', [3, 0, 2, 3, 1, 5, 2], [30, 24, 24, 29, 20], 'Lord');
DefineClassPromotionBonuses('HeroF', null, [24, 30, 26, 24, 24], 'MercenaryF');
DefineClassPromotionBonuses('HeroM', [4, 0, 2, 2, 2, 2, 1], [25, 30, 26, 25, 22], 'MercenaryM');
DefineClassPromotionBonuses('KnightLord', [4, 2, 0, 1, 1, 3, 2], [27, 26, 24, 23, 25], 'Lord');
DefineClassPromotionBonuses('NmdTrooperF', null, [23, 28, 30, 22, 25], 'NmdTrooperF');
DefineClassPromotionBonuses('NmdTrooperM', [3, 2, 1, 1, 3, 3, 1], [25, 28, 30, 24, 23], 'NmdTrooperM');
DefineClassPromotionBonuses('PaladinF', null, [23, 27, 25, 24, 26], 'CavalierF');
DefineClassPromotionBonuses('PaladinM', [2, 1, 1, 1, 2, 1, 2], [25, 26, 24, 25, 25], 'CavalierM');
DefineClassPromotionBonuses('SageF', [3, 1, 1, 0, 3, 3, 1], [30, 28, 26, 21, 25], 'MageF');
DefineClassPromotionBonuses('SageM', [4, 1, 0, 0, 3, 3, 1], [28, 30, 26, 21, 25], 'MageM');
DefineClassPromotionBonuses('SniperF', [4, 3, 1, 1, 2, 2, 1], [24, 30, 29, 24, 24], 'ArcherF');
DefineClassPromotionBonuses('SniperM', [3, 1, 2, 2, 2, 3, 1], [25, 30, 28, 25, 23], 'ArcherM');
DefineClassPromotionBonuses('SwordmasterF', null, [22, 29, 30, 22, 25], 'MyrmidonF');
DefineClassPromotionBonuses('SwordmasterM', [5, 2, 0, 0, 2, 1, 1], [24, 29, 30, 22, 23], 'MyrmidonM');
DefineClassPromotionBonuses('Valkyrie', [3, 2, 1, 0, 2, 3, 1], [25, 24, 25, 24, 28], 'Troubadour');
DefineClassPromotionBonuses('Warrior', [3, 1, 2, 0, 3, 3, 2], [30, 28, 26, 26, 22], 'Fighter');
DefineClassPromotionBonuses('WyvernLordF', null, [25, 26, 24, 27, 23], 'WyvernRiderF');
DefineClassPromotionBonuses('WyvernLordM', [4, 0, 2, 2, 0, 2, 1], [27, 25, 23, 28, 22], 'WyvernRiderM');

function a2s(arr) {
  if (!arr) return null;

  return `[${arr}]`;
};

function s(str) {
  if (!str) return null;
  return `'${str}'`;
}

Object.entries(classes).forEach(([key, value]) => {
  const { bases, growths, bonuses, caps, baseForm } = value;

  console.log(`BuildClass('${key}', ${a2s(bases)}, ${a2s(growths)}, ${a2s(caps)}, ${a2s(bonuses)}, ${s(baseForm)});`);
});

console.log("BuildClass('Lord', [18,5,5,7,5,0,8], [80,50,50,45,45,35,30]);")