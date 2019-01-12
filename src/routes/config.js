import React from 'react'
import { Route } from 'react-router-dom'
import MapsViews from '../pages/maps';
import Login from '../pages/login';
import SettingViews from '../pages/setting';
import { checkAuthenticated } from '../utils/auth';
import Landing from '../pages/landing';

export const routes = [
    {
        path: '/',
        component: checkAuthenticated(MapsViews),
        exact: true
    },
    {
        path: '/dashboard/track-location',
        component: checkAuthenticated(MapsViews),
    },
    {
        path: '/dashboard/setting',
        component: checkAuthenticated(SettingViews)
    },
    {
        path: '/landing',
        component: Landing
    },
    {
        path: '/login',
        component: Login
    }
]

export const MRouters = (route) => {
    return (
        <Route 
            exact={route.exact ? route.exact : false}
            path={route.path}
            render={props => {
                return (
                    <route.component 
                        {...props}
                        {...route}
                        {...route.props}
                        routes={route.routes}
                    />
                )
            }}
        />
    )
}