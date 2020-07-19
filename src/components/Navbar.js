import React from 'react'
import { Link } from 'react-router-dom';

    class Navbar extends React.Component {

        constructor() {

            super()

            this.state = {



            }

        }

        render() {

            return (

                <div className="navbarContainer">

                    <div className="navbarContent">

                        <div className="navbarContentHome">

                            <Link to="/" className="navbarHome">

                                <span className="eadHightlight">

                                    ead

                                </span>

                                ojo

                            </Link>                            

                        </div>

                        <div className="navbarContentLinks">

                            <Link to="/companies" className="navbarLink">

                                companies

                            </Link>

                            <Link to="/colleges" className="navbarLink">

                                colleges

                            </Link>

                            <Link to="/teachers" className="navbarLink">

                                teachers

                            </Link>

                            <a href="http://panel.ead.vairli.com/#/login" target="_blank" rel="noopener noreferrer" className="navbarLink login">

                                Login

                            </a>

                        </div>

                        <div className="navbarMobileBread">

                            B

                        </div>

                    </div>

                </div>

            )

        }

    }

export default Navbar;