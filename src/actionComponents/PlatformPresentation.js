import React from 'react'

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
                activeImage: this.props.language.WEBSITE_TEXT_FEATURE_ONE_IMAGE,
                features: [
                    {
                        title: this.props.language.WEBSITE_TEXT_FEATURE_ONE,
                        image: this.props.language.WEBSITE_TEXT_FEATURE_ONE_IMAGE,
                        description: this.props.language.WEBSITE_TEXT_FEATURE_ONE_DESCRIPTION,
                    },
                    {
                        title: this.props.language.WEBSITE_TEXT_FEATURE_TWO,
                        image: this.props.language.WEBSITE_TEXT_FEATURE_TWO_IMAGE,
                        description: this.props.language.WEBSITE_TEXT_FEATURE_TWO_DESCRIPTION,
                    },
                    {
                        title: this.props.language.WEBSITE_TEXT_FEATURE_THREE,
                        image: this.props.language.WEBSITE_TEXT_FEATURE_THREE_IMAGE,
                        description: this.props.language.WEBSITE_TEXT_FEATURE_THREE_DESCRIPTION,
                    },
                    {
                        title: this.props.language.WEBSITE_TEXT_FEATURE_FOUR,
                        image: this.props.language.WEBSITE_TEXT_FEATURE_FOUR_IMAGE,
                        description: this.props.language.WEBSITE_TEXT_FEATURE_FOUR_DESCRIPTION,
                    },
                    {
                        title: this.props.language.WEBSITE_TEXT_FEATURE_FIVE,
                        image: this.props.language.WEBSITE_TEXT_FEATURE_FIVE_IMAGE,
                        description: this.props.language.WEBSITE_TEXT_FEATURE_FIVE_DESCRIPTION,
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

            return (

                <div className="platformPresentationContainer">

                    <div className="platformPresentationContent">

                        <div className="platformPresentationContentTitle">

                            {this.state.language.WEBSITE_TEXT_SECTION_THREE}

                        </div>

                        <div className="platformPresentationContentDescription">

                            {this.state.language.WEBSITE_TEXT_DESCRIPTION_SECTION_THREE}

                        </div>

                        <div className="platformPresentationContentImageActive">

                            {this.state.activeImage}

                        </div>

                        <div className="platformPresentationFeatureContainer">

                            {

                                this.state.features.map((feature, index) => {

                                    return (

                                        <div key={index} className="featureBoxContainer">

                                            <div className={this.state.activeId === index ? "featureBox active" : "featureBox"} onMouseEnter={() => this.changeImage(feature.image, index)}>

                                                {feature.title}

                                            </div>

                                            {

                                                this.state.activeId === index &&

                                                    <div className="featureBoxDescription">
                                                        
                                                        {feature.description}

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

export default PlatformPresentation;