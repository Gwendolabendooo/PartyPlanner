import React, { useState, setState } from "react";
import { NavLink } from "react-router-dom";

//Translation
import Translate from "../translation/translate";

//components
import Darkmode from "./darkmode";

//flags
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';
import Flag from 'react-world-flags'

//medias
import Logo2 from '../medias/logo2.png'
import FR from '../medias/fr.png'
import EN from '../medias/en.png'
import GB from '../medias/ger.png'

class Navbar extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            showLang: false,
            language: localStorage.getItem("country")
        }; 
    }

    componentDidMount() {
    }

    changeLang(lang){
        localStorage.setItem("country", lang);
        this.setState({ language: lang, showLang: false })
    }

    render() {
        return (
            <nav className="d-flex align-items-center flex-wrap justify-content-between shadow position-fixed left-0 top-0 w-100">
                <ul className="m-2 d-flex align-items-center">
                    <li className="mr-3">
                        <NavLink to="/">
                            <img src={Logo2} alt="" />
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
                    <div className="m-auto mr-3">
                        <Darkmode/>
                    </div>
                    <div className="rounded-pill countrys p-1 d-flex m-auto position-relative flex-column" style={{paddingTop: 0, paddingBottom: 0, width: "93px"}}>
                        <div className="d-flex align-content-center align-items-center p-1 cursor-pointer" onClick={() => this.setState({ showLang: !this.state.showLang })}>
                            <img src={this.state.language === "FR" ? FR : this.state.language === "EN" ? EN : GB} width="30px" alt="" />
                            <div className="ml-1">
                                {this.state.language}
                            </div>
                            <Icon path={mdiChevronDown}
                                size={.95}
                                rotate={0}
                                className="icons"/>
                        </div>
                        {this.state.showLang ?
                            <div className="position-absolute popin rounded countrys w-100 cursor-pointer">
                                <div className={this.state.language === "FR" ? "d-flex flex-row p-2 hide" : "d-flex flex-row p-2 rub-lang"} onClick={() => this.changeLang("FR")}>
                                    <img src={FR} width="30px" alt="" />
                                    <div className="ml-1">
                                        FR
                                    </div>
                                </div>
                                <div className={this.state.language === "EN" ? "d-flex flex-row p-2 hide" : "d-flex flex-row p-2 rub-lang"} onClick={() => this.changeLang("EN")}>
                                    <img src={EN} width="30px" alt="" />
                                    <div className="ml-1">
                                        EN
                                    </div>
                                </div>
                                <div className={this.state.language === "GB" ? "d-flex flex-row p-2 hide" : "d-flex flex-row p-2 rub-lang"} onClick={() => this.changeLang("GB")}>
                                    <img src={GB} width="30px" alt="" />
                                    <div className="ml-1">
                                        GB
                                    </div>
                                </div>
                            </div>
                            :null
                        }
                    </div>
                    <div className="p-2 mr-2 ml-4">
                        <Translate keys={"Sign up"}/>
                    </div>
                    <div  className="p-2 mr-2 bg-gradient rounded-pill min-width-button button-active">
                        <Translate keys={"Login"}/>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Navbar;