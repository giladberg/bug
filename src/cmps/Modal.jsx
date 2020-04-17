import React, { Component } from 'react'

import eventBusService from "../services/eventBusService";
export default class Modal extends Component {
    state = { type: '', txt: '' }
    eventKiller = null;
    componentDidMount() {
        this.eventKiller = eventBusService.on('modal', (msg) => {
            console.log('aa')
            this.setState({ type: msg.type, txt: msg.txt })
            setTimeout(() => {
                this.setState({ type: '', txt: '' })
            }, 5000)
        })
    }
    componentWillUnmount() {
        this.eventKiller && this.eventKiller();
    }
    render() {
        let style = { display: this.state.type ? 'block' : 'none' }
        return (
            <div style={style} className={`modal ${this.state.type}`}>
                {this.state.txt}
            </div>
        )
    }
}
