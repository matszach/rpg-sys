const ATTR_NAMES = ['Strength', 'Agility', 'Fortitude', 'Perception', 'Intellect', 'Charisma', 'Will', 'Magic'];

function toArray(content, generator) {
    let arr = [];
    content.forEach((e, i) => arr.push(generator(e, i)));
    return arr;
}

function times(nof, generator) {
    let arr = [];
    for(let i = 0; i < nof; i++) {
        arr.push(generator(i));
    }
    return arr;
}

function createNewNode() {
    let n = document.createElement('div');
    document.body.appendChild(n);
    return n;
}


class NameSegment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            dots: props.dots
        };
    }

    render() {
        let dotsString = '';
        for(let i = 0; i < parseInt(this.state.dots); i ++) {
            dotsString += '.';
        }
        return (
            <span className='cs-name-segment'>
                <span className='cs-name-segment-title'>{this.state.name}</span>
                <span className='cs-name-segment-dots'>{dotsString}</span>
            </span>
        );
    }
}

class AttributeBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            attrName: props.attrName,
            level: 0,
            bonus: 0,
        };
    }

    render() {
        let level = parseInt(this.state.level || 0);
        let bonus = parseInt(this.state.bonus || 0);
        let sum = level + bonus;
        return (
            <div className='attr-block'>
                <div className='attr-block-name'>{this.state.attrName}</div>
                <div className='attr-block-fillbox'>
                    <p className='attr-block-fillbox-label'>Level</p>
                    <input className='attr-block-fillbox-input' type='number' 
                        value={this.state.level} onChange={e => this.setState({level: e.target.value})}/>
                </div>
                <div className='attr-block-fillbox'>
                    <p className='attr-block-fillbox-label'>Bonus</p>
                    <input className='attr-block-fillbox-input' type='number'    
                        value={this.state.bonus} onChange={e => this.setState({bonus: e.target.value})}/>
                </div>
                <div className='attr-block-fillbox'>
                    <p className='attr-block-fillbox-label'>Passive</p>
                    <input className='attr-block-fillbox-input' type='text' 
                        value={sum > 0 ? '+' + sum : sum} disabled/>
                </div>
                <div className='attr-block-fillbox'>
                    <p className='attr-block-fillbox-label'>Active</p>
                    <input className='attr-block-fillbox-input' type='text'
                        value={10 + sum} disabled/>
                </div>
            </div>
        );
    }
}


class ResourceBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };
    }

    render() {
        return (
            <div className='cs-resource-segment'>
                <p className='resourxe-segment-title'>{this.state.name}</p>
                <hr className='cs-rs-hr'></hr>
                <p className='resourxe-segment-gray-text'>Maximum</p>
                <input className='resourxe-segment-input' type='text' disabled/>
                <hr className='cs-rs-hr'></hr>
                <p className='resourxe-segment-gray-text'>Current</p>
            </div>
        );
    }
}

class CharSheet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='charsheet-body'>
                <div className='name-section'>
                    <NameSegment name='Name' dots='20'/>
                    <NameSegment name='Race' dots='20'/>
                    <NameSegment name='Archetype' dots='20'/>
                    <NameSegment name='Age' dots='7'/>
                    <NameSegment name='Size' dots='7'/>
                    <NameSegment name='Speed' dots='7'/>
                </div>
                <hr className='cs-hr'></hr>
                <div className='stats-section'>
                    <div className='attr-section'>
                        {toArray(ATTR_NAMES, (n, i) => <AttributeBlock attrName={n} key={i}/>)}
                    </div>
                    <ResourceBlock name='HP'/>
                    <ResourceBlock name='SP'/>
                    <ResourceBlock name='MP'/>
                    <div className='cs-equipment-segment'>
                        <p className='resourxe-segment-title'>Equipment</p>
                        <hr className='cs-rs-hr'></hr>
                        <p className='resourxe-segment-gray-text'>Currency</p>
                        <input className='resourxe-segment-input' type='text' disabled/>
                        <hr className='cs-rs-hr'></hr>
                        <p className='resourxe-segment-gray-text'>Items</p>
                        {times(20, i => <div key={i} className='item-div'></div>)}
                    </div>
                </div>
                <div className='cs-traits-segment'>
                    <p className='resourxe-segment-title'>Traits</p>
                    <hr className='cs-rs-hr'></hr>
                    {times(34, i => {
                        return(
                            <div key={i} className='traits-row'>
                                <div className='trait-div'/>
                                <div className='trait-div'/>
                                <div className='trait-div'/>
                            </div>
                        );
                    })}
                </div>
               
            </div>
        );
    }

}

ReactDOM.render(<CharSheet/>, createNewNode());
