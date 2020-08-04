import React from 'react'
import { Link } from 'react-router-dom';

    const Navbar = () => {

        return (

                <div className="navbarContainer">

                    <div className="navbarContent">

                        <div className="navbarContentHome">

                            <Link to={"/en/home"} className="navbarHome">

                                <span className="eadHightlight">

                                    ead

                                </span>

                                ojo

                            </Link>                            

                        </div>

                        <div className="navbarContentLinks">

                            <Link to={`/en/companies`} className="navbarLink">

                                Companies

                            </Link>

                            <Link to={`/en/colleges`} className="navbarLink">

                                Colleges

                            </Link>

                            <Link to={`/en/teachers`} className="navbarLink">

                                Teachers

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

    /*

    class Navbar extends React.Component {

        constructor() {

            super()

            this.state = {
                languages: []
            }

        }

        componentWillMount() {

            this.setState({
                languages: this.props.language
            })

        }

        render() {

            return (

                <div className="navbarContainer">

                    <div className="navbarContent">

                        <div className="navbarContentHome">

                            <Link to={"/"+this.props.languageId} className="navbarHome">

                                <span className="eadHightlight">

                                    {this.state.languages.PLATFORM_NAME.toLowerCase().substring(0, 3)}

                                </span>

                                {this.state.languages.PLATFORM_NAME.substring(3)}

                            </Link>                            

                        </div>

                        <div className="navbarContentLinks">

                            <Link to={`/:${this.props.languageId}/companies`} className="navbarLink">

                                {this.state.languages.WEBSITE_TEXT_COMPANIES}

                            </Link>

                            <Link to={`/:${this.props.languageId}/colleges`} className="navbarLink">

                                {this.state.languages.WEBSITE_TEXT_COLLEGES}

                            </Link>

                            <Link to={`/:${this.props.languageId}/teachers`} className="navbarLink">

                                {this.state.languages.WEBSITE_TEXT_TEACHERS}

                            </Link>

                            <a href="http://panel.ead.vairli.com/#/login" target="_blank" rel="noopener noreferrer" className="navbarLink login">

                                {this.state.languages.TEXT_AUTH_LOGIN}

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

    */

export default Navbar;