import React, { useState, setState } from "react";
import { NavLink } from "react-router-dom";

//Translation
import Translate from "../translation/translate";

//components
import Darkmode from "./darkmode";

//flags
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import ReactCountryFlag from "react-country-flag"

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
                <ul className="m-2 d-flex">
                    <li>
                        <NavLink to="/">
                            logo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <div>
                                <Translate keys={"Home"}/>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <div>
                                <Translate keys={"How its work"}/>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <div>
                                <Translate keys={"FAQ"}/>
                            </div>
                        </NavLink>
                    </li>
                </ul>
                <div className="d-flex">
                    <div className="m-auto mr-2">
                        <Darkmode/>
                    </div>
                    <div className="rounded-pill countrys pl-1 pr-1 d-flex align-items-center m-auto" style={{height: "30px"}}>
                        <ReactCountryFlag
                            countryCode="FR"
                            style={{
                                fontSize: '1.75em',
                            }}
                            aria-label="United States"
                        />
                        <div className="ml-1">
                            FR
                        </div>
                        <Icon path={mdiChevronDown}
                            size={.95}
                            rotate={0}
                            className="icons"/>
                    </div>
                    <div className="p-2 mr-2 ml-4">
                        <Translate keys={"Sign up"}/>
                    </div>
                    <div  className="p-2 mr-2">
                        <Translate keys={"Login"}/>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Navbar;