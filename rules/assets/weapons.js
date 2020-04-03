function createWeaponGroup(names, damage, range, hands, price, target) {
    names.forEach(n => target.addRecord(n, damage, range, hands, price));
}

function getWeapons() {
    let weapons = new RTableContent().setHeaders('Name', 'Damage', 'Range', 'Hands', 'Price');
    createWeaponGroup(['Unarmed', 'Improvised'], '1d4', 'Melee', '1', '-', weapons);
    createWeaponGroup(['Spear'], '1d6', 'Melee, reach', '1', '10g', weapons);
    createWeaponGroup(['Dagger', 'Short sword', 'Hand axe', 'Scimitar', 'Club', 'Warhammer'], '1d8', 'Melee', '1', '25g', weapons);
    createWeaponGroup(['Pike', 'Halberd'], '1d10', 'Melee, reach', '2', '40g', weapons);
    createWeaponGroup(['Longsword', 'Greataxe', 'Maul'], '1d12', 'Melee', '2', '50g', weapons);
    createWeaponGroup(['Javelin', 'Throwing dagger'], '1d6', '10m', '1', '5g', weapons);
    createWeaponGroup(['Bow', 'Crossbow'], '1d8', '30m', '2', '25g', weapons);
    return weapons.orderBy(0);
}

function createArmorGroup(names, physRes, price, other, target) {
    names.forEach(n => target.addRecord(n, physRes, price, other));
}

function getArmor() {
    let armors = new RTableContent().setHeaders('Name', 'Physical resistance', 'Price', 'Other');
    createArmorGroup(['Leather armor', 'Chain mail', 'Padded armor'], '1', '25g', 'Requires Strength 1', armors);
    createArmorGroup(['Scale mail', 'Plate mail'], '2', '100g', 'Requires Strength 2', armors);
    createArmorGroup(['Shield'], '1', '25g', 'Requires Strength 1', armors);
    return armors.orderBy(0);
}