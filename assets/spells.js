const CAT = {
    TRANSFORMATION: 'Transformation',
    ILLUSION: 'Illusion',
    BLESSING: 'Blessing',
    TELEPORTATION: 'Teleportation',
    ARTIFICERY: 'Artificery',
    PROTECTION: 'Protection',
    DESTRUCTION: 'Destruction',
    SUMMONING: 'Summoning',
    NECROMANCY: 'Necromancy',
    CONTROL: 'Control'
};

function getSpells() {
    return new RTableContent()
        .setHeaders('Name', 'Level', 'Category', 'Cost (MP)', 'Usage time', 'Duration', 'Roll', 'Range', 'Component', 'Description')
        .addRecords(

            // transformation
            ['Beastspeech', '1', CAT.TRANSFORMATION, '1', 'Instant', '1 hour', '-', 'Self', '-',
                'You gain the ability to communicate with animals.'],
            ['Claws', '1', CAT.TRANSFORMATION, '1', 'Instant', '1 hour', '-', 'Self', '-',
                'You grow a pair of claws and can use them as melee weapons that deal 1d8 physical damage.'],
            ['Wings', '2', CAT.TRANSFORMATION, '1', 'Instant', '1 hour', '-', 'Self', '-',
                'You grow a pair of wings and can use them to fly.'],

            // invisibility
            ['Vanish', '1', CAT.ILLUSION, '1', 'Instant', '1 minute', '-', 'Self', '-',
                'You turn invisible until you attack, cast another spell or take any damage.'],
            ['Invisibility', '2', CAT.ILLUSION, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'A creature turns invisible until it attacks, casts a spell or takes any damage.'],

            // blessing
            ['Bolster strength', '2', CAT.BLESSING, '1', 'Action', '8 hours', '-', 'Touch', '-',
                'Creature\'s Strength increases by 1.'],
            ['Bolster agility', '2', CAT.BLESSING, '1', 'Action', '8 hours', '-', 'Touch', '-',
                'Creature\'s Agility increases by 1.'],
            ['Bolster fortitude', '2', CAT.BLESSING, '1', 'Action', '8 hours', '-', 'Touch', '-',
                'Creature\'s Fortitude increases by 1.'],
            ['Bolster perception', '2', CAT.BLESSING, '1', 'Action', '8 hours', '-', 'Touch', '-',
                'Creature\'s Perception increases by 1.'],
            ['Bolster intellect', '2', CAT.BLESSING, '1', 'Action', '8 hours', '-', 'Touch', '-',
                'Creature\'s Intellect increases by 1.'],
            ['Bolster charisma', '2', CAT.BLESSING, '1', 'Action', '8 hours', '-', 'Touch', '-',
                'Creature\'s Charisma increases by 1.'],
            ['Bolster magic', '2', CAT.BLESSING, '1', 'Action', '8 hours', '-', 'Touch', '-',
                'Creature\'s Magic increases by 1.'],
            ['Bolster will', '2', CAT.BLESSING, '1', 'Action', '8 hours', '-', 'Touch', '-',
                'Creature\'s Will increases by 1.'],
            ['Empower strength', '4', CAT.BLESSING, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'Creature\'s Strength increases by 3.'],
            ['Empower agility', '4', CAT.BLESSING, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'Creature\'s Agility increases by 3.'],
            ['Empower fortitude', '4', CAT.BLESSING, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'Creature\'s Fortitude increases by 3.'],
            ['Empower perception', '4', CAT.BLESSING, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'Creature\'s Perception increases by 3.'],
            ['Empower intellect', '4', CAT.BLESSING, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'Creature\'s Intellect increases by 3.'],
            ['Empower charisma', '4', CAT.BLESSING, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'Creature\'s Charisma increases by 3.'],
            ['Empower magic', '4', CAT.BLESSING, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'Creature\'s Magic increases by 3.'],
            ['Empower will', '4', CAT.BLESSING, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'Creature\'s Will increases by 3.'],
            
            // teleport
            ['Blink', '2', CAT.TELEPORTATION, '1', 'Instant', '-', '-', '5m', '-',
                'You teleport to a place in range that you can see.'],
            ['Dimension step', '3', CAT.TELEPORTATION, '1', 'Action', '-', '-', '100m', '-',
                'You teleport to a place in range that you can see. You may take 1 willing creature with you.'],
            ['Teleport', '4', CAT.TELEPORTATION, '3', '1 minute', '-', '-', '100km', '-',
                'You teleport to a place in range that you can see or have been to at least once. You may take up to 8 willing creatures with you.'],
            ['Portal', '5', CAT.TELEPORTATION, '5', '10 minutes', '1 hour', '-', 'Unlimited', '-',
                'You create a portal between your current location and a place in range that you can see or have been to at least once. ' + 
                'While it stays open any creature or item may instantly cross between those two loactions. ' + 
                'You decide the shape of the portal, but are limited to a 10m x 10m area.'],

            // item enchanting
            ['Repair', '1', CAT.ARTIFICERY, '1', 'Action', '-', '-', 'Touch', '-',
                'You repair a broken non magical item. The area repaired is limited to a 1m x 1m x 1m cube. ' +
                'The spell can also be used to restore 1d4 + 1 HP to a Consruct type creature.'],
            ['Enchant weapon', '2', CAT.ARTIFICERY, '1', 'Action', '24 hours', '-', 'Touch', '-',
                'A single weapon deals +1 physical damage.'],
            ['Imbue weapon', '2', CAT.ARTIFICERY, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'A single weapon deals +1d4 damage of a type of your choice.'],

            // protection / healing
            ['Arcane shell', '2', CAT.PROTECTION, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'A creature is protected by a magic shield that absorbs up to 1d4+1 damage.'],
            ['Gravelskin', '1', CAT.PROTECTION, '1', 'Action', '8 hours', '-', 'Touch', '-',
                'Creature\'s physical resistance increases by 1.'],
            ['Ironskin', '3', CAT.PROTECTION, '2', 'Action', '1 hour', '-', 'Touch', '-',
                'Creature\'s physical resistance increases by 3.'],
            ['Healing touch', '2', CAT.PROTECTION, '1', 'Action', '-', '-', 'Touch', '-',
                'You restore 2d6 HP to a creature.'],
            ['Cleanse', '2', CAT.PROTECTION, '1', 'Action', '-', '-', 'Touch', '-',
                'You cure a creature of an ongoing poison or disease.'],
            ['Dispell', '3', CAT.PROTECTION, '2', 'Action', '', 'Attack (Magic vs Magic)', '20m', '-',
                'You end one ongoing magical effect. To do so you must succeed on a Magic vs Magic attack against the source of the effect. ' +
                'Permanent magical effects are not ended but instead supressed for 1 hour. ' +
                'To end a permanent effect you must successfully cast this spell 3 times in a span of 1 hour.'],
            
            // destruction, fire
            ['Fire arrow', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Agility)', '20m', '-',
                'You deal 2d8 fire damage.'],
            ['Conflagration', '4', CAT.DESTRUCTION, '2', 'Action', '-', 'Attack (Magic vs Agility)', '20m', '-',
                'You deal 3d8 fire damage.'],
            // destruction, lightning
            ['Lighning strike', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Agility)', 'Melee', '-',
                'You deal 2d10 lightning damage.'],
            ['Lighning bolt', '4', CAT.DESTRUCTION, '2', 'Action', '-', 'Attack (Magic vs Agility)', '30m', '-',
                'You deal 4d6 lightning damage.'],
            // destruction, cold
            ['Ice lance', '2', CAT.DESTRUCTION, '1', 'Action', '1 minute', 'Attack (Magic vs Agility)', '20m', '-',
                'You deal 2d6 cold damage and reduce the target\'s Speed by 2.'],
            // destruction, darkness
            ['Necrotic ray', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Fortitude)', '20m', '-',
                'You deal 3d4 darkness damage.'],
            // destruction, psychic
            ['Mind blast', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Will)', '10m', '-',
                'You deal 2d8 psychic damage.'],
            // destruction, light
            // destruction, poison
            // destruction, acid
            // destruction, physical

            // summoning
            ['Summon elemental', '2', CAT.SUMMONING, '2', 'Action', '1 hour', '-', '5m', '-',
                'You summon a Tier 2 or lower Elemental of your choice to serve you. ' +
                'After the spell ends the creature vanishes.'],
            ['Summon elemental, greater', '4', CAT.SUMMONING, '5', 'Action', '1 hour', '-', '5m', '-',
                'You summon a Tier 4 or lower Elemental of your choice to serve you. ' +
                'After the spell ends the creature vanishes.'],
            ['Summon beast', '1', CAT.SUMMONING, '1', 'Action', '1 hour', '-', '5m', '-',
                'You summon a Tier 1 or lower Beast of your choice to serve you. ' +
                'After the spell ends the creature vanishes.'],
            ['Summon beast, greater', '1', CAT.SUMMONING, '3', 'Action', '1 hour', '-', '5m', '-',
                'You summon a Tier 3 or lower Beast of your choice to serve you. ' +
                'After the spell ends the creature vanishes.'],
            ['Summon swarm', '3', CAT.SUMMONING, '3', 'Action', '1 hour', '-', '5m', '-',
                'You summon 1d4 + 2 Tier 0 Beasts of your choice to serve you. ' +
                'After the spell ends the creatures vanish.'],
            ['Summon demon', '3', CAT.SUMMONING, '2', 'Action', 'Unlimited', '-', '5m', '-',
                'You summon a Tier 3 or lower Demon of your choice. It may be convinced to serve you.'],
            ['Summon demon, greater', '5', CAT.SUMMONING, '5', 'Action', 'Unlimited', '-', '5m', '-',
                'You summon a Tier 5 or lower Demon of your choice. It may be convinced to serve you.'],
            ['Summon weapon', '1', CAT.SUMMONING, '1', 'Instant', '1 hour', '-', 'Self', '-',
                'You summon a weapon of your choice into your hand. ' +
                'After the spell ends the weapon vanishes.'],
            ['Bind familiar', '2', CAT.SUMMONING, '2', '1 minute', 'Unlimited', '-', '5m', '-',
                'You turn a single friendly Beast of Tier 0 into your loyal familiar. ' +
                'It understands and obeys your commands and it\'s natural lifespan is increased to match yours. ' + 
                'The spell ends if the familiar dies or you cast this spell again.'],
            ['Create homunculus', '3', CAT.SUMMONING, '5', '1 hour', 'Unlimited', '-', '5m', 'a drop of your blood',
                'You conjure a Homonculus (Construct, Tier 0) to serve you. ' +
                'It understands and obeys your commands and can telepathically communicate what is sees or hears to you. ' + 
                'Any damage the homonculus takes you take also. ' + 
                'The spell ends if the homonculus dies or you cast this spell again.'],

            // necromancy
            ['Raise undead', '2', CAT.NECROMANCY, '2', 'Action', '24 hours', '-', '5m', '-',
                'You raise nearby corpse(s) as a Tier 1 or lower Undead of your choice to serve you. ' +
                'The GM is the final arbiter whether or not the availiable corpses fit that choice. ' +
                'After the spell ends the creature breaks out of your control and becomes hostile to all living creatures.'],
            ['Raise undead, greater', '4', CAT.NECROMANCY, '5', 'Action', '24 hours', '-', '5m', '-',
                'You raise nearby corpse(s) as a Tier 3 or lower Undead of your choice to serve you. ' +
                'The GM is the final arbiter whether or not the availiable corpses fit that choice. ' +
                'After the spell ends the creature breaks out of your control and becomes hostile to all living creatures.'],
            ['Control undead', '2', CAT.NECROMANCY, '1', 'Action', '24 hours', 'Attack (Magic vs Will)', '10m', '-',
                'You take controll over an Tier 1 or lower Undead creature. If the creature is already under your control and ' +
                'you are using this spell to maintain it, then the spell succeeds automatically.'],
            ['Control undead, greater', '2', CAT.NECROMANCY, '2', 'Action', '24 hours', 'Attack (Magic vs Will)', '10m', '-',
                'You take controll over an Tier 3 or lower Undead creature. If the creature is already under your control and ' +
                'you are using this spell to maintain it, then the spell succeeds automatically.'],

            // area controll
            ['Tar', '2', CAT.CONTROL, '1', 'Action', '1 minute', '-', '20m', '-',
                'You create a 5m x 5m area of sticky tar. Any creature moving through that area has it\'s Speed reduced by 3.'],
            ['Fog', '1', CAT.CONTROL, '1', 'Action', '1 minute', '-', '20m', '-',
                'You create a 10m x 10m x 5m area of thick fog. Any creature moving through that area can\'s see anything past 3 metres.']

            )
        .orderBy(0);
}
