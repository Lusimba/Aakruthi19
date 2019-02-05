import React, {Component} from 'react';
import 'tachyons';
import prasthuthi from '../../Images/paper_present.png'
import poster from '../../Images/poster.png'
import yantra from '../../Images/yantra.png'
import krithi from '../../Images/rover.png'
import trishna from '../../Images/trishna.png'
import shikshana from '../../Images/shikshana.jpg'
import chanakya from '../../Images/chanakya.jpg'
import laghuchitra from '../../Images/reel.png'
import ahladakara from '../../Images/ahladakara.png'
import Medha from '../../Images/medha.png'


class Events extends Component {
    render(){
        return(
            <div className='dib w-100 border-box fl w-100'>
                {/* <section className ='dib pa6 mr3 fl w-14'></section> */}
                <section className ='center w-100-m w-75-l pr2 pl3 pt1 pb2 bg-dark-blue o-90 pa2'>
                    <div className='pb6'>
                        <h1 className='tc'>Events</h1>
                        <article className='dt bg-green black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={prasthuthi} alt = 'paper-presentation'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-top'>
                                <h2 className='tc'>Prasthuthi</h2>
                                <p className='pa2'>
                                PRASTHUTHI IS BACK! The
juxtaposition of a melee of ideas, this paper presentation competition is event for all engineers daring to lend their thoughts a voice</p>
<p>
The atmosphere is a buzz with technical fervour and art! a poster presentation for all vibrant engineers..!!!
</p><p>
Are you surcharged with the versatality of the erudite engineer? then krithi beckons this project presentation event,guaranteed to set the stage for cognizance.
                                </p>
                                
                            </div>
                            {/* <Caller class='dt w-100'/> */}
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-50-l v-top'>
                                <h2 className='tc'>Pradarshana</h2>
                                <p className='pa2'>
                                The atmosphere is a buzz with
technical fervour and art! a poster
presentation for all vibrant
engineers..!!!
                                </p>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={poster} alt = 'pradasharna'/>
                            </div>
                        </article>
                        <article className='dt bg-green black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={krithi} className='h-50-l fr pa3' alt = 'krithi'/>
                            </div>
                            <div className='dt-m w-100-mh-25-m dtc-l w-50-l v-top pa2'>
                                <h2 className='tc'>Krithi</h2>
                                <p className='pa2'>
                                Are you surcharged with the
versatality of the erudite engineer?
then krithi beckons this project
presentation event,guaranteed to set
the stage for cognizance.
                                </p>
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-50-l v-top pa3'>
                                <h2 className='tc'>Trishna</h2>
                                <p className='pa2'>
                                Gear up to tickle your "Quizzotic" bond this technocrat's revelation is to an enigmatic quiz challenge of a life
time.... so be there..
                                </p>
                            </div>
                            <div className='center dt-m w-100-m dtc-l w-40-l'>
                                <img src={trishna} className='h-75-l pl6-l' alt = 'paper-presentation'/>
                            </div>
                        </article>
                        <article className='dt bg-green black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={shikshana} className='fr pr6' alt ='shikshana'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-top'>
                                <h2 className='tc'>Shikshana</h2>
                                <p className='pa2'>
                                What is 5G? What is SDR? all these questions and more will be answered in this classroom with as difference, for AAKRUTHI's prestigious guest lecture_!!

                                </p>
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-50-l v-top'>
                                <h2 className='tc'>Chanakya</h2>
                                <p className='pa2'>
                                It's quiz time!! Floor the audience with spectacular business acumen, as this challenge is a diorama.- You would not want to miss!

                                </p>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={chanakya} className='h-50-l pa3-l' alt = 'chanakya'/>
                            </div>
                        </article>
                        <article className='dt bg-green black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={yantra} className='h-50-l fr pr6-l' alt = 'yantra'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-top'>
                                <h2 className='tc'>Yantra</h2>
                                <p className='pa2'>
                                In this bionic battlefield get ready for hair rising war of the mean machines... An
invigorating robotic event..!!
                                </p>
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-50-l v-top'>
                                <h2 className='tc'>Laghuchitra</h2>
                                <p className='pa2'>
                                Lights? Camera! Action! Are you a film maker with creative ideas.. the laghuchitr
provides you a platform to showcase your talent
                                </p>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={laghuchitra} className='pl6' alt = 'laghuchitra'/>
                            </div>
                        </article>
                        <article className='dt bg-green black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={ahladakara} className='h-25-m h-50-l fr pr6' alt = 'ahladakara'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-top'>
                                <h2 className='tc'>Ahladakara</h2>
                                <p className='pa2'>
                                Got bored being technical geek all the day_ Here comes fun zone with many onspot nontechnical events...
                                </p>
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-50-l v-top'>
                                <h2 className='tc'>Medha</h2>
                                <p className='pa2'>
                                Your favourite programming event is
back with a bang!! The stage is set for
decrypting the ultimate unimaginable
codes of the decade.
                                </p>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={Medha} className='pl6' alt = 'laghuchitra'/>
                            </div>
                        </article>
                        
                    </div>
                </section>
                {/* <section className ='dib m0 mb0 pa5 fl w-15'></section> */}
            </div>
        );
    }
}

export default Events;