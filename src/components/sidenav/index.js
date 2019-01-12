import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class SideNav extends Component {
    render() {
        return (
            <div className="side-nav">
                {/* <div className="brand-side">
                    <i className="fas fa-bars"></i>
                    <span>SEYUPO</span>
                </div> */}
                <div className="wrap-side">
                    <NavLink to="/dashboard/track-location" className="side-item" activeClassName="side-active">
                        <i className="fas fa-map-marked-alt"></i>
                        <span>Track Location</span>
                    </NavLink>
                    <NavLink to="/dashboard/setting" className="side-item" activeClassName="side-active">
                        <i className="fas fa-cogs"></i>
                        <span>Setting</span>
                    </NavLink>
                </div>
            </div>
        )
    }
}
