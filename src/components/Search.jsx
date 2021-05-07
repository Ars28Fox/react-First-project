import React from 'react'

class Search extends React.Component {
    state = {
        search: '',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchingMovies(this.state.search);
        }
    }

    render() {
        return <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        placeholder="Search"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) => this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn search-btn" onClick={() => this.props.searchingMovies(this.state.search)}>Search</button>
                </div>
            </div>
        </div>
    }
}

export { Search }