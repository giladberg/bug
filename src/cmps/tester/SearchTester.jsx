import React, { Component } from 'react'


export default class SearchTester extends Component {
    state = { searchBy: { name: '' } }
    onChangeInput = (ev) => {
        const field = ev.target.name;
        const value = ev.target.value;

        this.setState(prevState => ({
            searchBy: {
                ...prevState.searchBy,
                [field]: value
            }
        }))
    }
    handleKeyPress = (target) => {
        if (target.charCode === 13) this.onSearchTester()
    }
    onSearchTester = () => {
        const searchBy = { ...this.state.searchBy }
        searchBy.name = ''
        this.setState({ searchBy })
        this.props.onSearchTester(this.state.searchBy.name.toLocaleLowerCase())

    }
    isValidName = () => {
        if (!this.state.searchBy.name) return false
        const isOnlyLetters = /^[a-zA-Z]+$/.test(this.state.searchBy.name) ? true : false
        return this.state.searchBy.name.length >= 2 &&
            this.state.searchBy.name.length <= 12 && isOnlyLetters
    }
    render() {
        const isvalidName = (!this.isValidName()) ? 'input-danger' : 'input-success'
        return (
            <div className="search-tester flex align-center justify-space-between">
                <input
                    onKeyPress={this.handleKeyPress}
                    className={`${isvalidName}`}
                    onChange={this.onChangeInput}
                    name="name"
                    placeholder="Enter the tester name"
                    type="text"
                    value={this.state.searchBy.name}
                ></input>
                <button
                    className="black-btn"
                    onClick={this.onSearchTester}
                    disabled={!this.isValidName()}
                >Fetch</button>
            </div>
        )
    }
}
