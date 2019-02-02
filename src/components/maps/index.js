import React, { Component } from 'react'
import mapboxgl, {} from 'mapbox-gl'
import {inout} from '../../utils/location'
import FloatButton from './float'
import ModalButton from './modal';
import { socket } from '../../utils/socket';
class Maps extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          lat: 0,
          lng: 0,
          mToggle: false
      }
      this.socket = socket()
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
            timeout: 20000,
            maximunAge: 10000
        })
        .then(res => {
            this.maps.setCenter({
                lat: res.coords.latitude,
                lng: res.coords.longitude
            }).zoomTo(13)
            markers.setLngLat({
                lat: res.coords.latitude,
                lng: res.coords.longitude
            }).addTo(this.maps)
        }).catch(err => {
            console.log(err)
        });

        var mark = new mapboxgl.Marker()
        this.socket.on("track-device-result-"+localStorage.getItem("userId"), data => {
            console.log(data)
            this.maps.setCenter({
                lat: data.latitude,
                lng: data.longitude
            })
            mark.setLngLat({
                lat: parseFloat(data.latitude),
                lng: parseFloat(data.longitude)
            }).addTo(this.maps)
        })
    }

    toggle(toggles) {
        this.setState({
            mToggle: toggles
        })
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
                
                <div style={style} ref={el => this.mapContainer = el} />
                <FloatButton onToggle={this.toggle.bind(this)}/>
                <ModalButton socket={this.socket} toggleModal={this.state.mToggle} {...this.props}/>
            </React.Fragment>
        )
    }
}

export default Maps
