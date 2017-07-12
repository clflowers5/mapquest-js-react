import React, { Component } from 'react';
import MapQuest from './mapquest';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>MapQuest JS as a React Component</h1>
        <MapQuest
          height={500}
          width={1000}
          center={[37.7749, -122.4194]}
          baseLayer={'dark'}
          zoom={12}
          apiKey={''}
        />
      </div>
    );
  }
}
