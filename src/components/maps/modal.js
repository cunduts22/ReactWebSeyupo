import React, { Component } from 'react'
import {socket} from '../../utils/socket'
import { CardDevice } from './card.device';
import { LoadingProgress } from './loading';
export default class ModalButton extends Component {
  state = {
    device: [
      {
        name: "Samsung", 
        imageUrl: "http://pluspng.com/img-png/android-call-galaxy-korea-mobile-phone-samsung-icon-icon-512.png",
        status: false
      },
      {
        name: "Oppo",
        imageUrl: "https://www.gizbot.com/img/400x80/img/gadget-finder/original/2016/10/oppo-r9s-price-in-india_14766841260.png",
        status: false
      },
      {
        name: "Vivo",
        imageUrl: "http://mohitelectrovision.com/wp-content/uploads/2018/09/mobile.png",
        status: false
      },
      {
        name: "Xiaomi",
        imageUrl: "http://www.stickpng.com/assets/images/58adef56e612507e27bd3c26.png",
        status: true
      },
      {
        name: "Huawei",
        imageUrl: "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p10/p10-listimage-black.png",
        status: false
      }
    ],
    loading: false
  }

  componentDidMount() {
    socket().emit('data', "tester rong");
  }

  tracker(toggle) {
    this.setState({
      loading: toggle
    })
  }

  render() {
    const MDevice = this.state.device.map((v,i) => {
      return (
        <div key={i} className="col-md">
          {
            <CardDevice 
              name={v.name} 
              imageUrl={v.imageUrl} 
              status={v.status}
              trackDevice={this.tracker.bind(this)}
            />
          }
        </div>
      )
    })

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
                    {MDevice}
                  </div>
                  :
                  null
                }
          </div>
        </div>
        <LoadingProgress loading={this.state.loading}/>
      </React.Fragment>
    )
  }
}
