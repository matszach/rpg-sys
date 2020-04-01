class RParagraph extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            content: props.content
        };
    }

    render() {
        return (
            <div className='rparagraph'>
                <div className='rparagraph-top'>
                    <p className='rparagraph-title'>{this.state.title}</p>
                </div>
                <div className='rparagraph-bottom'>
                    <p className='rparagraph-content'>{this.state.content}</p>
                </div>
            </div>
        );
    }
}