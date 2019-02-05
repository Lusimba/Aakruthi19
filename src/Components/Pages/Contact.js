import React, {Component} from 'react';
import 'tachyons';
import GoogleMap from '../Gmap/GoogleMap'
import mail from '../../Images/mail.jpg'
import call from '../../Images/call.png'


class Contact extends Component {
    render(){
        return(
            <div className='dib w-100 border-box f3fl w-10 black pb7'>
                <section className ='center w-100-m w-75-l center bg-white o-90 pa2'>
                    <div>
                        <h1 className='black f1 tc'>Contact Us</h1>
                        <div className='dt dt--fixed w-80 center'>
                        <article class="dt-row">
                            <div class="dtc tc w-20 bg-black-10">
                                <img src={mail} className='h3' alt = 'Email'/>
                            </div>
                            <div class="dtc w-80 bg-black-05">
                                <h1 className='f3 pa2'>aakruthi2k19@gmail.com</h1>
                            </div>
                        </article>
                        <article class="dt-row">
                            <div class="dtc tc w-20 bg-black-10">
                                <img src={call} className='h3' alt = 'Phone Number'/>
                            </div>
                            <div class="dtc w-80 bg-black-05">
                                <h1 className='f3 pa2'>
                                    G Venkatesh : 9866112414 <br></br>
                                    M Saicharan : 7075149245</h1>
                            </div>
                        </article>

                        </div>
                        <h1 className='tc f1'>Find us on Google Maps</h1>
                    </div>  
                    
                </section>
                <div className='relative w-100-m w-75-l center pb6'>
                    <GoogleMap className=''/>

                </div>
            </div>
        );
    }
}

export default Contact;