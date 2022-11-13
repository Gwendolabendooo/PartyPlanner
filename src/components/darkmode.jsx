import React, { useState, setState } from "react";
import Icon from '@mdi/react';
import { mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js';

import "../steel/darkmode.css"

class Darkmode extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            currentTheme: localStorage.getItem('theme') ? localStorage.getItem('theme') : null,
            darkmode: false
        }; 
    }

    switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
        this.setState({ darkmode: e.target.checked })
    }

    componentDidMount() {
        if (this.state.currentTheme) {
            document.documentElement.setAttribute('data-theme', this.state.currentTheme);
    
            if (this.state.currentTheme === 'dark') {
                this.setState({ darkmode: true })
            }
        }
    }

    render() {
        return (
            <label className="switch d-flex align-items-center justify-content-between">
                <Icon path={mdiWeatherNight}
                    size={.95}
                    rotate={0}
                    className="ml-1"
                    color="white"/>
                {this.state.darkmode !== true ? 
                    <Icon path={mdiWhiteBalanceSunny}
                    size={.95}
                    rotate={0}
                    color="black"/> : null
                    }
                <input type="checkbox" id="darkmode" checked={this.state.darkmode} onChange={(e) => this.switchTheme(e)} />
                <span className="slider round"></span>
            </label>
        )
    }
};

export default Darkmode;