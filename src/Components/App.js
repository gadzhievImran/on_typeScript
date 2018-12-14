import * as React from 'react';

import TimedInput from './TimedInput';
import { OFFERS_URL_GET } from '../config';

function App () {
    return (
      <div>
        App
        <TimedInput
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

export default App;
