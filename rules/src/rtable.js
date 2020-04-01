function toArray(content, generator) {
    let arr = [];
    content.forEach((e, i) => arr.push(generator(e, i)));
    return arr;
}

class RTableContent {

    constructor() {
        this.headers = [];
        this.orderByFlags = [];
        this.records = [];
    }

    setHeaders(...headers) {
        this.headers = headers;
        this.orderByFlags = new Int8Array(headers.length);
        return this;
    }

    addRecord(...fields) {
        this.records.push(fields);
        return this;
    }

    addRecords(...records) {
        records.forEach(r => {
            this.addRecord(...r);
        });
        return this;
    }

    _setOrderFlags(index, newValue) {
        this.orderByFlags.forEach((v, i) => this.orderByFlags[i] = 0);
        this.orderByFlags[index] = newValue;
    }

    orderBy(index) {
        if(this.orderByFlags[index] === 1) {
            this._setOrderFlags(index, -1); 
            this.records = this.records.sort((o1, o2) => o2[index].localeCompare(o1[index]));
        } else {
            this._setOrderFlags(index, 1);
            this.records = this.records.sort((o1, o2) => o1[index].localeCompare(o2[index]));
        }
        return this;
    }
}

class RTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
        };
    }

    orderBy(index) {
        this.setState({
            content: this.state.content.orderBy(index)
        });
    }

    _getHeaderOrderSymbol(state) {
        switch(state) {
            case  1: return ' \u25BC';
            case -1: return ' \u25B2';
            default: return '';
        }
    }

    render() {
        let headers = toArray(this.state.content.headers, (headerName, i) => {
            let symbol = this._getHeaderOrderSymbol(this.state.content.orderByFlags[i]);
            return <th key={i} onClick={() => this.orderBy(i)}>{headerName}{symbol}</th>;
        });
        let records = toArray(this.state.content.records, (record, i) => {
            let fields = toArray(record, (field, j) => <td key={j}>{field}</td>);
            return <tr key={i}>{fields}</tr>;
        });
        console.log(records.length); // DEBUG
        return (
            <table className='rtable'>
                <thead><tr>{headers}</tr></thead>
                <tbody>{records}</tbody>
            </table>
        );
    }
}

