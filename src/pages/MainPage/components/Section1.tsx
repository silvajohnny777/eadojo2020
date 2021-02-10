import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next';

interface Section1Props extends WithTranslation {
    
}

interface Section1State {

}

    class Section1 extends React.Component<Section1Props, Section1State> {

        constructor(props: Section1Props) {

            super(props)

            this.state = {}

        }

        render() {

            const { t } = this.props

            return (

                <>

                    <div className="section firstSection">

                        <div className="container is-hd has-text-centered">

                            <h1 className="title has-text-white">{t('WEBSITE_TEXT_CREATE_AND_SHARE_COURSES')}</h1>

                            <h2 className="subtitle has-text-white">{t('WEBSITE_TEXT_WE_ARE_A_DISTANCE')}</h2>

                            {/*

                                <div className="buttons">
                                    
                                    <a className="button" href="https://panel.eadojo.com/register">{t('WEBSITE_TEXT_START_FOR_FREE')}</a>
                                    
                                </div>

                            */}

                        </div>

                    </div>

                </>

            )

        }

    }

export default withTranslation()(Section1)