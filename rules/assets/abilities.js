function getAbilities() {
    return new RTableContent()
        .setHeaders('Name', 'Cost (SP)', 'Usage time', 'Duration', 'Description')
        .addRecords(
            ['Charge', '1', 'Instant', '1 turn',
                'Name a target you intend to strike with a melee attack. ' +
                'Your speed is increased by 3, as long as your are moving towards that target. ' + 
                'Your melee attack against this target is made with a +2 bonus, as long as you travelled at least 3 metres.'],
            ['Dual attack', '1', 'Action', '-',
                'You make 2 weapon attacks, each with a different weapon (eg. 2 daggers 1 in each hand) instead of 1.'],
            ['Dash', '1', 'Instant', '-',
                'Move up to 3 metres.'],       
            ['Block', '1', 'Reaction', '-',
                'Upon taking physical damage you reduce the damage taken by 3 (or 5 if you are using a shield).'],
            ['Evasion', '2', 'Reaction', '-',
                'Upon taking any damage you reduce it by half (rounding down).'],
            ['Precise attack', '1', 'Action', '-',
                'You make a weapon attack. It ignores any disadvantages, cover bonuses or physical resistances.'],
            ['Powerful attack', '1', 'Action', '-',
                'You make a weapon attack. It deals additional 1d4 physical damage.'],
            ['Multiattack', '2', 'Action', '-',
                'You make 2 weapon attacks instead of 1.'],
            ['Break limits', '1', 'Instant', '-',
                'You can repeat a Strength, Agility or a Fortitude check. You must use the second result.'],
            ['Cleave', '1', 'Action', '-',
                'You can make up to 3 melee weapon attacks, each against a different target in range, instead of 1.'],
            ['Forceful attack', '1', 'Action', '-',
                'You make a weapon which, if successful, pushes your target back up to 3 metres.'],
            ['Disarming attack', '1', 'Action', '-',
                'You make a weapon which, if successful, forces your target to drop one item they are holding.'],
            ['Sneak attack', '1', 'Action', '',
                'You make a weapon which, if successful and made with advantage, deals additional 2d6 damage.'])
        .orderBy(0);
}
