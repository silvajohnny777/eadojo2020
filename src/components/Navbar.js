import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import i18n from "i18next";

    const Navbar = ({t}) => {

        let { id, language } = useParams();

        console.log('navbar > ', id, language, i18n)

        return (

            <>

                {/*

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

                            <a href="https://panel.eadojo.com/login" rel="noopener noreferrer" className="navbarLink login">

                                {t('TEXT_AUTH_LOGIN')}

                            </a>

                        </div>

                        <div className="navbarMobileBread">

                            B

                        </div>

                    </div>

                </div>

                */}
                
                <nav className="navbar navbarContainer" role="navigation" aria-label="main navigation">

                    <div className="navbarContent">

                    <div className="navbar-brand navbarContentHome">

                        <Link to={`/${i18n.language}`} className="navbar-item navbarHome">

                            <span className="eadHightlight">

                                {t('PLATFORM_NAME').toLowerCase().substring(0, 3)}

                            </span>

                            {t('PLATFORM_NAME').substring(3)}

                        </Link>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">

                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>

                        </a>

                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">

                        <div className="navbar-start navbarContentLinks">
                            
                            {/*

                            <Link to={`/${i18n.language}/companies`} className="navbar-item navbarLink">

                                {t('WEBSITE_TEXT_COMPANIES')}

                            </Link>

                            <Link to={`/${i18n.language}/colleges`} className="navbar-item navbarLink">

                                {t('WEBSITE_TEXT_COLLEGES')}

                            </Link>

                            <Link to={`/${i18n.language}/teachers`} className="navbar-item navbarLink">

                                {t('WEBSITE_TEXT_TEACHERS')}

                            </Link>

                            /*}

                            {/*

                            <a className="navbar-item">
                                Documentation
                            </a>

                            <div className="navbar-item has-dropdown is-hoverable">

                                <a className="navbar-link">
                                More
                                </a>

                                <div className="navbar-dropdown">

                                    <a className="navbar-item">
                                        About
                                    </a>
                                    <a className="navbar-item">
                                        Jobs
                                    </a>
                                    <a className="navbar-item">
                                        Contact
                                    </a>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item">
                                        Report an issue
                                    </a>

                                </div>

                            </div>

                            */}

                        </div>

                        <div className="navbar-end">

                        <div className="navbar-item">


                            {/*

                            <a className="button is-primary">

                                <strong>Sign up</strong>

                            </a>

                            */}

                            <a href="https://panel.eadojo.com/login" className="button is-light navbarLink login">

                                {t('TEXT_AUTH_LOGIN')}

                            </a>

                        </div>
                        </div>
                    </div>
                    </div>
                    </nav>

            </>
            
        )

    }

export default withNamespaces()(Navbar);