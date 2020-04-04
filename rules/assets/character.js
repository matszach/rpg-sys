
function getNewCharacteInfo() {
    return (
        `A brand new character begins with 4 attribute points to allocate between their 8 attributes. 
        The initial value of an attribute is 0, can be lowered to no less than -1 and can be raised no higher than (initially) 2. 
        Example attribute array for a brand new character could look like this: [2, 2, 1, 1, 0, 0, -1, -1]. 
        The character also recieves 10 EXP that can be spent on skills, spells and abilities. 
        It is recomended that 3 (or at lest 2) of those are spent on a Speak Language(any) skill.`
    );
}

function getRacesAndClassesInfo() {
    return (
        `This system doesn\'t feature classes or races (although those can be implemented by, for example, 
        requiring all \"elf\" players to put at least 1 EXP in Spot and Use weapon(Bow) skills 
        and all \"druid\" players to put at least 2 EXP in Knowledge(Nature) skill).`
    );
}

function getSizeAndSpeedInfo() {
    return (
        `Character default Speed is 5. Size is mostly descriptory, but may be used by the GM to make certain rulings 
        (eg. \"Only Small characters can fit through that openings\", 
        \"Only a Medium or larger creature can attempt to wield this huge warhammer\", 
        \"This rope bridge will very likely collapse under the orge, as it is a Large creature\", 
        \"You Medium sized knight cannot arm-wrestle the Giant sized titan\").`
    );
}

function getCharacterProgressionInfo() {
    return (
        `As your character slays monsters, completes missions, explored, studies the GM will award you EXP. 
        You should keep record of the total EXP you have been awarded and spent as your attribute level progression is tied to those.`
    );
}

function getCharacterProgression() {
    let prg = new RTableContent() .setHeaders('EXP', 'Attribute points to spend', 'Max attribute level');
    for(let i = 0; i < 18; i++) {
        let expMin = i * 5 + 10;
        let expMax = expMin + 4;
        let toSpend = 4 + i;
        let maxAtt = parseInt(2 + i / 3);
        prg.addRecord(`${expMin} - ${expMax}`, `${toSpend}`, `${maxAtt < 6 ? maxAtt : 5}`);
    }
    return prg.orderBy(0);
}