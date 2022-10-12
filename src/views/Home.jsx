import React, { useState, setState } from "react";

//components
import Navbar from "../components/navbar";

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
                <Navbar/>
            </div>
        )
    }
};

export default Home;