import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        term: '',
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmitForm(this.state.term)
    }
    // onInputChange(event) {
    //     console.log(event.target.value);

    // }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className="field">
                        <label htmlFor="img-search">Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => { this.setState({ term: e.target.value }) }} name="img-search" />
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar