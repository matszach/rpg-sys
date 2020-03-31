function createNewNode() {
    let n = document.createElement('div');
    document.body.appendChild(n);
    return n;
}

function renderNewSection(title, jsx) {
    ReactDOM.render(<RSection title={title} innerJSX={jsx} />, createNewNode());
}

renderNewSection('Attributes', <RTable content={getAttributes()} />);
renderNewSection('Weapons', <RTable content={getWeapons()} />);
renderNewSection('Skills', 
    <div>
        <RParagraph title='What are skills?' content={getSkillsInfo()} />
        <RParagraph title='Language skills *' content={getSkillsLanguagesInfo()} />
        <RParagraph title='Weapon skills **' content={getSkillsWeaponsInfo()} />
        <RTable content={getSkills()}/>
    </div>
);
renderNewSection('Abilities', <RTable content={getAbilities()} />);
renderNewSection('Spells', <RTable content={getSpells()} />);
renderNewSection('NPCs', <RStatblockSet npcs={getNpcs()} />);








