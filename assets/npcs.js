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

    addAction(name, usageTime, cost, desc) {
        this.actions.push({
            name: name, 
            usageTime: usageTime,
            cost: cost, 
            desc: desc
        });
        return this;
    }

    putAction(premadeAction) {
        this.actions.push(premadeAction);
        return this;
    }

    addTrait(name, desc) {
        this.traits.push({
            name: name, 
            desc: desc
        });
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
    CLAW: new Action('Claw', 'Action', '', 'Attack (Strength vs Agility), 1m range, 1d4 (2) physical damage'),

    DASH: new Action('Dash', 'Instant', '', '1 SP', 'Move up to 3 metres'),
};

const TRAITS = {
    DARKVISION: new Trait('Darkvision', 'this creature suffers no disadvantages when acting in low light'),
    UNDEATH: new Trait('Undeath', 'this creature is immune to poisons and any mind affecting magic'),
}




function getNpcs() {
    return [
        // humanoids
        new NPC('Goblin')
            .setTier(1).setSpeed(5).setSize('S').setType(TYPE.HUMANOID)
            .setRes(5, 2, 0).setAttr(0, 1, 1, 2, 0, -1, -1, 0)
            .putTrait(TRAITS.DARKVISION)
            .putAction(ACTIONS.SPEAR).putAction(ACTIONS.DASH)
            .setDesc('Small, tribal and green-skinned monstrous humanoid creature.'),

        // undead
        new NPC('Skeleton warrior')
            .setTier(1).setSpeed(4).setSize('M').setType(TYPE.UNDEAD)
            .setRes(6, 0, 0).setAttr(1, 1, 0, 0, 0, 0, 1, 0)
            .putTrait(TRAITS.UNDEATH)
            .putAction(ACTIONS.SHORT_SWORD).putAction(ACTIONS.CLAW)
            .setDesc('Reanimated skeletal remains of a fallen warrion.'),
        new NPC('Skeleton archer')
            .setTier(1).setSpeed(4).setSize('M').setType(TYPE.UNDEAD)
            .setRes(4, 0, 0).setAttr(2, 0, 0, 1, 0, 0, 1, 0)
            .putTrait(TRAITS.UNDEATH)
            .putAction(ACTIONS.BOW).putAction(ACTIONS.CLAW)
            .setDesc('Reanimated skeletal remains of a fallen archer.'),
        new NPC('Zombie')
            .setTier(1).setSpeed(3).setSize('M').setType(TYPE.UNDEAD)
            .setRes(8, 0, 0).setAttr(2, -2, 3, -3, 0, 0, 1, 0)
            .putTrait(TRAITS.UNDEATH)
            .putAction(ACTIONS.CLAW)
            .setDesc('Reanimated rotting corpse, now hungering for living flesh.'),
    ];
}