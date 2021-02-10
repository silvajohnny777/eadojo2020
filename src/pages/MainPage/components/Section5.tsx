import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next';

interface Section5Props extends WithTranslation {
    
}

interface Section5State {

}

    class Section5 extends React.Component<Section5Props, Section5State> {

        constructor(props: Section5Props) {

            super(props)

            this.state = {}

        }

        render() {

            const { t } = this.props

            return (

                <>

                    <div className="section createAccount">

                        <div className="container is-hd has-text-centered">

                            <div className="columns is-vcentered">

                                <div className="column">

                                    <h2 className="subtitle has-text-white has-text-left">

                                        {t('WEBSITE_TEXT_CREATE_YOUR_ACCOUNT_NOW')}

                                    </h2>

                                </div>
                                
                                <div className="column columnAction">

                                    <div className="buttons">

                                        <a className="button" href="https://panel.eadojo.com/register">

                                            {t('WEBSITE_TEXT_CREATE_YOUR_ACCOUNT_NOW_BUTTON')}

                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </>

            )

        }

    }

export default withTranslation()(Section5)