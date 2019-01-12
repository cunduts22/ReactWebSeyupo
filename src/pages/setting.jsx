import React, { Component } from 'react'

import {socket} from '../utils/socket'
import UUID from 'uuid'

export default class SettingViews extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      selected: {},
      response: {},
      location: {},
      device: {},
      time: 0
    }
    this.socket = socket()
  }

  componentWillMount() {
    this.setState({time: UUID.v4()})
    
  }

  componentDidMount() {
    this.socket.on("track", (data) => {
      console.log(data)
    })

    this.socket.on('all-users', (data) => {
      console.log(data)
      this.setState({data})
    })

    this.socket.on('select-user', (selected) => {
      this.setState({ selected })
    })

    this.socket.on('getTrack', (location) => {
      this.setState({location})
    })
    this.socket.on('track device', (device) => {
	    console.log("device : "+device);
      this.setState({device})
    })
  }

  render() {

    const option = this.state.data.map((v, i) => {
      return (
        <option key={i} value={JSON.stringify(v)}>{v.device}</option>
      )
    })

    return <React.Fragment>
        <div className="text-center">
          <p className="lead text-center">Track Location</p>
          <p className="lead text-center">{this.state.data.length > 0 ? this.state.data.length + " connection" : "No Connection"}</p>
          <select name="device" id="device" onChange={e => {
            if (!(e.target.value === "")) {
              const selected = JSON.parse(e.target.value);
              this.socket.emit('select-user', selected).on(
                "select-user", data => {
                  this.setState({selected: data})
                }
              );
            } else {
              this.setState({selected: {}})
            }
            }}>
            <option value="">Select Device</option>
            {option}
          </select>
          {
            this.state.selected.name === undefined ? null : 
            <div className="row justify-content-center">
              <div className="card darken text-center" style={{ width: "50%", marginTop: "20px", padding: "10px" }}>
                <div className="row">
                  <div className="col-6">Name</div>
                  <div className="col-6">{this.state.selected.name}</div>
                </div>
                <div className="row">
                  <div className="col-6">Device</div>
                  <div className="col-6">{this.state.selected.device}</div>
                </div>
                <div className="row">
                  <div className="col-6">Status</div>
                  <div className="col-6">
                    {
                      this.state.selected.status === "1"
                      ? "active"
                      : "deactive"
                    }
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <button className="btn btn-danger" onClick={(e) => {
                          if (this.state.selected.name) {
                            this.socket.emit('track', {
                              id: this.state.selected.id,
                              status: this.state.selected.status === "1" ? "0" : "1"
                            })
                            return
                          } else {
                            window.alert("Please select device to track")
                            return
                          }
                    }}>
                    {
                      this.state.selected.status === "1" ?
                      "Deactive"
                      :
                      "Active"
                    }
                    </button>
                  </div>
                </div>
              </div>
            </div>
          }
          {
            this.state.device.fallback ? 
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary">{this.state.device.fallback}</li>
            </ul>
            :
            null
          }
        </div>
      </React.Fragment>;
  }
}
