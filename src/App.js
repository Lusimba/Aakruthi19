import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav';
import Home from './Components/Pages/Home'
import Events from './Components/Pages/Events'
import Register from './Components/Pages/Register'
import Sponsors from './Components/Pages/Sponsors'
import Contact from './Components/Pages/Contact'
import {Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import 'tachyons';
import './App.css';
// import {CSSTransition, TransitionGroup,} from 'react-transition-group';

const particleOptions = {
    "particles": {
        "number": {
            "value": 200,
            density:{
                enable:true,
                value_area:800
            }
        },
        "size": {
            "value": 3
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }
}

class App extends Component {
    render(){
    return (
    <div className='body'>
        <Particles className = 'particles'params={particleOptions}/>
        <Nav />
        <Route render={({location})=>(
            // <TransitionGroup>
            // <CSSTransition
                //     key={location.key}
                //     timeout={300000}
                //     classNames="fade"
                // >
                <Switch location={location}>
                    <Route path="/" exact component={Home} />
                    <Route path="/events" exact component={Events} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/sponsors" exact component={Sponsors} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
            // </CSSTransition>
        // </TransitionGroup>
        )}/>
        <Footer/>
        
    </div>
    );
    }
}

export default App;
