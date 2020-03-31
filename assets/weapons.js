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
