import React from 'react';
import './SearchBar.css'
import { connect } from 'react-redux';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchResults: []
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        let term = this.props.inputValue;
        fetch(`https://hn.algolia.com/api/v1/search?query=${term}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => this.setState({ searchResults: data.hits }));
    }

    render() {
        const searchedResults = this.state.searchResults.map((result, i) => {
            return <div key={i}><span className="author">{result.author}</span>
                <p className="title">{result.title}</p>
                <span className="url">{result.url}</span></div>
        })
        return <>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input value={this.props.inputValue} onChange={this.props.inputChange} type="text"></input>
                    <button className="button" type="submit">search</button>
                </form>
            </div>
            <h1>Results</h1>
            <div>{searchedResults}</div>
        </>
    }
}

const mapStateToProps = state => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        inputChange: (e) => {
            const action = { type: 'INPUT_CHANGE', text: e.target.value };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);