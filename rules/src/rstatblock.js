class RStatblock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            npc: props.npc
        };
    }

    render() {
        let n = this.state.npc;
        return (
            <div className='rstatblock'>
                <div>({n.tier}) {n.name}</div>
                <hr className='rstatblock-hr'/>
                <div className='rstatblock-res-row'>
                    Hp: {n.res.hp} Sp: {n.res.sp} Mp: {n.res.mp} | Size: {n.size} | Speed: {n.speed} | Type: {n.type}
                </div>
                <hr className='rstatblock-hr'/>
                <div className='rstatblock-attr-row'>
                    Str: {n.attr.str} ({n.attr.str + 10})
                    Agi: {n.attr.agi} ({n.attr.agi + 10})
                    For: {n.attr.for} ({n.attr.for + 10})
                    Per: {n.attr.per} ({n.attr.per + 10})
                </div>
                <div className='rstatblock-attr-row'>
                    Int: {n.attr.int} ({n.attr.int + 10})
                    Cha: {n.attr.cha} ({n.attr.cha + 10})
                    Wil: {n.attr.wil} ({n.attr.wil + 10})
                    Mag: {n.attr.mag} ({n.attr.mag + 10})
                </div>
                <hr className='rstatblock-hr'/>
                <div>
                    <p>Traits</p>
                    {toArray(n.traits, (t, i) => {
                        return <div key={i}>&bull; {t.name} - {t.desc}</div>
                    })}
                </div>
                <hr className='rstatblock-hr'/>
                <div>
                    <p>Actions</p>
                    {toArray(n.actions, (a, i) => {
                        return <div key={i}>&bull; {a.name} - {a.desc} ({a.usageTime}) {a.cost ? <span>({a.cost})</span> : ''}</div>
                    })}
                </div>
                <hr className='rstatblock-hr'/>     
                <div><i>{n.desc}</i></div>
            </div>
        );
    }
}


class RStatblockSet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            npcs: props.npcs
        };
    }

    render() {
        return <div>{toArray(this.state.npcs, (n, i) => <RStatblock npc={n} key={i}/>)}</div>;
    }
}
