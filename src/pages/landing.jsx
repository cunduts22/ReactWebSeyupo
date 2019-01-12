import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import HeadLanding from '../components/landing/head'
import BodyLanding from "../components/landing/body";
import FootLanding from "../components/landing/foot";


export default class Landing extends Component {
  render() {
    return (
      <React.Fragment>
          <div className="m-navbar">
            <div className="title-bar">SEYUPO</div>
            <div className="wrap-nav">
                <div className="n-nav">
                    <Link to="/login" className="btn btn-danger">SIGN IN</Link>
                    <Link to="/register" className="btn btn-danger">SIGN UP</Link>
                </div>
            </div>
          </div>
          <HeadLanding></HeadLanding>
          <BodyLanding></BodyLanding>
          <FootLanding></FootLanding>
      </React.Fragment>
    )
  }
}
