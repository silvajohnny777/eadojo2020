import React from 'react'
import Cookie from '../images/cookie.svg'
import { withNamespaces } from 'react-i18next';

    class PopUpCookie extends React.Component {

        constructor() {

            super()

            this.state = {
                
                

            }

        }

        render() {

            const { t } = this.props

            return (

                <div className="popUpCookieContainer" style={{display: !this.props.show && 'none'}}>

                    <div className="popUpCookieContent">

                        <div className="popUpCookieContentInformation">
            
                            <img className="popUpCookieTag" alt="cookieImage" src={Cookie} />

                            <div className="popUpCookieText">{t('COOKIE_TEXT')}</div>

                        </div>

                        <div className="popUpCookieButton" onClick={() => this.props.removeInfoCookie()}>

                            {t('COOKIE_TEXT_GOT_IT')}

                        </div>

                    </div>
        
                </div>

            )

        }

    }

export default withNamespaces()(PopUpCookie);