import React from 'react';
import { withRouter } from 'react-router-dom'
import NavBar from '../components/navbar';

export const checkAuthenticated = (Component) => {
    return (withRouter(class AuthWrapped extends React.Component {
        render() {
            // console.log(this.props)
            if(this.props.auth) {
                return (
                    <NavBar {...this.props}>
                        <Component {...this.props}/>
                    </NavBar>
                )
            } else {
                this.props.history.replace('/login')
                return null
            }
        }
    })
)}

