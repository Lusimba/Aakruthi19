import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import 'tachyons';

class Nav extends Component {
    render(){
        return (
            <nav className="dt w-100 border-box pt0 pb0 o-90 pa3 ph5-ns bg-light-gray">
                <NavLink exact to="/" className="dtc v-mid mid-gray dim w-25" title="Home">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/University_College_of_Engineering%2C_Osmania_University_logo.png/220px-University_College_of_Engineering%2C_Osmania_University_logo.png" className="dib h4" alt="Site Name" />
               </NavLink>
                <div className="dtc v-mid w-75 tr">
                    <NavLink exact to="/" className="hover-bg-dark-gray no-underline hover-white dark-red f3 f2-ns dib mr3 mr4-ns pa2 br3" activeClassName="active bg-mid-gray pa2 br3" title='About'>Home</NavLink>
                    <NavLink exact to="/events" className="hover-bg-dark-gray no-underline hover-white dark-red f3 f2-ns dib mr3 mr4-ns pa2 br3" activeClassName="active bg-mid-gray pa2 br3" title="Events">Events</NavLink>
                    <NavLink exact to="/register" className="hover-bg-dark-gray no-underline hover-white dark-red f3 f2-ns dib mr3 mr4-ns pa2 br3" activeClassName="active bg-mid-gray pa2 br3" title="Registration">Register</NavLink>
                    <NavLink exact to="/sponsors" className="hover-bg-dark-gray no-underline hover-white dark-red f3 f2-ns dib mr3 mr4-ns pa2 br3" activeClassName="active bg-mid-gray pa2 br3" title="Previous Sponsors">Our Sponsors</NavLink>
                    <NavLink exact to="/contact" className="hover-bg-dark-gray no-underline hover-white dark-red f3 f2-ns dib mr3 mr4-ns pa2 br3" activeClassName="active bg-mid-gray pa2 br3" title="Contact">Contact Us</NavLink>
                </div>
            </nav>

        );
    }
}
export default Nav;