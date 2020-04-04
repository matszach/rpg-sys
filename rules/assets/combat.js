function getInitiatingCombatInfo() {
    return (
        `Before a fight starts a GM must decide which side gets to act first. 
        In an ambush the ambushing side usually goes first. In an open battle a coin toss is the most appropriate.
        Once the order is decided both sides exchange turns until the fight is over. 
        During a turn all members of a side act simultaneously.`
    );
}

function getActionsInCombat() {
    return (
        <div>
            <p>During a combat turn you may:</p>
            <br/>
            <p>&bull; Move up to your Speed</p>
            <div className='insetDiv'>
                You may move a number of metres ("fields"/"squares") equal to your speed.
                Crawling, swimming, climbing or moving through difficult terrain (eg. tall grass) 
                Reduces your speed by half (rouded up).
            </div>
            <p>&bull; Perform an Action move</p>
            <div className='insetDiv'>
                <p>Examples of an Action move:</p>
                <p>&bull; weapon attack</p>
                <p>&bull; defend (increase your Agility by 2 until the start of the next turn)</p>
                <p>&bull; ability with a usage time of Action</p>
                <p>&bull; spell with casting time of Action</p>
                <p>&bull; a second instance of an Instant move</p>
                <p>&bull; other moves that the GM judges should require an Action</p>
            </div>
            <p>&bull; Perform any number of Instant moves</p>
            <div className='insetDiv'>
                <p>Examples of an Instant move:</p>
                <p>&bull; draw a weapon / retrieve an item from backpack</p>
                <p>&bull; interact with anvironment (push a button, open a door)</p>
                <p>&bull; speak a sentence</p>
                <p>&bull; attempt to break an ongoing effect that you are aware of (eg. resist a slowing spell)</p>
                <p>&bull; ability with a usage time of Instant</p>
                <p>&bull; spell with casting time of Instant</p>
                <p>You cannot make 2 instances of the same Instant move in a single turn.</p>
            </div>
        </div>
    );
}