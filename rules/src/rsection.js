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

    renderToggler() {
        return (
            <button className='rsection-collapse-button' onClick={() => this.toggle()}>
                {this.state.collapsed ? '+' : '-'}
            </button>
        );
    }

    render() {
        return (
            <div className='rsection'>
                <div className='rsection-top'>
                    {this.renderToggler()}
                    <label className='rsection-title'>{this.state.title}</label>
                </div>
                <div className='rsection-bottom'>
                    {this.state.collapsed ? '' : (
                        <div>
                            <div className='rsection-padded'>{this.state.innerJSX}</div>
                            {this.renderToggler()}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}