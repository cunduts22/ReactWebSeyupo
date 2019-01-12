import React, { Component } from 'react'
import SideNav from '../sidenav'
export default class NavBar extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      droptodown: false
    }
  }
  

  toggleDrop() {
    this.setState({
      droptodown: !this.state.droptodown
    })
  }

  handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    window.location.reload()
  }

  render() {
    return (
      <React.Fragment>
        <div className="m-navbar">
          <div className="title-bar">SEYUPO</div>
          <div className="wrap-nav">
              <div className="m-nav" onClick={this.toggleDrop.bind(this)}>
                  <span>John Doe</span>
                  <img src="https://cdn4.iconfinder.com/data/icons/green-shopper/1068/user.png" alt="" className="img-circle"/>
              </div>
          </div>
        </div>
        {
          this.state.droptodown ?
          <div className="droptodown">
            <a href="javascript:void(0)" className="dropdown-item">Profile</a>
            <hr/>
            <a href="javascript:void(0)" className="dropdown-item" onClick={this.handleLogout.bind(this)}>Logout</a>
          </div>
          :
          null
        }
        <SideNav />
        {this.props.children}
      </React.Fragment>
    )
  }
}
