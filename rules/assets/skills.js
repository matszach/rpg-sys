function getSkills() {
    return new RTableContent()
        .setHeaders('Name', 'Description')
        .addRecords(
            ['Speak language (name, eg. elvish, dwarven) *', '-'],
            ['Use weapon (type, eg. bow, longsword, dagger) **', '-'],
            ['Move heavy object', '-'],
            ['Swim', '-'],
            ['Climb', '-'],
            ['Sneak', '-'],
            ['Camouflage', '-'],
            ['Balance', '-'],
            ['Escape restraints', '-'],
            ['Open lock', '-'],
            ['Sleight of hand', '-'],
            ['Handle animal', '-'],
            ['Appraise item', '-'],
            ['Forge signature', '-'],
            ['Imitate voice', '-'],
            ['Fist aid', '-'],
            ['Knowledge (topic, eg. arcane, nature, history, occult, street smarts)', '-'],
            ['Craft item (type, eg. blacksmithing, cooking, tailoring, alchemy, enchanting, poison creation)', '-'],
            ['Play a game (type, eg. chess, dice)', '-'],
            ['Listen', '-'],
            ['Spot', '-'],
            ['Smell', '-'],
            ['Track', '-'],
            ['Navigate', '-'],
            ['Disguise', '-'],
            ['Intimidate', '-'],
            ['Persuade', '-'],
            ['Lie', '-'],
            ['Read person', '-'],
            ['Perform (type, eg. dancing, singing, delivering a speech)', '-'])
        .orderBy(0);
}

function getSkillsInfo() {
    return (
        `A skill represents your character\'s proficiency in a given activity. 
        Skills grant your character a bonus to any Tests made to apply that skill.
        The GM is the final arbiter if whether or not that bonus applies.
        The higher the level of the skill (I/II/III) the higher the bonus you recieve (+3/+5/+6).
        Whatever the action you are takig, no more that one skill bonus may be applied to a single Test.`
    );
}

function getSkillsWeaponsInfo() {
    return (
        `Weapon skills are an exception. They allow you to reroll the weapon\'s damage die if the result is low. 
        The higher the level of the skill (I/II/III) the higher the minimum result that you can reroll (1/2/3). 
        You must use the second result.`
    );
}

function getSkillsLanguagesInfo() {
    return (
        `Language skills are an exception. They allow you to speak, read and write in a seleted language. 
        The higher the level of the skill (I/II/III) the more proficient in that language you become (basic/intermidiate/advanced(or native)).`
    );
}

function getSkillsCustomInfo() {
    return (
        ``
    );
}