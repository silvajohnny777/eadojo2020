import React from 'react'
import { Link, /*useParams*/ } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

    const Footer = ({t}) => {

        return (

                <footer className="footer">
                    <div className="content has-text-centered">
                        <div className="columns">
                            <div className="column">                                            
                                <figure className="image is-128x50">
                                    <img src="https://server.eadojo.com/resources/helpers/logo.png" alt="logo" />
                                </figure>
                                <ol className="has-text-left">
                                    <li><Link className="is-uppercase" to="/">{t('WEBSITE_FOOTER_HOME')}</Link></li>
                                    <li><Link className="is-uppercase" to="/pricing">{t('WEBSITE_FOOTER_PRICING')}</Link></li>
                                </ol>
                            </div>
                            <div className="column has-text-left">
                                <h2 className="title mt-5">About us</h2>
                            </div>
                            <div className="column has-text-left mt-5">
                                <h2 className="title">Social medias</h2>
                                <ol className="has-text-left" style={{marginLeft: "0"}}>
                                    <li><a className="is-uppercase" href="https://www.facebook.com/eadojo" target="_blank" rel="noopener noreferrer">{t('WEBSITE_FOOTER_FACEBOOK')}</a></li>
                                    <li><a className="is-uppercase" href="https://www.instagram.com/eadojo" target="_blank" rel="noopener noreferrer">{t('WEBSITE_FOOTER_INSTAGRAM')}</a></li>
                                    <li><a className="is-uppercase" href="https://www.twitter.com/eadojo" target="_blank" rel="noopener noreferrer">{t('WEBSITE_FOOTER_TWITTER')}</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </footer>

            )

    }

export default withNamespaces()(Footer);