import * as React from 'react';

import TimedInput from './TimedInput';
import { OFFERS_URL_GET } from '../config';

class App extends React.Component {
    render() {
        return (
            <div>
                <TimedInput
                    onChange={({ val, name }: any): void => {
                        // console.log('TI', val as number, name as string)
                    }}
                    name="offer_id"
                    time={500}
                    onChangeTimed={({ val, name }: any) => {
                        fetch(`${OFFERS_URL_GET}?${name as string}=${val as number}`).then(res => {
                            return res.json();
                        }).then(res => {
                            // console.log('res 2', res);
                        })
                    }}
                />
            </div>
        );
    }

}

export default App;
