function createNewNode() {
    let n = document.createElement('div');
    document.body.appendChild(n);
    return n;
}

function renderNewSection(title, jsx) {
    ReactDOM.render(<RSection title={title} innerJSX={jsx} />, createNewNode());
}

renderNewSection('Foreword', 
    <div>
        <RParagraph title='' content={''} />
    </div>
);

renderNewSection('Characters', 
    <div>
        <RParagraph title='New characters' content={getNewCharacteInfo()} />
        <a href="./../charsheet.pdf" download>Get the character sheet here</a>
        <RParagraph title='No races or classes?' content={getRacesAndClassesInfo()} />
        <RParagraph title='Size and Speed' content={getSizeAndSpeedInfo()} />
        <RParagraph title='Progression' content={getCharacterProgressionInfo()} />
        <RTable content={getCharacterProgression()} />
    </div>
);

renderNewSection('Attributes', <RTable content={getAttributes()} />);
renderNewSection('Skills', 
    <div>
        <RParagraph title='What are skills?' content={getSkillsInfo()} />
        <RParagraph title='Language skills *' content={getSkillsLanguagesInfo()} />
        <RParagraph title='Weapon skills **' content={getSkillsWeaponsInfo()} />
        <RParagraph title='Favoured enemy ***' content={getSkillsFavouredEnemyInfo()} />
        <RTable content={getSkills()}/>
    </div>
);
renderNewSection('Abilities', <RTable content={getAbilities()} />);
renderNewSection('Spells', 
    <div>
        <RParagraph title='What are spells?' content={getSpellsInfo()} />
        <RParagraph title='Casting spells' content={getSpellCastingInfo()} />
        <RTable content={getSpells()} />
    </div>);
renderNewSection('Equipment',
    <div>
        <RParagraph title='Weapons' content={''} />
        <RTable content={getWeapons()} />     
        <RParagraph title='Armor' content={''} />
        <RTable content={getArmor()} />
        <RParagraph title='Generic items' content={'TBA'} />
        <RParagraph title='Services' content={'TBA'} />
        <RParagraph title='Animals' content={'TBA'} />
        <RParagraph title='Magic items' content={'TBA'} />
        <RParagraph title='Potions and elixirs' content={'TBA'} />
        <RParagraph title='Spell scrolls' content={'TBA'} />
        <RParagraph title='Runes' content={'TBA'} />
        <RParagraph title='Poisons' content={'TBA'} />
    </div>
);
renderNewSection('NPCs', <RStatblockSet npcs={getNpcs()} />);
renderNewSection('Adventuring', 
    <div>
        <RParagraph title='Travel' content={getTravellingRules()} />
        <RParagraph title='Resting' content={getRestRules()} />
        <RParagraph title='Awarding EXP' content={''} />
    </div>
);
renderNewSection('Combat', 
    <div>
        <RParagraph title='Initiating combat' content={''} />
        <RParagraph title='Actions in combat' content={''} />
        <RParagraph title='Damage and death' content={''} />
    </div>
);










