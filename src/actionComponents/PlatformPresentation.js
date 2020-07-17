import React from 'react'

    class PlatformPresentation extends React.Component {

        constructor() {

            super() 

            this.state = {
                activeId: 0,
                activeImage: 'FEATURE_1',
                features: [
                    {
                        title: 'Students',
                        image: 'FEATURE_1',
                    },
                    {
                        title: 'Websites',
                        image: 'FEATURE_2',
                    },
                    {
                        title: 'Courses',
                        image: 'FEATURE_3',
                    },
                    {
                        title: 'Emails',
                        image: 'FEATURE_4',
                    },
                    {
                        title: 'Logs',
                        image: 'FEATURE_5',
                    },
                ]
            }

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

                            A powerful and flexible platform

                        </div>

                        <div className="platformPresentationContentDescription">

                            Different than everything you have seen before

                        </div>

                        <div className="platformPresentationContentImageActive">

                            {this.state.activeImage}

                        </div>

                        <div className="platformPresentationFeatureContainer">

                            {

                                this.state.features.map((feature, index) => {

                                    return (

                                        <div key={index} className={this.state.activeId === index ? "featureBox active" : "featureBox"} onMouseEnter={() => this.changeImage(feature.image, index)}>

                                            {feature.title}

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