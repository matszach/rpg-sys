function getAttributes() {
    return new RTableContent()
        .setHeaders('Name', 'Description')
        .addRecords(
            ['Strength', '-'],
            ['Agility', '-'],
            ['Fortitude', '-'],
            ['Perception', '-'],
            ['Intellect', '-'],
            ['Charisma', '-'],
            ['Will', '-'],
            ['Magic', '-'])
        .orderBy(0);
}
