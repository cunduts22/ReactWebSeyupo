import React, { Component } from 'react'

export default class FloatButton extends Component {
    state = {
        toggle: false
    }
    toggleModal() {
        // const toggle = false
        this.setState({
            toggle: !this.state.toggle
        }, () => this.props.onToggle(this.state.toggle))
        // this.props.onToggle = !toggle
    }
  render() {
    return (
      <div className="float-button">
        <div className="card">
            <button className="btn btn-danger" onClick={this.toggleModal.bind(this)}>Track Location</button>
            <button className="btn btn-success">Alarm</button>
        </div>
      </div>
    )
  }
}
