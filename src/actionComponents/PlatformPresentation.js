import React from 'react'
import { withNamespaces } from 'react-i18next';

    class PlatformPresentation extends React.Component {

        constructor() {

            super() 

            this.state = {
                activeId: 0,
                languages: [],
                features: []
            }

        }

        componentWillMount() {

            this.setState({
                language: this.props.language,
                activeImage: 'WEBSITE_TEXT_FEATURE_ONE_IMAGE',
                features: [
                    {
                        title: 'WEBSITE_TEXT_FEATURE_ONE',
                        image: 'WEBSITE_TEXT_FEATURE_ONE_IMAGE',
                        description: 'WEBSITE_TEXT_FEATURE_ONE_DESCRIPTION',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_TWO',
                        image: 'WEBSITE_TEXT_FEATURE_TWO_IMAGE',
                        description: 'WEBSITE_TEXT_FEATURE_TWO_DESCRIPTION',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_THREE',
                        image: 'WEBSITE_TEXT_FEATURE_THREE_IMAGE',
                        description: 'WEBSITE_TEXT_FEATURE_THREE_DESCRIPTION',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_FOUR',
                        image: 'WEBSITE_TEXT_FEATURE_FOUR_IMAGE',
                        description: 'WEBSITE_TEXT_FEATURE_FOUR_DESCRIPTION',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_FIVE',
                        image: 'WEBSITE_TEXT_FEATURE_FIVE_IMAGE',
                        description: 'WEBSITE_TEXT_FEATURE_FIVE_DESCRIPTION',
                    },
                ]
            })

        }

        changeImage = (image, index) => {

            this.setState({
                activeImage: image,
                activeId: index
            })

        }

        render() {

            const { t } = this.props

            return (

                <div className="platformPresentationContainer">

                    <div className="platformPresentationContent">

                        <div className="platformPresentationContentTitle">

                            {t('WEBSITE_TEXT_SECTION_THREE')}

                        </div>

                        <div className="platformPresentationContentDescription">

                            {t('WEBSITE_TEXT_DESCRIPTION_SECTION_THREE')}

                        </div>

                        <div className="platformPresentationContentImageActive">

                            {t(this.state.activeImage)}

                        </div>

                        <div className="platformPresentationFeatureContainer">

                            {

                                this.state.features.map((feature, index) => {

                                    return (

                                        <div key={index} className="featureBoxContainer">

                                            <div className={this.state.activeId === index ? "featureBox active" : "featureBox"} onMouseEnter={() => this.changeImage(feature.image, index)}>

                                                {t(feature.title)}

                                            </div>

                                            {

                                                this.state.activeId === index &&

                                                    <div className="featureBoxDescription">
                                                        
                                                        {t(feature.description)}

                                                    </div>

                                            }

                                        </div>

                                    )

                                })

                            }

                        </div>

                    </div>

                </div>

            )

        }

    }

export default withNamespaces()(PlatformPresentation);