class RSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            innerJSX: props.innerJSX,
            collapsed: true
        };
    }

    toggle() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <div className='rsection'>
                <div className='rsection-top'>
                    <button className='rsection-collapse-button' onClick={() => this.toggle()}>
                        {this.state.collapsed ? '+' : '-'}
                    </button>
                    <label className='rsection-title'>
                        {this.state.title}
                    </label>
                </div>
                <div className='rsection-bottom'>
                    {this.state.collapsed ? '' : <div className='rsection-padded'>{this.state.innerJSX}</div>}
                </div>
            </div>
        );
    }
}