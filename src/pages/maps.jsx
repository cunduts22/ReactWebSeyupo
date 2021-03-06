import React, { Component } from 'react'
import Maps from '../components/maps'

export default class MapsViews extends Component {

  componentDidMount() {
    this.props.onGetDevices()
  }

  render() {
    return (
      <div className="full">
        <Maps {...this.props}></Maps>
      </div>
    )
  }
}