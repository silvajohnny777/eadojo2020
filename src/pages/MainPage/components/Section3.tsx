import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next';
import UsersImage from '../../../images/feature_1.jpeg'
import WebsiteImage from '../../../images/feature_2.jpg'
import CourseImage from '../../../images/feature_3.jpg'
import EmailsImage from '../../../images/feature_4.jpg'
import LogsImage from '../../../images/feature_5.jpg'
import DashBoardImage from '../../../images/dashboard.jpg'

interface Section3Props extends WithTranslation {
    
}

interface Section3State {
    activeImage: any;
    activeId: number;
    activeDescription: string
    features: Array<FeaturesArray>;
}

interface FeaturesArray {
    title: string;
    image: any;
    description: string;
    icon: string
}

    class Section3 extends React.Component<Section3Props, Section3State> {

        constructor(props: Section3Props) {

            super(props)

            this.state = {
                activeImage: DashBoardImage,
                activeId: 0,
                features: [],
                activeDescription: '',
            }

        }

        componentWillMount() {

            this.setState({
                activeImage: DashBoardImage,
                activeDescription: 'WEBSITE_TEXT_FEATURE_DASHBOARD_DESCRIPTION',
                features: [
                    {
                        title: 'WEBSITE_TEXT_FEATURE_DASHBOARD',
                        image: DashBoardImage,
                        description: 'WEBSITE_TEXT_FEATURE_DASHBOARD_DESCRIPTION',
                        icon: 'fas fa-chart-line',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_ONE',
                        image: UsersImage,
                        description: 'WEBSITE_TEXT_FEATURE_ONE_DESCRIPTION',
                        icon: 'fas fa-users',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_TWO',
                        image: WebsiteImage,
                        description: 'WEBSITE_TEXT_FEATURE_TWO_DESCRIPTION',
                        icon: 'fas fa-globe',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_THREE',
                        image: CourseImage,
                        description: 'WEBSITE_TEXT_FEATURE_THREE_DESCRIPTION',
                        icon: 'fas fa-book-open',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_FOUR',
                        image: EmailsImage,
                        description: 'WEBSITE_TEXT_FEATURE_FOUR_DESCRIPTION',
                        icon: 'fas fa-envelope',
                    },
                    {
                        title: 'WEBSITE_TEXT_FEATURE_FIVE',
                        image: LogsImage,
                        description: 'WEBSITE_TEXT_FEATURE_FIVE_DESCRIPTION',
                        icon: 'fas fa-archive',
                    },
                ]
            })

        }

        changeImage = (image: any, index: number, description: string) => {

            this.setState({
                activeImage: image,
                activeId: index,
                activeDescription: description
            })

        }

        render() {

            const { t } = this.props

            return (

                <>

                    <div className="section has-main-bg">

                        <div className="container is-hd has-text-centered presentation">

                            <h2 className="subtitle">

                                {t('WEBSITE_TEXT_SIMPLE_PLATFORM')}

                            </h2>

                            <h3 className="subtitle">

                                {t('WEBSITE_TEXT_SIMPLE_PLATFORM_DESCRIPTION')}

                            </h3>
                        
                            <figure className="image is-3by3 mt-6">

                                <img className="platformImage" alt="platformImage" src={this.state.activeImage} />
                                
                            </figure>

                            <div className="content">

                                {this.state.activeDescription}

                            </div>

                            <div className="container">

                                <div className="tabs">

                                    <ul>

                                        {

                                            this.state.features.map((feature, index) => {

                                                return (

                                                    <li key={index} className={this.state.activeId === index ? "is-active" : ""} onMouseEnter={() => this.changeImage(feature.image, index, feature.description)}>
        
                                                        <p className="icon is-small">

                                                            ICON_HERE

                                                            {/*<i className={feature.icon}></i>*/}

                                                        </p>

                                                        <p>{t(feature.title)}</p>

                                                    </li>

                                                )

                                            })

                                        }
                                    
                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                </>

            )

        }

    }

export default withTranslation()(Section3)