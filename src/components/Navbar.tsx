
import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next';
import { withRouter, RouteComponentProps, Link } from "react-router-dom";

interface NavbarState {
    language?: string

}

interface NavbarProps extends WithTranslation {
    language: string
}

interface RouteParams {
    language?: string
}

    class Navbar extends React.Component<NavbarProps & RouteComponentProps<RouteParams>, NavbarState> {

        constructor(props: NavbarProps & RouteComponentProps) {

            super(props)

            this.state = {
                language: this.props.match.params.language
            }

        }

        render() {

            const { t } = this.props

            return (

                <>

                    <nav className="navbar" role="navigation" aria-label="main navigation">
                        <div className="container is-fullhd">
                            <div className="navbar-brand">
                                <Link to={`/${this.state.language}`} className="navbar-item">
                                    <img alt="eadojoLogo" src="https://server.eadojo.com/resources/helpers/logo_inverted.png" width="80" />
                                </Link>

                                <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                </div>
                            </div>

                            <div id="navbarBasicExample" className="navbar-menu">

                                <div className="navbar-start">

                                </div>

                                <div className="navbar-end">

                                    {/*

                                        <Link to={`/${this.state.language}/pricing`} className="navbar-item">
                                            {t('WEBSITE_TEXT_TALK_WITH_US')}
                                        </Link>

                                    */}

                                    <div className="navbar-item">
                                        {t('WEBSITE_TEXT_TALK_WITH_US')}
                                    </div>

                                    <div className="navbar-item">
                                        {t('WEBSITE_TEXT_FUNCTIONALITIES')}
                                    </div>

                                    <div className="navbar-item">
                                        {t('WEBSITE_TEXT_PRICING')}
                                    </div>

                                    <div className="navbar-item">

                                        <div className="buttons">

                                            <a className="button logIn" href="https://panel.eadojo.com/login">

                                                {t('WEBSITE_TEXT_LOG_IN')}

                                            </a>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </nav>

                </>

            )

        }

    }

//export default withTranslation()(Navbar)
export default withRouter(withTranslation("translation")(Navbar))