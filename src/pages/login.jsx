import React, { Component } from 'react'

export default class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       payload: {},
       loading: true
    }
  }
  
  sendForm(e) {
    e.preventDefault()
    const username = e.target['username'].value,
    password = e.target['pwd'].value
    this.props.onUserLogin({username,password})
  }

  componentWillReceiveProps(props) {
    if (!!props.auth) {
      this.props.history.push('/dashboard/track-location')
    }
  }

  componentDidMount() {
    if(this.props.auth) {
      this.props.history.replace('/')
    }

    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 500)
  }

  render() {
      return (
        <div className="login" onSubmit={this.sendForm.bind(this)}>
          {
            this.state.loading ?
            <div className="center-position display-4 text-center">Loading</div>
            :
            <div className="card darken center-position">
                <h1 className="display-3 text-center">Login</h1>
                <form className="form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="pwd" className="form-control" />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-dark">Login</button>
                  </div>
                </form>
            </div>
          }
        </div>
      )
  }
}
