import React, { Component } from 'react'
import {socket} from '../../utils/socket'
import { CardDevice } from './card.device';
import { LoadingProgress } from './loading'


export default class ModalButton extends Component {
  constructor(props) {
    super(props)
  
    this.state = { 
      loading: false,
      uniqueId: '',
      status: false,
      lock: false,
      devices: []
    };
    this.socket = props.socket;
  };
  

  componentDidMount() {
    this.socket.on('conn-device-'+localStorage.getItem('userId'), (data) => {
      const {uniqueId, status} = data
      console.log(data)
      this.setState({uniqueId,status})
    });
    this.socket.on('conn-device-' + localStorage.getItem('userId') + '-now-status', data => {
      this.setState({
        lock: data.lock,
        loading: !data.lock
      })
    });
    this.props.onGetDevices()
  }

  lockDev(toggle) {
    this.socket.emit('track-device', {
      userId: localStorage.getItem("userId")
    })
    this.socket.emit("testerong", { userId: localStorage.getItem("userId")})
    this.setState({lock: true})
  }

  unlock(toggle) {
    this.socket.emit('untrack-device', {userId: localStorage.getItem('userId')})
    this.setState({ lock: false })
  }

  componentWillReceiveProps(props) {
    this.setState({
      devices: props.devices
    })
  }

  render() {

    const renderDevices = () => {
      return this.props.devices.map((v, i) => {
        return (
          <div key={i} className="col-md">
            {
              <CardDevice
                key={v.uniqueId}
                name={v.uniqueId}
                imageUrl={"https://cdn1.iconfinder.com/data/icons/screen-1/640/iphone6s-black-fixed-512.png"}
                status={v.uniqueId === this.state.uniqueId ? this.state.status : false}
                lockStatus={this.state.lock}
                lockDevice={this.lockDev.bind(this)}
                unlockDevice={this.unlock.bind(this)}
              />
            }
          </div>
        )
      })
    }

    return (
      <React.Fragment>
        <div className={`m-modal center-position${this.props.toggleModal ? ' s-modal' : ' h-modal'}`}>
          <div className="container">
              <div className="text-center">
                <p className="lead text-center">Select Your Device</p>
              </div>
                {
                  this.state.selectDevice !== '' || this.state.selectDevice !== null ? 
                  <div className="row">
                    {renderDevices()}
                  </div>
                  :
                  null
                }
          </div>
        </div>
      </React.Fragment>
    )
  }
}
