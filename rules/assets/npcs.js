const TYPE = {
    HUMANOID: 'Humanoid',
    UNDEAD: 'Undead',
    CONSTRUCT: 'Construct',
    BEAST: 'Beast',
    MONSTER: 'Monster',
    GIANT: 'Giant',
    ELEMENTAL: 'Elemental',
    DEMON: 'Demon',
    ANGEL: 'Angel'
};

class NPC {

    constructor(name) {
        this.name = name || 'Name';
        this.attr = {
            str: 0, agi: 0, for: 0, per: 0, 
            int: 0, cha: 0, wil: 0, mag: 0
        };
        this.res = {
            hp: 5, sp: 5, mp: 5
        };
        this.speed = 5;
        this.size = 'M';
        this.type = 'Type';
        this.tier = 1;
        this.desc = '-';
        this.traits = [];
        this.actions = [];
    }

    setAttr(s, a, f, p, i, c, w, m) {
        this.attr = {
            str: s, agi: a, for: f, per: p, 
            int: i, cha: c, wil: w, mag: m
        };
        return this;
    }

    setRes(hp, sp, mp) {
        this.res = {
            hp: hp, sp: sp, mp: mp
        };
        return this;
    }

    setSpeed(speed) {
        this.speed = speed; 
        return this;
    }

    setType(type) {
        this.type = type;
        return this;
    }
    
    setSize(s) {
        this.size = s;
        return this;
    }

    setDesc(desc) {
        this.desc = desc;
        return this;
    }

    setTier(tier) {
        this.tier = tier;
        return this;
    }

    putAction(premadeAction) {
        this.actions.push(premadeAction);
        return this;
    }

    putTrait(premadeTrait) {
        this.traits.push(premadeTrait);
        return this;
    }

}

class Action {
    constructor(name, usageTime, cost, desc) {
        this.name = name;
        this.usageTime = usageTime;
        this.cost = cost;
        this.desc = desc;
    }
}

class Trait {
    constructor(name, desc) {
        this.name = name;
        this.desc = desc;
    }
}

const ACTIONS = {
    SPEAR: new Action('Spear', 'Action', '', 'Attack (Strength vs Agility), 2m range, 1d6 (3) physical damage'),
    SHORT_SWORD: new Action('Short sword', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d8 (4) physical damage'),
    BOW: new Action('Bow', 'Action', '', 'Attack (Strength vs Agility), 30m range, 1d8 (4) physical damage'),
    AXE: new Action('Axe', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d8 (4) physical damage'),
    CLAW: new Action('Claw', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d4 (2) physical damage'),
    SCRATH: new Action('Scrath', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d2 (1) physical damage'),
    PECK: new Action('Peck', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d2 (1) physical damage'),

    SLAM_D4: new Action('Slam', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d4 (2) physical damage'),
    SLAM_D6: new Action('Slam', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d6 (3) physical damage'),
    SLAM_D8: new Action('Slam', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d8 (4) physical damage'),
    SLAM_D10: new Action('Slam', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d10 (5) physical damage'),
    SLAM_D12: new Action('Slam', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d12 (6) physical damage'),

    FIREWAVE: new Action('Firewave', 'Action', '1 MP', 'Attack (Magic vs Agility), 10m range, 2d6 (7) fire damage.'),
    FROSTBITE: new Action('Frostbite', 'Action', '1 MP', 'Attack (Magic vs Fortitude), 10m range, 1d6 (3) cold damage, reduces Speed by 2 for 1 minute.'),
    DISCHARGE: new Action('Discharge', 'Action', '1 MP', 'Attack (Magic vs Agility), 15m range, 2d4 (5) lightning damage, pushes target back by 2 metres.'),

    DASH: new Action('Dash', 'Instant', '', '1 SP', 'Move up to 3 metres'),
};

const TRAITS = {

    UNDEATH: new Trait('Undeath', 'this creature is immune to poisons and any mind affecting magic'),
    OUTSIDER: new Trait('Outsider', 'this creature does not come from the mortal world and can, therefore, be banished from it'),

    DARKVISION: new Trait('Darkvision', 'this creature suffers no disadvantages when acting in low light'),
    HUNTERS_SENSE_I: new Trait('Hunter\'s sense I', 'this creature has a +3 bonus on rolls made to detect nearby creatures'),
    HUNTERS_SENSE_II: new Trait('Hunter\'s sense II', 'this creature has a +5 bonus on rolls made to detect nearby creatures'),
    HUNTERS_SENSE_III: new Trait('Hunter\'s sense III', 'this creature has a +6 bonus on rolls made to detect nearby creatures'),
    WINGS: new Trait('Wings', 'this creature can fly'),
    SNEAKY_I: new Trait('Sneaky I', 'this creature has a +3 bonus on rolls made to hide'),
    SNEAKY_II: new Trait('Sneaky I', 'this creature has a +5 bonus on rolls made to hide'),
    SNEAKY_III: new Trait('Sneaky I', 'this creature has a +6 bonus on rolls made to hide'),
    BRAVE_I: new Trait('Brave I', 'this creature has +3 bonus on rolls made to resist the effects of fear'),
    BRAVE_II: new Trait('Brave II', 'this creature has +5 bonus on rolls made to resist the effects of fear'),
    BRAVE_III: new Trait('Brave III', 'this creature has +6 bonus on rolls made to resist the effects of fear'),

    IMMUNITY: {
        FIRE: new Trait('Fire immune', 'this creature is immune to fire damage'),
        COLD: new Trait('Cold immune', 'this creature is immune to cold damage'),
        LIGHTNING: new Trait('Lightning immune', 'this creature is immune to lightning damage'),
    }

}




function getNpcs() {
    return [

        // humanoids
        new NPC('Goblin')
            .setTier(1).setSpeed(5).setSize('S').setType(TYPE.HUMANOID)
            .setRes(5, 4, 0).setAttr(0, 1, 1, 2, 0, -1, -1, 0)
            .putTrait(TRAITS.DARKVISION)
            .putAction(ACTIONS.SPEAR).putAction(ACTIONS.DASH)
            .setDesc('Small, tribal and green-skinned monstrous humanoid creature.'),
        new NPC('Orc')
            .setTier(1).setSpeed(5).setSize('M').setType(TYPE.HUMANOID)
            .setRes(8, 5, 0).setAttr(2, 0, 1, 0, -1, 0, 2, 0)
            .putTrait(TRAITS.BRAVE_II)
            .putAction(ACTIONS.AXE)
            .setDesc('Medium, tribal and green-skinned monstrous humanoid creature.'),

        // undead
        new NPC('Skeleton warrior')
            .setTier(1).setSpeed(4).setSize('M').setType(TYPE.UNDEAD)
            .setRes(6, 5, 0).setAttr(1, 1, 0, 0, 0, 0, 1, 0)
            .putTrait(TRAITS.UNDEATH)
            .putAction(ACTIONS.SHORT_SWORD).putAction(ACTIONS.CLAW)
            .setDesc('Reanimated skeletal remains of a fallen warrion.'),
        new NPC('Skeleton archer')
            .setTier(1).setSpeed(4).setSize('M').setType(TYPE.UNDEAD)
            .setRes(4, 5, 0).setAttr(2, 0, 0, 1, 0, 0, 1, 0)
            .putTrait(TRAITS.UNDEATH)
            .putAction(ACTIONS.BOW).putAction(ACTIONS.CLAW)
            .setDesc('Reanimated skeletal remains of a fallen archer.'),
        new NPC('Zombie')
            .setTier(1).setSpeed(3).setSize('M').setType(TYPE.UNDEAD)
            .setRes(8, 5, 0).setAttr(2, -2, 3, -3, 0, 0, 1, 0)
            .putTrait(TRAITS.UNDEATH)
            .putAction(ACTIONS.CLAW)
            .setDesc('Reanimated rotting corpse, now hungering for living flesh.'),

        // construct

        // beast
        new NPC('Cat')
            .setTier(0).setSpeed(6).setSize('S').setType(TYPE.BEAST)
            .setRes(2, 2, 0).setAttr(-2, 3, 0, 2, 0, 0, 0, 0)
            .putTrait(TRAITS.HUNTERS_SENSE_I)
            .putAction(ACTIONS.SCRATH)
            .setDesc('An ordinary small cat.'),
        new NPC('Rat')
            .setTier(0).setSpeed(5).setSize('S').setType(TYPE.BEAST)
            .setRes(1, 2, 0).setAttr(-4, 2, 0, 2, 0, 0, 0, 0)
            .putTrait(TRAITS.SNEAKY_I)
            .putAction(ACTIONS.SCRATH)
            .setDesc('An ordinary small rat.'),
        new NPC('Owl')
            .setTier(0).setSpeed(6).setSize('S').setType(TYPE.BEAST)
            .setRes(2, 2, 0).setAttr(-3, 1, 0, 2, 0, 0, 0, 0)
            .putTrait(TRAITS.HUNTERS_SENSE_I).putTrait(TRAITS.WINGS)
            .putAction(ACTIONS.PECK)
            .setDesc('An ordinary small owl.'),

        // monsters

        // giants

        // elementals
        new NPC('Spirit, Fire')
            .setTier(2).setSpeed(5).setSize('M').setType(TYPE.ELEMENTAL)
            .setRes(7, 5, 3).setAttr(0, 1, 0, 1, 0, 0, 1, 2)
            .putTrait(TRAITS.OUTSIDER).putTrait(TRAITS.IMMUNITY.FIRE)
            .putAction(ACTIONS.FIREWAVE).putAction(ACTIONS.SLAM_D6)
            .setDesc('A spirit of pure fire energy.'),
        new NPC('Spirit, Ice')
            .setTier(2).setSpeed(4).setSize('M').setType(TYPE.ELEMENTAL)
            .setRes(10, 5, 2).setAttr(2, 0, 2, 1, 0, 0, 1, 1)
            .putTrait(TRAITS.OUTSIDER).putTrait(TRAITS.IMMUNITY.COLD)
            .putAction(ACTIONS.FROSTBITE).putAction(ACTIONS.SLAM_D10)
            .setDesc('A spirit of pure ice energy.'),
        new NPC('Spirit, Lightning')
            .setTier(2).setSpeed(7).setSize('M').setType(TYPE.ELEMENTAL)
            .setRes(6, 5, 5).setAttr(-1, 2, -1, 1, 0, 0, 1, 3)
            .putTrait(TRAITS.OUTSIDER).putTrait(TRAITS.IMMUNITY.LIGHTNING)
            .putAction(ACTIONS.DISCHARGE).putAction(ACTIONS.SLAM_D6)
            .setDesc('A spirit of pure lightning energy.'),

    ].sort((o1, o2) => o1.name.localeCompare(o2.name));
}