import React, {Component} from 'react';
import 'tachyons';

class Caller extends Component {
    render(){
        return(
            <contact className='dt center w-100'>
                <a href='https://forms.google.com'><h5 className='dtc tc bg-gold w-20 center red br3 underline pa2'>Register for this event</h5></a>
                <div className='dtc'>
                    <h5 className='tc'>Firstnames Lastname</h5>
                    <h5 className='tc'>8179 000 000</h5>
                </div>
                <div className='dtc'>
                    <h5 className='tc'>anymail@anymail.com</h5>
                </div>
            </contact>
        );
    }
}

export default Caller;

