function getRestRules() {
    return (
        `Resting allows you to restore your spend resources (HP, SP, MP). 
        For every 2 hours spend resting you roll a die, a size of which is determined by the conditions of your rest, 
        and restore that many resource points. You choose what resource to restore, but the SP must be regained fully before any HP or MP are restored. 
        The dice rolled are; d4 for poor rest condintions (eg. camping in the woods), d6 for moderate (eg. a tawern room) and d8 for luxurious (eg. a palace). 
        You cannot benefit from more than 8 hours of rest each day.`
    );
}

function getTravellingRules() {
    return (
        `Traveling long distances takes a toll on your resources. 
        For each 2 full hours travelled you lose 1 SP. Travelling in hostile conditions (eg. freezing weather, desert) doubles the SP cost.`
    );  
}