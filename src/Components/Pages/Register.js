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


class Register extends Component {
    render(){
        return(
            <div className='dib w-100 border-box fl w-100'>
                {/* <section className ='dib pa6 mr3 fl w-14'></section> */}
                <section className ='center w-100-m w-75-l pr2 pl3 pt1 pb2 bg-white black o-90 pa2'>
                    <div className='pb6'>
                        <h1 className='tc'>Events</h1>
                        <article className='dt bg-light-gray black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={prasthuthi} alt = 'paper-presentation'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc'>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLScDlbZ6YAfFG5EAGbGoxwCvb7eXy6XtUEDsbQIzfELe92WLBw/viewform?usp=pp_url'>
                                <h2 className='f1 tj br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Prasthuthi</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc'>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLSd5I2R1BbpJ_jSHRV0iJcbEcPIeeQUW067Xh5fz_u7GHygj5g/viewform?usp=pp_url'>
                                <h2 className='f1 tj br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Pradasharna</h2></a>
                                
                            </div>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={poster} alt = 'pradasharna'/>
                            </div>
                        </article>
                        <article className='dt bg-light-gray black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={krithi} className='h-50-l fr pa3' alt = 'krithi'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc'>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLScaIH1yPWM2-igJK4nOUq2z2dqTmcc94KHzzdLedfVJJnyZng/viewform?usp=pp_url'>
                                <h2 className='f1 tj br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Krithi</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc'>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLSd4iAac-Kiohv042wBa_wL89ss5fqHnwW_m9YmBd_BvFMiYxA/viewform?usp=pp_url'>
                                <h2 className='f1 tj br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Trishna</h2></a>
                                
                            </div>
                            <div className='center dt-m w-100-m dtc-l w-40-l'>
                                <img src={trishna} className='h-75-l pl6-l' alt = 'paper-presentation'/>
                            </div>
                        </article>
                        <article className='dt bg-light-gray black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={shikshana} className='fr pr6' alt ='shikshana'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc'>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLScDlbZ6YAfFG5EAGbGoxwCvb7eXy6XtUEDsbQIzfELe92WLBw/viewform?usp=pp_url'>
                                <h2 className='f1 tj br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Shikshana</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc'>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLScDlbZ6YAfFG5EAGbGoxwCvb7eXy6XtUEDsbQIzfELe92WLBw/viewform?usp=pp_url'>
                                <h2 className='f1 tj br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Chanakya</h2></a>
                                
                            </div>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={chanakya} className='h-50-l pa3-l' alt = 'chanakya'/>
                            </div>
                        </article>
                        <article className='dt bg-light-gray black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={yantra} className='h-50-l fr pr6-l' alt = 'yantra'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc'>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLSd5PU_teVdH68-srk6aM4MVCL7mW415N1_cjYZtvC-i25JirA/viewform?usp=pp_url'>
                                <h2 className='f1 tj br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Yantra</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc'>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLScDlbZ6YAfFG5EAGbGoxwCvb7eXy6XtUEDsbQIzfELe92WLBw/viewform?usp=pp_url'>
                                <h2 className='f1 tj br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Laghuchitra</h2></a>
                                
                            </div>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={laghuchitra} className='pl6' alt = 'laghuchitra'/>
                            </div>
                        </article>
                        <article className='dt bg-light-gray black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={ahladakara} className='h-25-m h-50-l fr pr6' alt = 'ahladakara'/>
                            </div>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc'>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLScDlbZ6YAfFG5EAGbGoxwCvb7eXy6XtUEDsbQIzfELe92WLBw/viewform?usp=pp_url'>
                                <h2 className='f1 tj br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Ahladakara</h2></a>
                                
                            </div>
                        </article>
                        <article className='dt bg-white black dt--fixed w-100'>
                            <div className='dt-m w-100-m dtc-l w-50-l v-mid tc'>
                                <a rel='noopener noreferrer' target='_blank'  href='https://docs.google.com/forms/d/e/1FAIpQLScDlbZ6YAfFG5EAGbGoxwCvb7eXy6XtUEDsbQIzfELe92WLBw/viewform?usp=pp_url'>
                                <h2 className='f1 tj br3 link dim ph3 pv2 mb2 dib white bg-black'>Register for Medha</h2></a>
                                
                            </div>
                            <div className='dt-m w-100-m dtc-l w-40-l'>
                                <img src={Medha} className='pl6' alt = 'laghuchitra'/>
                            </div>
                        </article>
                        
                    </div>
                </section>
            </div>
        );
    }
}

export default Register;