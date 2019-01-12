import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { routes, MRouters } from './config'

class MainRoutes extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Switch>

                        {
                            routes.map((route, i) => (
                                <MRouters
                                    key={i}
                                    {...route}
                                    {...this.props}
                                />
                            ))
                        }
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}


export default MainRoutes