import React from 'react'
import Cookie from '../images/cookie.svg'

    class PopUpCookie extends React.Component {

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

                <div className="popUpCookieContainer">

                    <div className="popUpCookieContent">

                        <div className="popUpCookieContentInformation">
            
                            <img className="popUpCookieTag" alt="cookieImage" src={Cookie} />

                            <div className="popUpCookieText">{this.state.languages.COOKIE_TEXT}</div>

                        </div>

                        <div className="popUpCookieButton" onClick={() => this.props.removeInfoCookie()}>

                            Got it!

                        </div>

                    </div>
        
                </div>

            )

        }

    }

export default PopUpCookie;