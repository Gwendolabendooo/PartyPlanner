import React, { useState, setState } from "react";

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
            <nav>
                <ul>
                    <li>
                        test
                    </li>
                </ul>
                <Darkmode/>
            </nav>
        )
    }
};

export default Navbar;