import React, { useState, setState } from "react";
import { NavLink } from "react-router-dom";

//Translation
import Translate from "../translation/translate";

//components
import Darkmode from "./darkmode";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            test: true
        }; 
    }

    componentDidMount() {
    }

    render() {
        return (
            <nav className="d-flex align-items-center flex-wrap justify-content-between shadow">
                <NavLink to="/">
                    logo
                </NavLink>
                <ul className="m-2">
                    <li>
                        <NavLink to="/CreateParty">
                            <div className="rounded-pill button-primary p-2">
                                <Translate keys={"CreateParty"}/>
                            </div>
                        </NavLink>
                    </li>
                </ul>
                <Darkmode/>
            </nav>
        )
    }
};

export default Navbar;