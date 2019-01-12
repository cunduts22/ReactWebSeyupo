import React, { Component } from 'react'
import { connect } from 'react-redux'


import MainRoutes from './routes';
import { check_auth, sign_in } from './redux/actions';

class App extends Component {
    constructor(props) {
      super(props)
    }

    componentWillMount() {
      this.props.onCheckAuth()
    }

    componentWillReceiveProps(props) {
      console.log(props);
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);