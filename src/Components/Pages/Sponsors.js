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
            <div className='dib w-100 georgia border-box fl w-100'>
                {/* <section className ='dib pa6 mr3 fl w-14'></section> */}
                <section className ='center w-100-m w-75-l pr2 pl3 pt1 black pb2 bg-white o-90 pa2'>
                    <div className='pb6'>
                        <h1 className='tc black'>AAKRUTHI 2k19 SPONSORS</h1>
                        <article className='w-80 center'>
                            <div className='w-20 center'>
                                <img src={amd} alt = 'amd'/>
                            </div>
                        </article>
                        <article>
                            <h1 className='tc'>AMD India Private Limited</h1>
                            <p>
                            For more than 45 years Advanced Micro Devices (AMD) has been driving innovation in high-performance computing, graphics and visualization technologies ― the building blocks for gaming, immersive platforms, and the datacenter. Hundreds of millions of consumers, leading Fortune 500 businesses and cutting-edge scientific research facilities around the world rely on AMD technology daily to improve how they live, work and play. AMD employees around the world are focused on building great products that push the boundaries of what is possible. For more information about how AMD is enabling today and inspiring tomorrow, visit the AMD (NASDAQ: AMD) website, blog, and Facebook and Twitter pages.
                            </p>

                            <h2 className='tc' >AMD Product Range</h2>
                            <div className='center dt dt--fixed w-90'>
                                <div className='dtc w-33 pa2'>
                                    <article class="br2 ba dark-gray b--black-10 mv4 mw5 center">
                                    <p class="f3 f4-ns">AMD Ryzen™ 7 Processors</p>
                                    <img src="https://images10.newegg.com/ProductImage/19-113-430-S01.jpg" height='110' class="db ba dark-gray w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
                                    <div class="pa2 ph3-ns pb3-ns">
                                        <div class="dt w-100">
                                        </div>
                                        <p class="f4 lh-copy measure mt2 mid-gray">
                                        <p>8 Core</p>
                                        <p>20MB Cache</p>
                                        <p>16 Processing Threads</p>
                                        </p>
                                    </div>
                                    </article>
                                </div>
                                <div className='dtc w-30 pa2'>
                                    <article class="br2 ba dark-gray b--black-10 mv4 mw5 center">
                                        <p class="f3 f4-ns">AMD Ryzen™ 5 Processors</p>
                                        <img src="https://www.primeabgb.com/wp-content/uploads/2017/04/AMD-RYZEN-5-1500X-3.6-GHz-Socket-AM4-Desktop-Processor-with-Wraith-Spire-95W-cooler.jpg" height='110' width ='' class="db ba dark-gray w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
                                        <div class="pa2 ph3-ns pb3-ns">
                                            <div class="dt w-100">
                                            </div>
                                            <p class="f4 lh-copy measure mt2 mid-gray">
                                            <p>4 to 6 Cores</p>
                                            <p>Up to 19MB Cache</p>
                                            <p>Up to 12 Processing Threads</p>
                                            </p>
                                        </div>
                                    </article>
                                </div>
                                <div className='dtc w-30 pa2'>
                                    <article class="br2 ba dark-gray b--black-10 mv4 mw5 center">
                                        <p class="f3 f4-ns">AMD Ryzen™ 3 Processors</p>
                                        <img src="https://www.amd.com/system/files/24301-ryzen-3-pib-left-facing-1260x709_2.png" height='110' class="db ba dark-gray w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
                                        <div class="pa2 ph3-ns pb3-ns">
                                            <div class="dt w-100">
                                            </div>
                                            <p class="f4 lh-copy measure mt2 mid-gray">
                                            <p>4 Cores</p>
                                            <p>Up to 10 MB Cache</p>
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            {/* --------------------- */}
                            <div className='center dt dt--fixed w-50-l w-70-m'>
                                <div className='dtc w-33-m w-25-l pa2'>
                                    <article class="br2 ba dark-gray b--black-10 center">
                                    <p class="f3 f4-ns">AMD Ryzen™ Threadripper™</p>
                                    <img src="https://www.amd.com/system/files/23588-ryzen-threadripper-pib-left-facing-1260x709.png" height='110' class="db ba dark-gray w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
                                    <div class="pa2 ph3-ns pb3-ns">
                                        <div class="dt w-100">
                                        </div>
                                        <p class="f4 lh-copy measure mt2 mid-gray">
                                        <p>1920X Processor</p>
                                        <p>8 to 16 Cores</p>
                                        <p>20 MB to 40 MB Cache</p>
                                        <p>Up to 32 Processing Threads</p>
                                        </p>
                                    </div>
                                    </article>
                                </div>
                                <div className='dtc w-33-m w-25-l pa2'>
                                    <article class="br2 ba dark-gray b--black-10 center">
                                        <p class="f3 f4-ns">AMD EPYC Server Processor</p>
                                        <img src="https://images.idgesg.net/images/article/2017/11/amd-epyc-chip-7000-series-copy-100741910-large.jpg" height='110' width ='' class="db ba dark-gray w-100 br2 br--top" alt="Photo of a kitten looking menacing." />
                                        <div class="pa2 ph3-ns pb3-ns">
                                            <div class="dt w-100">
                                            </div>
                                            <p class="f4 lh-copy measure mt2 mid-gray">
                                            <p>2 x AMD 7551, 32 cores @ 2.0 GHz</p>
                                            <p>Memory: 512 GB DDR4</p>
                                            <p>Network: 2 x 25 Gbps</p>
                                            </p>
                                        </div>
                                    </article>
                                </div>
                            </div>

                        </article>
                        <h2 className='tc' >Other 2k19 Sponsors</h2>
                        <article className='dt dt--fixed w-50 center'>
                            <div className='dtc w-30'>
                                <img src='https://devhelpmate.osmosys.asia/img/Osmosys_logo_transparent.png' alt = 'paper-presentation'/>
                            </div>
                            <div className='dtc w-20'>
                                <img src={amp} className='pa3' alt = 'amp'/>
                            </div>
                        </article>
                        <h1 className='tc black'>PREVIOUS SPONSORS</h1>
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