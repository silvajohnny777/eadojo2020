import React from 'react'
import { Link, /*useParams*/ } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

    const Footer = ({t}) => {

        return (

                <footer className="footer">
                    <div className="content has-text-centered">
                        <div className="columns">
                            <div className="column is-one-quarter">                                            
                                <figure className="image is-128x50">
                                    <Link className="is-uppercase" to="/"><img src="https://server.eadojo.com/resources/helpers/logo.png" alt="logo" /></Link>
                                </figure>
                                <ol className="has-text-left">
                                    <li><Link className="is-uppercase" to="/pricing">{t('WEBSITE_FOOTER_PRICING')}</Link></li>
                                </ol>
                            </div>
                            <div className="column has-text-left">
                                <h2 className="title mt-4">About us</h2>
                            </div>
                            <div className="column has-text-left">
                                <h2 className="title mt-4">Social medias</h2>
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