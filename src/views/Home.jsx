import React, { useState, setState } from "react";

//components
import Darkmode from "../components/darkmode";

class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            tset: 0
        }; 
    }

    componentDidMount() {

    }
    
    componentWillUnmount() {
        
    }

    render() {
        return (
            <div>
                <Darkmode/>
            </div>
        )
    }
};

export default Home;