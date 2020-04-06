const CAT = {
    TRANSFORMATION: 'Transformation',
    ILLUSION: 'Illusion',
    BLESSING: 'Blessing',
    CURSE: 'Curse',
    TELEPORTATION: 'Teleportation',
    ARTIFICERY: 'Artificery',
    PROTECTION: 'Protection',
    DESTRUCTION: 'Destruction',
    SUMMONING: 'Summoning',
    NECROMANCY: 'Necromancy',
    CONTROL: 'Control',
    MIND_AFFECTING: 'Mind affecting',
    AUGURY: 'Augury'
};


function getSpellsInfo() {
    return (
        `A spell is a magical ability that costs 1 EXP to learn and you (usually) must spend MP to use.`
    );
}

function getSpellCastingInfo() {
    return (
        `To cast a spell you must have at least one free hand and you must be able to speak. 
        To onlookers and the targets of spells it\'s obvious that magic is beeing invoked, unless specified otherwise.`
    );
}

function getSpells() {
    return new RTableContent()
        .setHeaders('Name', 'Level', 'Category', 'Cost (MP)', 'Usage time', 'Duration', 'Roll', 'Range', 'Component', 'Description')
        .addRecords(

            // transformation
            ['Beastspeech', '1', CAT.TRANSFORMATION, '1', 'Instant', '1 hour', '-', 'Self', '-',
                'You gain the ability to communicate with animals.'],
            ['Beastshape', '1', CAT.TRANSFORMATION, '2', 'Instant', '1 hour', '-', 'Self', '-',
                'You transform into a Beast of Tier no higher than 2. ' + 
                'You keep your Charisma, Intellect, Will and Magic levels. ' + 
                'In your new form you cannot cast any spells. ' + 
                'Upon transforming back any damage you took in your Beast form is transferred to your original form. ' +  
                'If your Beast form is slaing you transform back to your original form. ' + 
                'Tranforming back willingly counts as a casting of an Instant spell and it cannot leave you at less than 1 HP.'],
            ['Beastshape, greater', '3', CAT.TRANSFORMATION, '3', 'Instant', '1 hour', '-', 'Self', '-',
                'You transform into a Beast of Tier no higher than 4. ' + 
                'You keep your Charisma, Intellect, Will and Magic levels. ' + 
                'In your new form you cannot cast any spells. ' + 
                'Upon transforming back any damage you took in your Beast form is transferred to your original form. ' +  
                'If your Beast form is slaing you transform back to your original form. ' + 
                'Tranforming back willingly counts as a casting of an Instant spell and it cannot leave you at less than 1 HP.'],
            ['Claws', '1', CAT.TRANSFORMATION, '1', 'Instant', '1 hour', '-', 'Self', '-',
                'You grow a pair of claws and can use them as melee weapons that deal 1d8 physical damage.'],
            ['Wings', '2', CAT.TRANSFORMATION, '1', 'Instant', '1 hour', '-', 'Self', '-',
                'You grow a pair of wings and can use them to fly.'],


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

            // curse
            ['Weaken strength', '2', CAT.CURSE, '1', 'Action', '1 hour', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Strength decreases by 1.'],
            ['Weaken agility', '2', CAT.CURSE, '1', 'Action', '1 hour', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Agility decreases by 1.'],
            ['Weaken fortitude', '2', CAT.CURSE, '1', 'Action', '1 hour', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Fortitude decreases by 1.'],
            ['Weaken perception', '2', CAT.CURSE, '1', 'Action', '1 hour', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Perception decreases by 1.'],
            ['Weaken intellect', '2', CAT.CURSE, '1', 'Action', '1 hour', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Intellect decreases by 1.'],
            ['Weaken charisma', '2', CAT.CURSE, '1', 'Action', '1 hour', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Charisma decreases by 1.'],
            ['Weaken magic', '2', CAT.CURSE, '1', 'Action', '1 hour', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Magic decreases by 1.'],
            ['Weaken will', '2', CAT.CURSE, '1', 'Action', '1 hour', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Will decreases by 1.'],
            ['Cripple strength', '4', CAT.CURSE, '1', 'Action', '1 minute', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Strength decreases by 3.'],
            ['Cripple agility', '4', CAT.CURSE, '1', 'Action', '1 minute', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Agility decreases by 3.'],
            ['Cripple fortitude', '4', CAT.CURSE, '1', 'Action', '1 minute', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Fortitude decreases by 3.'],
            ['Cripple perception', '4', CAT.CURSE, '1', 'Action', '1 minute', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Perception decreases by 3.'],
            ['Cripple intellect', '4', CAT.CURSE, '1', 'Action', '1 minute', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Intellect decreases by 3.'],
            ['Cripple charisma', '4', CAT.CURSE, '1', 'Action', '1 minute', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Charisma decreases by 3.'],
            ['Cripple magic', '4', CAT.CURSE, '1', 'Action', '1 minute', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Magic decreases by 3.'],
            ['Cripple will', '4', CAT.CURSE, '1', 'Action', '1 minute', 'Attack (Magic vs Will)', '15m', '-',
                'Creature\'s Will decreases by 3.'],
            

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
                'You decide the shape and appearance of the portal, but are limited to a 10m x 10m area.'],


            // artificery
            ['Repair', '1', CAT.ARTIFICERY, '1', 'Action', '-', '-', 'Touch', '-',
                'You repair a broken non magical item. The area repaired is limited to a 1m x 1m x 1m cube. ' +
                'The spell can also be used to restore 1d4 + 1 HP to a Consruct type creature.'],
            ['Open lock', '1', CAT.ARTIFICERY, '1', 'Action', '-', '-', 'Touch', '-',
                'You open a single non-magical lock.'],
            ['Enchant weapon', '2', CAT.ARTIFICERY, '1', 'Action', '24 hours', '-', 'Touch', '-',
                'A single weapon deals +1 physical damage.'],
            ['Imbue weapon', '2', CAT.ARTIFICERY, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'A single weapon deals +1d4 damage of a type of your choice.'],

            // augury
            ['Analyse item', '2', CAT.AUGURY, '1', 'Action', '-', '-', 'Touch', '-',
                'You gain the information about a single item you are holding. ' +
                'You know it\'s make-up, general purpose and age. ' + 
                'If the item is or has in the past 24 hours been affected by magic you also gaint that information. ' + 
                'Examples: \"This is an iron key, it has been created 20 years ago.\", ' + 
                '\"This is an enchanted dragon scale mail armor, it has been forged 300 years ago.\"'], 
            ['Analyse magic', '3', CAT.AUGURY, '2', '1 minute', '-', '-', 'Touch', '-',
                'You gain the information about a single item you are holding. ' +
                'You understand it\'s magical properties (if any) fully. '],
            ['Omen', '2', CAT.AUGURY, '1', 'Action', '-', '-', 'Self', '-', 
                'You gain an engimatic hint from your GM regaring events in near future. It may or may not be usefull. ' + 
                'This spell can only be cast once every 24 hours. ' +  
                'Examples: \"Beware men of the hand of red.\", \"The eyes of the forrest can protect you.\"'],
            ['Divination shield', '3', CAT.AUGURY, '1', 'Action', '24 hours', '-', 'Touch', '-',
                'A single item or creature is concealed from the effects of information-gathering magic (such as \"Analyze item\" spell). ' + 
                'If it\'s a creature then thay are also always aware if such magic was attempted against them ' + 
                '(eg. they know if a \"Locate creature\" spell targeting them has just been prevented).'],
            ['Magic eye', '2', CAT.AUGURY, '1', 'Action', '1 hour', '-', '300m', '-',
                'Choose a point in range. A magical eyeball appears there and, for the duration of the spell, ' + 
                'you may percieve with it as if it was your own.'],
            ['Locate creature', '2', CAT.AUGURY, '1', 'Action', '1 minute', 'Save (Will vs Magic)', 'Unlimited', '-',
                'Name a creature. They then must Save or have their current location reveled to you (in a \"direction, distance\" form) to you. ' + 
                'Whether or not they succeed they are unaware of this spell being cast. ' + 
                'This spell also fails if the creature is in another dimension or if it does not exist in the first place.'],
            ['Astral knowledge', '5', CAT.AUGURY, '5', '10 minutes', '1 hour', '-', 'Self', '-',
                'For the duration of the spell you may ask the GM questions. For each question you recieve a \"yes or no\" answer ' + 
                'and must then roll a d6. On a 1 you lose all your remaining MP and the spell ends.'],

            // protection / healing
            ['Arcane shell', '2', CAT.PROTECTION, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'A creature is protected by a magic shield that absorbs up to 1d4+1 damage.'],
            ['Gravelskin', '1', CAT.PROTECTION, '1', 'Action', '8 hours', '-', 'Touch', '-',
                'Creature\'s physical resistance increases by 1.'],
            ['Ironskin', '3', CAT.PROTECTION, '2', 'Action', '1 hour', '-', 'Touch', '-',
                'Creature\'s physical resistance increases by 3.'],
            ['Accelerate healing', '1', CAT.PROTECTION, '1', '1 minute', '-', '-', 'Touch', '-',
                'A creature regenerates 1 HP per hour over the course of the next 2d6 hours.'],
            ['Healing touch', '3', CAT.PROTECTION, '2', 'Action', '-', '-', 'Touch', '-',
                'You restore 2d4 HP to a creature.'],
            ['Cleanse', '2', CAT.PROTECTION, '1', 'Action', '-', '-', 'Touch', '-',
                'You cure a creature of an ongoing poison or disease.'],
            ['Dispell', '3', CAT.PROTECTION, '2', 'Action', '', 'Attack (Magic vs Magic)', '20m', '-',
                'You end one ongoing magical effect. To do so you must succeed on a Magic vs Magic attack against the source of the effect. ' +
                'Permanent magical effects are not ended but instead supressed for 1 hour. ' +
                'To end a permanent effect you must successfully cast this spell 3 times in a span of 1 hour.'],
            ['Magic absorption', '3', CAT.PROTECTION, '1', 'Instant', 'Unlimited', '-', 'Self', '-',
                'Any damage you take is halved (rounding up) and deducted from your MP instead of HP. ' + 
                'The spell ends if your MP is fully depleted, you lose consciousness or you terminate the spell yourself.'],
            

            // destruction, fire
            ['Fire arrow', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Agility)', '20m', '-',
                'You deal 2d8 fire damage.'],
            ['Wall of fire', '3', CAT.DESTRUCTION, '2', 'Action', '1 minute', 'Save (Agility vs Magic)', '10m', '-',
                'Choose a point in range. That point becomes a center of a 8m x 2m wall of fire. ' + 
                'Any creature that starts or ends its turn in that wall or at any moment passes throught it ' + 
                'must Save or take 2d4 fire damage. This effect can only occur once per turn for each individual creature.'],
            ['Conflagration', '4', CAT.DESTRUCTION, '2', 'Action', '-', 'Attack (Magic vs Agility)', '20m', '-',
                'You deal 3d8 fire damage.'],
            // destruction, lightning
            ['Lighning strike', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Agility)', 'Melee', '-',
                'You deal 2d10 lightning damage.'],
            ['Call lightning', '3', CAT.DESTRUCTION, '2', 'Action', '-', 'Save (Fortitude vs Magic)', '100m', '-',
                'Choose a point in range. In 1d4 rounds a lightning will strike that point ' + 
                'and any creature within 5 meters from that point must Save or take 4d8 damage. ' + 
                'This spell fails if the any surface above the target point is there to intercept the lightning (eg. a roof or a ceiling).'],
            ['Lighning bolt', '4', CAT.DESTRUCTION, '2', 'Action', '-', 'Attack (Magic vs Agility)', '30m', '-',
                'You deal 4d6 lightning damage.'],
            // destruction, cold
            ['Ice lance', '2', CAT.DESTRUCTION, '1', 'Action', '1 minute', 'Attack (Magic vs Agility)', '20m', '-',
                'You deal 2d6 cold damage and reduce the target\'s Speed by 2.'],
            ['Crystal shards', '3', CAT.DESTRUCTION, '2', 'Action', '-', 'Attack (Magic vs Agility)', '5m', '-',
                'You make an attack against all targets in range, dealing 2d8 cold damage on each success.'],
            // destruction, darkness
            ['Necrotic ray', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Fortitude)', '20m', '-',
                'You deal 3d4 darkness damage.'],
            ['Life drain', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Fortitude)', '10m', '-',
                'You deal 2d4 darkness damage and heal that much HP.'],
            ['Curse of undeath', '4', CAT.DESTRUCTION, '3', 'Action', '-', 'Attack (Magic vs Fortitude)', '10m', '-',
                'You deal 3d6 darkness damage. If the target dies it then raises as an undead, as per \"Raise undead\" spell.'],
            // destruction, psychic
            ['Mind blast', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Will)', '10m', '-',
                'You deal 2d8 psychic damage.'],
            // destruction, light
            ['Destroy evil', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Will)', '10m', '-',
                'You deal 3d6 light damage to an Undead or a Demon creature.'],
            ['Magic void', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Will)', '15m', '-',
                'A creature loses 1d4 MP and takes 1 light damage for each MP lost.'],
            // destruction, poison
            ['Toxic cloud', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Save (Fortitude vs Magic)', '25m', '-',
                'Choose a point in range. Any creature within 3 metres from that point must Save or take 2d4 poison damage.'],
            // destruction, acid
            ['Acid spatter', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Save (Agility vs Magic)', '15m', '-',
                'All creatures in a 3m x 3m area must Save or take 1d10 acid damage.'],
            // destruction, physical
            ['Telekinetic throw', '2', CAT.DESTRUCTION, '1', 'Action', '-', 'Attack (Magic vs Agility)', '20m', '-',
                'You throw an item in range, no heavier than 10kg, at a target in range dealing 2d6 physical damage.'],
            ['Force blast', '3', CAT.DESTRUCTION, '2', 'Action', '-', 'Attack (Magic vs Strength)', '20m', '-',
                'A creature takes 3d6 physical damage and is knocked prone.'],


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
            ['Summon beast, greater', '3', CAT.SUMMONING, '3', 'Action', '1 hour', '-', '5m', '-',
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


            // area control
            ['Tar', '2', CAT.CONTROL, '1', 'Action', '1 minute', '-', '20m', '-',
                'You create a 5m x 5m area of sticky tar. Any creature moving through that area has it\'s Speed reduced by 3.'],
            ['Fog', '1', CAT.CONTROL, '1', 'Action', '1 minute', '-', '20m', '-',
                'You create a 10m x 10m x 5m area of thick fog. Any creature moving through that area can\'s see anything past 3 metres.'],
            ['Dimension chain', '2', CAT.CONTROL, '1', 'Action', '24 hours', 'Attack (Magic vs Magic)', '20m', '-',
                'A creature cannot teleport or be teleported in any way and it\'s Speed is redued by 1.'],
            ['Slow', '1', CAT.CONTROL, '1', 'Action', '1 minute', 'Attack (Magic vs Agility)', '30m', '-',
                'A creature\'s speed is reduced by 3.'],
            ['Magnetic shackles', '2', CAT.CONTROL, '2', 'Action', '1 hour', 'Save (Agility vs Magic)', '30m', '-',
                'Choose a point in range. Any creature in 5m radius from that point that fails the Save are bound together with magical shackles. ' + 
                'Those creatures cannot move more than 10m away from one another for the duration of the spell. Their Speed is also reduced by 2.'],


            // mind affecting
            ['Charm', '1', CAT.MIND_AFFECTING, '1', 'Action', '1 hour', 'Attack (Magic vs Will)', '5m', '-',
                'A creature of your choice turns friendly towards you for the duration of the spell.' + 
                'It will asist and aid you but will not take any great risks for you. ' + 
                'Once the effect ends the creature has no idea that it had been charmed.'],
            ['Enthrall', '3', CAT.MIND_AFFECTING, '3', 'Action', '8 hours', 'Attack (Magic vs Will)', '5m', '-',
                'A creature of your choice serves you for duration of the spell, but ignores any orders to kill or hurt itself. ' + 
                'The effects of the spell are obvious to onlookers but the creature ignores them. ' +
                'Once the effect ends the creature has no memory of the actions it took while enthralled.'],
            ['Dominate', '5', CAT.MIND_AFFECTING, '5', 'Action', '24 hours', 'Attack (Magic vs Will)', '5m', '-',
                'A creature of your choice serves you for duration of the spell. ' + 
                'Once the effect ends the creature has no memory of the actions it took while dominated.'],


            // illusion
            ['Guise', '1', CAT.ILLUSION, '1', 'Action', '1 hour', 'Save (Perception vs Magic)', 'Touch', '-',
                'You alter the way a willing creature looks. ' + 
                'The illusioon is limited to up to 1m from the target\'s body. ' + 
                'A character that has a reason to suspect foul play may attempt to Save to see throught the illusion.'],
            ['Mirage', '1', CAT.ILLUSION, '1', 'Action', '1 hour', 'Save (Perception vs Magic)', '100m', '-',
                'You conjure a static images or alter the appearance of stationary objects in a 10m x 10m x 10m cubic area. ' + 
                'The illusion, once created cannot be altered. ' + 
                'A character that has a reason to suspect foul play may attempt to Save to see throught the illusion.'],
            ['Voices', '1', CAT.ILLUSION, '1', 'Action', '1 hour', 'Save (Perception vs Magic)', '100m', '-',
                'Pick a point in range. It becomes the source of sounds and voices, the nature of which  ' + 
                'you have to specify fully the moment you cast this spell.'],
            ['Vanish', '1', CAT.ILLUSION, '1', 'Instant', '1 minute', '-', 'Self', '-',
                'You turn invisible until you attack, cast another spell or take any damage.'],
            ['Invisibility', '2', CAT.ILLUSION, '1', 'Action', '1 hour', '-', 'Touch', '-',
                'A creature turns invisible until it attacks, casts a spell or takes any damage.'],

            )
        .orderBy(0);
}
