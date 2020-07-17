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
                        description: 'description_here',
                    },
                    {
                        title: 'Websites',
                        image: 'FEATURE_2',
                        description: 'description_here',
                    },
                    {
                        title: 'Courses',
                        image: 'FEATURE_3',
                        description: 'description_here',
                    },
                    {
                        title: 'Emails',
                        image: 'FEATURE_4',
                        description: 'description_here',
                    },
                    {
                        title: 'Logs',
                        image: 'FEATURE_5',
                        description: 'description_here',
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

                                        <div className="featureBoxContainer">

                                            <div key={index} className={this.state.activeId === index ? "featureBox active" : "featureBox"} onMouseEnter={() => this.changeImage(feature.image, index)}>

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