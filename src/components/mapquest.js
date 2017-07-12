import React, { Component } from 'react';
import '../lib/mapquest-js';
import '../lib/mapquest-js.css';

class MapQuest extends Component {

  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    const mapStyle = {
      height: this.state.height,
      width: this.state.width
    };
    return (
      <div id="map" style={mapStyle}>
        <p style={{textAlign: 'center'}}>Map loading...</p>
      </div>
    );
  }

  componentDidMount() {
    L.mapquest.key = this.state.apiKey;

    L.mapquest.map('map', {
      center: this.state.center,
      layers: L.mapquest.tileLayer(this.state.baseLayer),
      zoom: this.state.zoom
    });
  }
}

export default MapQuest
