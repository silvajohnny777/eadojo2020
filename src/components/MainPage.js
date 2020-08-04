import React from 'react'
import PlatformPresentation from '../actionComponents/PlatformPresentation'
import { withNamespaces } from 'react-i18next';

import Stats from '../images/palmHands.gif'

import OfferStats from '../images/offerStats.gif'
import OfferCustomizable from '../images/offerCustomizable.gif'
import OfferBusiness from '../images/business.svg'

    class MainPage extends React.Component {

        constructor() {

            super()

            this.state = {
                language: [],
                items: [
                ],
                offers: [],
                loader: false,
            }

        }

        componentWillMount() {

            this.setState({
                language: this.props.language,
                items: [
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/certificate.png',
                        title: this.props.language.WEBSITE_TEXT_CERTIFICATE,
                        description: 'mobile_description',
                    },
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/edit-property.png',
                        title: this.props.language.WEBSITE_TEXT_CUSTOMIZABLE,
                        description: 'mobile_description',
                    },
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/upload-to-cloud.png',
                        title: this.props.language.WEBSITE_TEXT_CLOUD,
                        description: 'mobile_description',
                    },
                ],
                offers: [
                    {
                        image: OfferStats,
                        title: this.props.language.WEBSITE_TEXT_STATS,
                        description: this.props.language.WEBSITE_TEXT_STATS_DESCRIPTION,
                    },
                    {
                        image: OfferCustomizable,
                        title: this.props.language.WEBSITE_TEXT_CUSTOMIZABLE,
                        description: this.props.language.WEBSITE_TEXT_CUSTOMIZABLE_DESCRIPTION,
                    },
                    {
                        image: OfferBusiness,
                        title: this.props.language.WEBSITE_TEXT_BUSINESS,
                        description: this.props.language.WEBSITE_TEXT_BUSINESS_DESCRIPTION,
                    },
                ],
            })

        }

        render() {
            const { t } = this.props

            return (

                <>

                    <div className="mainPageContainer">

                        <div className="mainPageContent">

                            <div className="mainPageContentLeft">



                            </div>

                            <div className="mainPageContentRight">

                                <div className="mainPagePresentation">

                                    <div className="mainPagePresentationTitle">

                                        {t('WEBSITE_TEXT_CREATE_ONLINE_COURSES')}

                                    </div>

                                    <div className="mainPagePresentationDescription">

                                        <div className="mainPagePresentationButton">

                                            {t('TEXT_SIGNUP')}

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="mainPageInformationBox">

                        <div className="mainPageInformationBoxContent">

                            {

                                this.state.items.map((item, index) => {

                                    return (

                                        <div key={index} className="mainPageBoxInfo">

                                            <div className="mainPageBoxInfoIcon">

                                                <img alt="icon" src={item.icon} />

                                            </div>

                                            <div className="mainPageBoxInfoText">

                                                <div className="mainPageBoxInfoTitle">

                                                    {item.title}

                                                </div>

                                                <div className="mainPageBoxInfoDescription">

                                                    {item.description}

                                                </div>

                                            </div>

                                        </div>

                                    )

                                })

                            }

                        </div>

                    </div>

                    <div className="mainPageThirdSectionContainer">

                        <div className="mainPageThirdSectionContent">

                            <div className="mainPageThirdSectionLeft">

                                <div className="mainPageThirdSectionLeftTitle">

                                    {t('WEBSITE_TEXT_SECTION_TWO')}

                                </div>

                                <div className="mainPageThirdSectionLefdescription">

                                    {t('WEBSITE_TEXT_DESCRIPTION_SECTION_TWO')}

                                </div>

                            </div>

                            <div className="mainPageThirdSectionRight">

                                <img className="mainPageThirdSectionRightImage" alt="phoneGif" src={Stats} />

                                    


                            </div>

                        </div>

                    </div>

                    <PlatformPresentation language={this.state.language} />

                    <div className="mainOffersContainer">

                            {

                                this.state.offers.map((offer, index) => {

                                    return (

                                        <div key={index} className={index % 2 ? "mainOffersContent reverse" : "mainOffersContent"}>
                            
                                            <div className="mainOffersContentText">

                                                <div className="mainOfferTitle">
                
                                                    {offer.title}

                                                </div>

                                                <div className="mainOfferTextBar" />

                                                <div className="mainOfferDescription">

                                                    {offer.description}

                                                </div>
                
                                            </div>

                                            <div className="mainOffersContentImage">
                
                                                <img alt="offer" className="mainOfferImageTag" src={offer.image} />
                
                                            </div>

                                        </div>

                                    )

                                })

                            }

                    </div>

                    <div className="mainPageHelpActionContainer">

                        <div className="mainPageHelpContent">

                            <div className="mainPageHelpText">

                                <div className="mainPageHelpTitle">

                                    <i className="fas fa-comments"></i>

                                    <div className="mainPageHelpTitleString">

                                        {t('WEBSITE_TEXT_NEED_HELP')}

                                    </div>

                                </div>

                                <hr className="mainPageTextBar" />

                                <div className="mainPageTextDescription">

                                    {t('WEBSITE_TEXT_NEED_HELP_DESCRIPTION')}

                                </div>

                                <div className="mainPageTextButtonContainer">

                                    <div className="mainPageTextButton">

                                        {t('WEBSITE_TEXT_NEED_HELP_BUTTON')}
                                        
                                        <i className="fas iconButon fa-chevron-right"></i>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="mainPageTalkWithUsContainer">

                        <div className="mainPageTalkWithUsContent">

                            <div className="mainPageTalkWithUs">

                                {t('WEBSITE_TEXT_EMAIL')}

                            </div>

                        </div>

                    </div>

                    <div className="mainPageFooterContainer">

                        <div className="mainPageFooterContent">

                            FOOTER

                        </div>

                    </div>

                </>

            )

        }

    }

    export default withNamespaces()(MainPage);