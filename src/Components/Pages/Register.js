import React, {Component} from 'react';
import 'tachyons';
import prasthuthi from '../../Images/paper_present.png'
import poster from '../../Images/poster.png'
import yantra from '../../Images/yantra.png'
import krithi from '../../Images/rover.png'
import trishna from '../../Images/trishna.png'
import chanakya from '../../Images/chanakya.jpg'
import laghuchitra from '../../Images/reel.png'
import Medha from '../../Images/medha.png'


class Register extends Component {
    render(){
        return(
            <div className='dib w-100 border-box fl w-100'>
                <section className ='center w-100-m w-75-l pr2 pl3 pt1 pb2 bg-white black o-90 pa2'>
                    <div className='pb6'>
                        <h1 className='tc georgia f-headline lh-solid'>Register for Events</h1>
                        <article className='dt bg-light-gray black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={prasthuthi} alt = 'paper-presentation'/>
                            </div>
                            
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc pa2'>
                            <div className='center w-70-m georgia'>E.PRANITH.        - 8106697102<br/>
                                    G.CHANDASRI. - 7674057560<br/>
                                    R.SUMANJALI. - 9515325772
                                </div>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLScDlbZ6YAfFG5EAGbGoxwCvb7eXy6XtUEDsbQIzfELe92WLBw/viewform?usp=pp_url'>
                                <h2 className='f1 br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Prasthuthi</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                        <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={poster} alt = 'pradasharna'/>
                            </div>
                            
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc pa2'>
                            <div className='center w-70 georgia'>P.PRANEETH - 9133465401<br/>
K. HARIKA.     -  9603395931<br/>
B.DIVYA          - 9010640575
                                </div>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLSd5I2R1BbpJ_jSHRV0iJcbEcPIeeQUW067Xh5fz_u7GHygj5g/viewform?usp=pp_url'>
                                <h2 className='f1 br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Pradasharna</h2></a>
                            </div>
                        </article>
                        <article className='dt bg-light-gray black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={krithi} className='h-50-l fr pa3' alt = 'krithi'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc pa2'>
                            <div className='center w-70 georgia'>T.SHARATH LOHITH - 8712171097<br/>
CH.DEEPAK.              - 9492003573<br/>
M.NAVYA.                 - 8184968496
                                </div>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLScaIH1yPWM2-igJK4nOUq2z2dqTmcc94KHzzdLedfVJJnyZng/viewform?usp=pp_url'>
                                <h2 className='f1 br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Krithi</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                        <div className='center dt-m w-100-m dtc-l w-40-l'>
                                <img src={trishna} className='h-75-l pl6-l' alt = 'paper-presentation'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc pa2'>
                            <div className='center w-70 georgia'>B. RAVITEJA - 7036910255<br/>
M.KAVYA.    - 9133437876<br/>
K.MANEESH - 9490539079
                                </div>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLSd4iAac-Kiohv042wBa_wL89ss5fqHnwW_m9YmBd_BvFMiYxA/viewform?usp=pp_url'>
                                <h2 className='f1 br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Trishna</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                        <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={Medha} className='pl6' alt = 'laghuchitra'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc pa2'>
                            <div className='center w-70 georgia'>JALEEL.      - 88010732108<br/>
SONALI.     - 9100824004<br/>
RAGHAVA - 7702244743
                                </div>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLSdnz_BCrwnPlugU_uxMFtvnuOoP6Ze8OKI-5zSChDfvMHCQew/viewform?usp=pp_url'>
                                <h2 className='f1 br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Medha</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                        <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={chanakya} className='h-50-l pa3-l' alt = 'chanakya'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc pa2'>
                            <div className='center w-70 georgia'>P.DEEPA.              - 7702723868<br/>
M.CHETANA.       - 9154020213<br/>
G.SAI PRANATH. - 8374276370
                                </div>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLSdV0uId1qP_WGneDA5_0exsYFTAWtLEiK8jSWtWDlTcXssYIQ/viewform?usp=pp_url'>
                                <h2 className='f1 br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Chanakya</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-light-gray black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={yantra} className='h-50-l fr pr6-l' alt = 'yantra'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc pa2'>
                            <div className='center w-70 georgia'>R.ANVITHA - 9502580977<br/>
CH.VINAY.   - 9502052169<br/>
K.ROHITH.   - 8096556696
                                </div>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLSd5PU_teVdH68-srk6aM4MVCL7mW415N1_cjYZtvC-i25JirA/viewform?usp=pp_url'>
                                <h2 className='f1 br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Yantra</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                        <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={laghuchitra} className='pl6' alt = 'laghuchitra'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc pa2'>
                            <div className='tc w-70 georgia'>K.MANI SHANKER - 9550465403<br/>
LEENA VARMA.    - 7680970102<br/>
SHIVA KALYAN    - 8008962295
                                </div>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLSes52Hvt8ToSHUySDzRwqZkbNyLmN6w_4-S0xSZeDmFB44YvA/viewform?usp=pp_url'>
                                <h2 className='f1 br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Laghuchitra</h2></a>
                                
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        );
    }
}

export default Register;