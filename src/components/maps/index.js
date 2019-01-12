import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl'
import {inout} from '../../utils/location'
import FloatButton from './float'
import ModalButton from './modal';
class Maps extends Component {
    state = {
        lat: 0,
        lng: 0,
        mToggle: false
    }
    
    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoieXVzcmlsc2FiaXIiLCJhIjoiY2pvNno0ZWMyMG1lOTNrbzE2Nm51Znd0aiJ9.MZ50LBrfGOEHlBCwuXqLIA'
        
        this.maps = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/dark-v9',
            attributionControl: false,
            center: {
                lat: -6.914744,
                lng: 107.609810
            },
            zoom: 13,
            boxZoom: true
        })
        this.maps.boxZoom.enable()
        
        var markers = new mapboxgl.Marker()
        inout({
            enableHighAccuracy: true,
            timeout: 5000,
            maximunAge: 0
        })
        .then(res => {
            this.maps.setCenter({
                lat: res.coords.latitude,
                lng: res.coords.longitude
            }).zoomTo(16)
            markers.setLngLat({
                lat: res.coords.latitude,
                lng: res.coords.longitude
            }).addTo(this.maps)
        }).catch(err => {
            console.log(err)
        })
    }

    toggle(toggles) {
        this.setState({
            mToggle: toggles
        })
        console.log(this.state.mToggle)
    }

    render() {
        const style = {
            position: 'fixed',
            top: '60px',
            bottom: '0px',
            overflow: 'hidden',
            zIndex: '999',
            width: '100%',
            heigth: '100%'
        };
        
        return (
            <React.Fragment>
                {/* <div className="zoomButton" style={{position: 'relative', zIndex: '9999'}}>
                    <button className="btn btn-danger" onClick={e => {let a = this.maps.getZoom(); this.maps.setZoom(a+1)}} style={{position: 'fixed', right: '60px', top: '60px'}}>+</button>
                    <button className="btn btn-danger" onClick={e => {let a = this.maps.getZoom(); this.maps.setZoom(a-1)}} style={{position: 'fixed', right: '20px', top: '60px'}}>-</button>
                </div> */}
                <div style={style} ref={el => this.mapContainer = el} />
                <FloatButton onToggle={this.toggle.bind(this)}/>
                <ModalButton toggleModal={this.state.mToggle}/>
            </React.Fragment>
        )
    }
}

export default Maps
