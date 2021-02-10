import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next';

interface Section4Props extends WithTranslation {
    
}

interface Section4State {

}

    class Section4 extends React.Component<Section4Props, Section4State> {

        constructor(props: Section4Props) {

            super(props)

            this.state = {}

        }

        render() {

            const { t } = this.props

            return (

                <>

                    <div className="section">

                        <div className="container is-hd has-text-centered help">

                            <h2 className="subtitle help">

                                {t('WEBSITE_TEXT_NEED_HELP')}

                            </h2>

                            <h3 className="subtitle">

                                {t('WEBSITE_TEXT_NEED_HELP_DESCRIPTION')}

                            </h3>

                            <div className="buttons">

                                <div className="button is-primary">

                                    {t('WEBSITE_TEXT_FAQ')}

                                </div>

                            </div>

                        </div>

                    </div>

                </>

            )

        }

    }

export default withTranslation()(Section4)