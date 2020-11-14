import React from 'react'
import { withNamespaces } from 'react-i18next';
import UsersImage from '../images/feature_1.jpeg'
import WebsiteImage from '../images/feature_2.jpg'
import CourseImage from '../images/feature_3.jpg'
import EmailsImage from '../images/feature_4.jpg'
import LogsImage from '../images/feature_5.jpg'

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
                activeImage: UsersImage,
                features: [
                    {
                        title: 'WEBSITE_TEXT_FEATURE_ONE',
                        image: UsersImage,
                        description: 'WEBSITE_TEXT_FEATURE_ONE_DESCRIPTION',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_TWO',
                        image: WebsiteImage,
                        description: 'WEBSITE_TEXT_FEATURE_TWO_DESCRIPTION',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_THREE',
                        image: CourseImage,
                        description: 'WEBSITE_TEXT_FEATURE_THREE_DESCRIPTION',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_FOUR',
                        image: EmailsImage,
                        description: 'WEBSITE_TEXT_FEATURE_FOUR_DESCRIPTION',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_FIVE',
                        image: LogsImage,
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

                <div className="container is-fluid presentation">

                    <div className="content">

                        <h2 className="title is-2 has-text-centered">

                            {t('WEBSITE_TEXT_SECTION_THREE')}

                        </h2>

                        <p className="subtitle is-4 has-text-centered">

                            {t('WEBSITE_TEXT_DESCRIPTION_SECTION_THREE')}

                        </p>
                        
                        <figure className="image is-3by3 mt-6">

                            <img className="platformImage" alt="platformImage" src={this.state.activeImage} />

                            {/* {t(this.state.activeImage)} */}
                            
                        </figure>

                        <div className="container">

                            <div className="tabs">

                                <ul>

                                    {

                                        this.state.features.map((feature, index) => {

                                            return (

                                                <li key={index} className={this.state.activeId === index ? "is-active" : ""} onMouseEnter={() => this.changeImage(feature.image, index)}>

                                                    

                                                    {t(feature.title)}

                                                    

                                                </li>

                                            )

                                        })

                                    }
                                
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            )

        }

    }

export default withNamespaces()(PlatformPresentation);