import React, { Component } from 'react'

import eventBusService from "../services/eventBusService.js";
import testerService from '../services/testerService'
import SearchTester from '../cmps/tester/SearchTester'
import TesterList from '../cmps/tester/TesterList'

export default class Home extends Component {
    state = { testers: [], sortBy:'firstName' }
    componentDidMount() {
        this.loadTesters()
    }
    loadTesters = async () => {
        const testers = await testerService.getTesters(this.state.sortBy)
        this.setState({ testers })
    }
    onSearchTester = async (testerName) => {
        const isSuccessed = await testerService.searchTester(testerName)
        console.log(isSuccessed)
        if(!isSuccessed){
            eventBusService.emit('modal', {type:'danger',txt:'Temporary error occurred, please try again later'});
        }else{
            this.loadTesters()
        }  
    }
    onSetSortBy=(sortBy)=>{
        this.setState({sortBy},this.loadTesters)
    }
    render() {
        return (
            <div className="container flex column align-center">
                <h1 className="title">Search Bugs</h1>
                <SearchTester onSearchTester={this.onSearchTester} />
                <TesterList 
                onSetSortBy={this.onSetSortBy}
                testers={this.state.testers}/>
            </div>
        )
    }
}
