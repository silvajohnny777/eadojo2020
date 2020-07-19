import React from 'react'
import PlatformPresentation from '../actionComponents/PlatformPresentation'

import Stats from '../images/palmHands.gif'

import OfferStats from '../images/offerStats.gif'
import OfferCustomizable from '../images/offerCustomizable.gif'
import OfferBusiness from '../images/business.svg'

    class MainPage extends React.Component {

        constructor() {

            super()

            this.state = {
                items: [
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/certificate.png',
                        title: 'text_here',
                        description: 'mobile_description',
                    },
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/edit-property.png',
                        title: 'text_here',
                        description: 'mobile_description',
                    },
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/upload-to-cloud.png',
                        title: 'text_here',
                        description: 'mobile_description',
                    },
                ],
                offers: [
                    {
                        image: OfferStats,
                        title: 'Stats',
                        description: 'nice_offer_description',
                    },
                    {
                        image: OfferCustomizable,
                        title: 'Customizable',
                        description: 'nice_offer_description',
                    },
                    {
                        image: OfferBusiness,
                        title: 'Business',
                        description: 'nice_offer_description',
                    },
                ],
                text: {
                    'TEXT_CREATE_COURSES_FOR_FREE': 'Create online courses for free'
                }
            }

        }

        render() {

            return (

                <>

                    <div className="mainPageContainer">

                        <div className="mainPageContent">

                            <div className="mainPageContentLeft">



                            </div>

                            <div className="mainPageContentRight">

                                <div className="mainPagePresentation">

                                    <div className="mainPagePresentationTitle">

                                        {this.state.text.TEXT_CREATE_COURSES_FOR_FREE}

                                    </div>

                                    <div className="mainPagePresentationDescription">

                                        <div className="mainPagePresentationButton">

                                            Sign up

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

                                    Everything you need

                                </div>

                                <div className="mainPageThirdSectionLefdescription">

                                    On the palm of your hand

                                </div>

                            </div>

                            <div className="mainPageThirdSectionRight">

                                <img className="mainPageThirdSectionRightImage" alt="phoneGif" src={Stats} />

                                    


                            </div>

                        </div>

                    </div>

                    <PlatformPresentation />

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

                                        Do you need help?

                                    </div>

                                </div>

                                <hr className="mainPageTextBar" />

                                <div className="mainPageTextDescription">

                                    If you have any questions, our team can help you. Ask something!

                                </div>

                                <div className="mainPageTextButtonContainer">

                                    <div className="mainPageTextButton">

                                        Start chat
                                        
                                        <i className="fas iconButon fa-chevron-right"></i>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="mainPageTalkWithUsContainer">

                        <div className="mainPageTalkWithUsContent">

                            <div className="mainPageTalkWithUs">

                                contact@eadojo.com

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

export default MainPage;