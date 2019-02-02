import React, { Component } from 'react'
import { connect } from 'react-redux'


import MainRoutes from './routes';
import { check_auth, sign_in, getAllDevices } from './redux/actions';

class App extends Component {
    constructor(props) {
      super(props)
    }

    componentWillMount() {
      this.props.onCheckAuth()
    }

  render() {
    return (
        <MainRoutes {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.userReducers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuth: () => {
      return dispatch(check_auth())
    },
    onUserLogin: (payload) => {
      return dispatch(sign_in(payload))
    },
    onGetDevices: () => {
      return dispatch(getAllDevices())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);