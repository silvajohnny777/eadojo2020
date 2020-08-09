import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import i18n from "i18next";

    const Navbar = ({t}) => {

        let { id, language } = useParams();

        console.log('navbar > ', id, language, i18n)

        return (

                <div className="navbarContainer">

                    <div className="navbarContent">

                        <div className="navbarContentHome">

                            <Link to={`/${i18n.language}`} className="navbarHome">

                                <span className="eadHightlight">

                                    {t('PLATFORM_NAME').toLowerCase().substring(0, 3)}

                                </span>

                                {t('PLATFORM_NAME').substring(3)}

                            </Link>                            

                        </div>

                        <div className="navbarContentLinks">

                            <Link to={`/${i18n.language}/companies`} className="navbarLink">

                                {t('WEBSITE_TEXT_COMPANIES')}

                            </Link>

                            <Link to={`/${i18n.language}/colleges`} className="navbarLink">

                                {t('WEBSITE_TEXT_COLLEGES')}

                            </Link>

                            <Link to={`/${i18n.language}/teachers`} className="navbarLink">

                                {t('WEBSITE_TEXT_TEACHERS')}

                            </Link>

                            <a href="http://panel.ead.vairli.com/#/login" rel="noopener noreferrer" className="navbarLink login">

                                {t('TEXT_AUTH_LOGIN')}

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

export default withNamespaces()(Navbar);