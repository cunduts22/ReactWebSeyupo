import React, { Component } from 'react'

export default class FloatButton extends Component {
    state = {
        toggle: false
    }
    toggleModal() {
        this.setState({
            toggle: !this.state.toggle
        }, () => this.props.onToggle(this.state.toggle))
    }
  render() {
    return (
      <div className="float-button">
        <div className="card">
            <button className="btn btn-danger" onClick={this.toggleModal.bind(this)}>Devices</button>
        </div>
      </div>
    )
  }
}
