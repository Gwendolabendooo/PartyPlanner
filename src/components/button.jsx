import React, { useState, setState } from "react";

//Translation
import Translate from "../translation/translate";

class Button extends React.Component {

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
            <div className="">
            </div>
        )
    }
};

export default Button;