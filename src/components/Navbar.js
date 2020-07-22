import React from 'react'
import { Link } from 'react-router-dom';

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

                            <Link to="/" className="navbarHome">

                                <span className="eadHightlight">

                                    {this.state.languages.PLATFORM_NAME.toLowerCase().substring(0, 3)}

                                </span>

                                {this.state.languages.PLATFORM_NAME.substring(3)}

                            </Link>                            

                        </div>

                        <div className="navbarContentLinks">

                            <Link to="/companies" className="navbarLink">

                                {this.state.languages.WEBSITE_TEXT_COMPANIES}

                            </Link>

                            <Link to="/colleges" className="navbarLink">

                                {this.state.languages.WEBSITE_TEXT_COLLEGES}

                            </Link>

                            <Link to="/teachers" className="navbarLink">

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

export default Navbar;