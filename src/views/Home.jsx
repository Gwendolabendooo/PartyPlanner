import React, { useState, setState } from "react";

//components
import Navbar from "../components/navbar";

import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';


//Translation
import Translate from "../translation/translate";

//medias
import Party from '../medias/party.png'
import Logo2 from '../medias/logo2.png'
import Fac from '../medias/fac.png'
import Ins from '../medias/insta.png'
import Twi from '../medias/twitter.png'
import Lin from '../medias/link.png'
import { parts } from "lit-html";

class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            tset: 0
        }; 
    }

    parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;

        let x = `${_depth2}, ${_depth1}`;

        document.getElementById('header').style.backgroundPosition = x;
    }

    componentDidMount() {
        document.getElementById("header").addEventListener("mousemove", this.parallax);

    }
    
    componentWillUnmount() {
        
    }

    render() {
        return (
            <div>
                <Navbar/>
                <header className="bg-dark d-flex align-content-center align-items-center justify-content-center position-relative" id="header" style={{height: 'calc(100vh - 89px)'}}>
                    <div>
                        <h1 className="text-gradient m-0" style={{fontSize: "6vw"}}>
                            All your Party Planning needs
                        </h1>
                        <h3 style={{color: 'white'}}>
                            Plan your parties with in just a few clicks by using Party Planner. We are experienced in organizing parties for your families and friends. Click the below button to get started.
                        </h3>
                        <div className="d-flex align-content-center align-items-center justify-content-center">
                            <div className="m-4 rounded-pill bg-gradient text-white big-button">
                                Create party
                            </div>
                            <div className="m-4 rounded-pill border big-button" style={{borderWidth: "3px", color: "white"}}>
                                Join party
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute ctn-cards d-flex">
                        <div className="rounded p-3 card d-flex flex-column shadow">
                            <div className="text-gradient font-20 text-center">
                                2000+
                            </div>
                            <div className="text-center">
                                <Translate keys={"FAQ"}/>
                            </div>
                        </div>
                        <div className="rounded p-3 card d-flex flex-column shadow">
                            <div className="text-gradient font-20 text-center">
                                2000+
                            </div>
                            <div className="text-center">
                                <Translate keys={"FAQ"}/>
                            </div>
                        </div>
                        <div className="rounded p-3 card d-flex flex-column shadow">
                            <div className="text-gradient font-20 text-center">
                                2000+
                            </div>
                            <div className="text-center">
                                <Translate keys={"FAQ"}/>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="p-5">
                    <div className="pt-5 pb-2 mb-5">
                        <h2>
                            Learn about Party Planner
                        </h2>
                        <div>
                            Lorem ipsum dolor sit amet consectetur. Risus at eros fames enim turpis lobortis dui magna habitant. At varius pulvinar dui eu vitae. Ipsum elementum amet sem commodo feugiat eget eget. Lorem ipsum dolor sit amet consectetur. Risus at eros fames enim turpis lobortis dui magna habitant. At varius pulvinar dui eu vitae. Ipsum elementum amet sem commodo feugiat eget eget.
                        </div>
                    </div>
                    <div className="p-3 d-flex bg-2 mt-5 shadow rounded">
                        <div className="w-50 d-flex">
                            <div className="mr-2">
                                test
                            </div>
                            <div className="d-flex flex-column">
                                <div className="rounded p-2 surc card-slid">
                                    <h5 className="text-gradient pt-1 pb-1">
                                        Step 1
                                    </h5>
                                    <b>Create a party</b>
                                    <div className="mt-1">
                                        Click on the "create party" button or click on this button then connect and invite your friends
                                    </div>
                                </div>
                                <div className="rounded p-2 card-slid">
                                    <h5 className="text-gradient pt-1 pb-1">
                                        Step 1
                                    </h5>
                                    <b>Create a party</b>
                                    <div className="mt-1">
                                        Click on the "create party" button or click on this button then connect and invite your friends
                                    </div>
                                </div>
                                <div className="rounded p-2 card-slid">
                                    <h5 className="text-gradient pt-1 pb-1">
                                        Step 1
                                    </h5>
                                    <b>Create a party</b>
                                    <div className="mt-1">
                                        Click on the "create party" button or click on this button then connect and invite your friends
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-50 rounded overflow-hidden">
                            <img src={Party} width='100%' alt="" />
                        </div>
                    </div>
                    <div className="pt-2 pb-2 mb-3 mt-5">
                        <h2>
                            Learn about Party Planner
                        </h2>
                        <div>
                            Lorem ipsum dolor sit amet consectetur. Risus at eros fames enim turpis lobortis dui magna habitant. At varius pulvinar dui eu vitae. Ipsum elementum amet sem commodo feugiat eget eget. Lorem ipsum dolor sit amet consectetur. Risus at eros fames enim turpis lobortis dui magna habitant. At varius pulvinar dui eu vitae. Ipsum elementum amet sem commodo feugiat eget eget.
                        </div>
                    </div>
                    <div className="mt-5 mb-5">
                        <div className="position-relative w-fit">
                            <img src={Party} width="380px" height='450px' alt="" />
                            <div className="card-surv position-absolute rounded shadow2 bg-2 w-75 p-2">
                                <div className="d-flex justify-content-between">
                                    <b>Party title here</b>
                                    <div>
                                        23 NOW 2022
                                    </div>
                                </div>
                                <div>
                                    NAME PLAYETR
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-2 pb-2 mb-5">
                        <h2>
                            Learn about Party Planner
                        </h2>
                        <div>
                            Lorem ipsum dolor sit amet consectetur. Risus at eros fames enim turpis lobortis dui magna habitant. At varius pulvinar dui eu vitae. Ipsum elementum amet sem commodo feugiat eget eget. Lorem ipsum dolor sit amet consectetur. Risus at eros fames enim turpis lobortis dui magna habitant. At varius pulvinar dui eu vitae. Ipsum elementum amet sem commodo feugiat eget eget.
                        </div>
                    </div>
                    <div>
                        slider votes
                    </div>
                    <div className="mb-5 mt-5">
                        <h2>
                            Frequently asked Questions
                        </h2>
                        <div>
                            <div className="d-flex rounded bg-2 p-2 mb-2">
                                <div>
                                    <Icon path={mdiChevronDown}
                                    size={.95}
                                    rotate={0}
                                    className="icons pr-2"/>
                                </div>
                                <div>
                                    <b>
                                        What is logo name here?
                                    </b>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur. At adipiscing imperdiet nam elementum gravida odio gravida massa. Sed maecenas nunc condimentum nulla magna elit augue neque. Nisl feugiat nibh sit feugiat. Amet non neque accumsan eu commodo pharetra augue justo. Eu luctus aliquet aliquam hendrerit lacinia proin nulla mauris laoreet. Non donec lectus commodo cursus non at eleifend ac. Volutpat magna felis sapien ullamcorper lobortis.
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex rounded bg-2 p-2 mb-2">
                                <div>
                                    <Icon path={mdiChevronDown}
                                    size={.95}
                                    rotate={0}
                                    className="icons pr-2"/>
                                </div>
                                <div>
                                    <b>
                                        What is logo name here?
                                    </b>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur. At adipiscing imperdiet nam elementum gravida odio gravida massa. Sed maecenas nunc condimentum nulla magna elit augue neque. Nisl feugiat nibh sit feugiat. Amet non neque accumsan eu commodo pharetra augue justo. Eu luctus aliquet aliquam hendrerit lacinia proin nulla mauris laoreet. Non donec lectus commodo cursus non at eleifend ac. Volutpat magna felis sapien ullamcorper lobortis.
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex rounded bg-2 p-2 mb-2">
                                <div>
                                    <Icon path={mdiChevronDown}
                                    size={.95}
                                    rotate={0}
                                    className="icons pr-2"/>
                                </div>
                                <div>
                                    <b>
                                        What is logo name here?
                                    </b>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur. At adipiscing imperdiet nam elementum gravida odio gravida massa. Sed maecenas nunc condimentum nulla magna elit augue neque. Nisl feugiat nibh sit feugiat. Amet non neque accumsan eu commodo pharetra augue justo. Eu luctus aliquet aliquam hendrerit lacinia proin nulla mauris laoreet. Non donec lectus commodo cursus non at eleifend ac. Volutpat magna felis sapien ullamcorper lobortis.
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex rounded bg-2 p-2 mb-2">
                                <div>
                                    <Icon path={mdiChevronDown}
                                    size={.95}
                                    rotate={0}
                                    className="icons pr-2"/>
                                </div>
                                <div>
                                    <b>
                                        What is logo name here?
                                    </b>
                                    <div>
                                        Lorem ipsum dolor sit amet consectetur. At adipiscing imperdiet nam elementum gravida odio gravida massa. Sed maecenas nunc condimentum nulla magna elit augue neque. Nisl feugiat nibh sit feugiat. Amet non neque accumsan eu commodo pharetra augue justo. Eu luctus aliquet aliquam hendrerit lacinia proin nulla mauris laoreet. Non donec lectus commodo cursus non at eleifend ac. Volutpat magna felis sapien ullamcorper lobortis.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5 pt-5 w-75">
                        <h2>
                            Subscribe And get Latest news update about Us.
                        </h2>
                        <div className="mb-4">
                            In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi id. Risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean egestas malesuada in pulvinar enim viverra.
                        </div>
                        <div className="position-relative d-flex w-50">
                            <input type="email" className="rounded-pill border p-3 w-100" placeholder="Your email" name="" id="" />
                            <div className="rounded-pill p-2 bg-gradient position-absolute bg-flot text-white text-center" style={{width: "150px"}}>
                                Subscribe
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="p-5 d-flex flex-column">
                    <div className="d-flex justify-content-between">
                        <div style={{width: "380px"}}>
                            <img src={Logo2} alt="" />
                            <div className="mt-2 mb-2">
                                Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.  Posuere ac in in nisl sed augue.
                            </div>
                            <div className="d-flex">
                                <div className="rounded-circle bg-2 mr-3 rs d-flex align-items-center align-content-center justify-content-center shadow">
                                    <img src={Fac} alt="" />
                                </div>
                                <div className="rounded-circle bg-2 mr-3 rs d-flex align-items-center align-content-center justify-content-center shadow">
                                    <img src={Lin} alt="" />
                                </div>
                                <div className="rounded-circle bg-2 mr-3 rs d-flex align-items-center align-content-center justify-content-center shadow">
                                    <img src={Ins} alt="" />
                                </div>
                                <div className="rounded-circle bg-2 rs d-flex align-items-center align-content-center justify-content-center shadow">
                                    <img src={Twi} alt="" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex flex-column justify-content-between h-100">
                                <b className="font-20">Navigation</b>
                                <div className="font-18">
                                    <div>
                                        Home
                                    </div>
                                    <div>
                                        How its work
                                    </div>
                                    <div>
                                        FAQ
                                    </div>
                                    <div>
                                        Login
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-top mt-3 pt-2">
                        <div>
                            © 2022 Copyright <b>Party Planner</b>. All rights reserved
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
};

export default Home;