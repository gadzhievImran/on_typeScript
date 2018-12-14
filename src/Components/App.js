import React, { Component } from 'react';

import TI from './TI';
import Ttt from './ttt';
import { OFFERS_URL_GET } from '../config';

class App extends Component {
  render() {
    return (
      <div>
        <Ttt

        />
        App
        <TI
            onChange={({ val, name }) => console.log('TI', val, name)}
            name="offer_id"
            time={500}
            onChangeTimed={({ val, name }) => {
              fetch(`${OFFERS_URL_GET}?${name}=${val}`).then(res => {
                return res.json();
              }).then(res => {
                console.log('res 2', res);
              })
            }}
        />
      </div>
    );
  }
}

export default App;
