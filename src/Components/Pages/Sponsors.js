import React, {Component} from 'react';
import 'tachyons';
import telanganatourism from '../../Images/tt1.jpg'
import amd from '../../Images/amd.jpg'
import ace from '../../Images/ace.jpg'
import amp from '../../Images/amp.png'
import bribbon from '../../Images/blue logo.png'
import apoorva from '../../Images/apoorva.jpg'
import princeton from '../../Images/theprinceton.png'
import capgemini from '../../Images/Cap-Gemin.jpg'
import microcare from '../../Images/microcare.jpg'
import synchro from '../../Images/synchro.jpg'
import lexicon from '../../Images/lexicon.png'
import hdfc from '../../Images/HDFC.png'
import jamboree from '../../Images/jamboree-admissions-cell-500x500.jpg'
import gtree from '../../Images/gtree.jpg'
import slv from '../../Images/slv.png'
import physitech from '../../Images/physitech-electronics-120x120.png'


class Sponsors extends Component {
    render(){
        return(
            <div className='dib w-100 border-box fl w-100'>
                {/* <section className ='dib pa6 mr3 fl w-14'></section> */}
                <section className ='center w-100-m w-75-l pr2 pl3 pt1 pb2 bg-white o-90 pa2'>
                    <div className='pb6'>
                        <h1 className='tc black'>AAKRUTHI PREVIOUS SPONSORS</h1>
                        <article className='dt dt--fixed w-80 center'>
                            <div className='dtc w-50'>
                                <img src={telanganatourism} alt = 'paper-presentation'/>
                            </div>
                            <div className='dtc w-30'>
                                <img src={amd} alt = 'amd'/>
                            </div>
                        </article>
                        <article className='center dt dt--fixed w-60'>
                            <div className='dtc w-20'>
                                <img src={ace} className='pa3' alt = 'ace'/>
                            </div>
                            <div className='dtc w-20'>
                                <img src={amp} className='pa3' alt = 'amp'/>
                            </div>
                            <div className='dtc w-20'>
                                <img src={bribbon} className='pa3' alt = 'blue-ribbon'/>
                            </div>
                        </article>
                        <article className='center dt dt--fixed w-80'>
                            <div className='dtc w-60'>
                                <img src={apoorva} className='pr3' alt = 'apoorva'/>
                            </div>
                            <div className='dtc w-40'>
                                <img src={princeton} className='pl3' alt = 'princeton'/>
                            </div>
                        </article>
                        <article className=' center dt dt--fixed w-80'>
                            <div className='dtc w-20'>
                                <img src={capgemini} className='pa3' alt = 'capgemini'/>
                            </div>
                            <div className='dtc w-20'>
                                <img src={microcare} className='pa3' alt = 'microcare'/>
                            </div>
                            <div className='dtc w-20'>
                                <img src={synchro} className='pa3' alt = 'synchro'/>
                            </div>
                        </article>
                        <article className=' center dt dt--fixed w-80'>
                            <div className='dtc w-20'>
                                <img src={lexicon} className='pa3' alt = 'lexicon'/>
                            </div>
                            <div className='dtc w-20'>
                                <img src={hdfc} className='pa3' alt = 'hdfc'/>
                            </div>
                            <div className='dtc w-40'>
                                <img src={jamboree} className='pa3' alt = 'jamboree'/>
                            </div>
                        </article>
                        <article className='center dt dt--fixed w-70'>
                            <div className='dtc w-20'>
                                <img src={gtree} className='h-75 pa3' alt = 'gtree'/>
                            </div>
                            <div className='dtc w-30'>
                                <img src={slv} className='pa3' alt = 'slv'/>
                            </div>
                            <div className='dtc w-20'>
                                <img src={physitech} className='pa3' alt = 'physitech'/>
                            </div>
                        </article>
                    </div>
                </section>
                {/* <section className ='dib m0 mb0 pa5 fl w-15'></section> */}
            </div>
        );
    }
}

export default Sponsors;