import React from 'react'
import PlatformPresentation from '../actionComponents/PlatformPresentation'
import PlatformCourseCreation from '../actionComponents/PlatformCourseCreation'
import { withNamespaces } from 'react-i18next';

//import Stats from '../images/palmHands.gif'

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
                exibeInfoCookie: false
            }

        }

        componentWillMount() {

            this.setState({
                language: this.props.language,
                items: [
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/certificate.png',
                        title: 'WEBSITE_TEXT_TEACHERS',
                        description: 'mobile_description',
                    },
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/edit-property.png',
                        title: 'WEBSITE_TEXT_SCHOOLS',
                        description: 'mobile_description',
                    },
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/upload-to-cloud.png',
                        title: 'WEBSITE_TEXT_COMPANIES',
                        description: 'mobile_description',
                    },
                ],
                offers: [
                    {
                        image: OfferStats,
                        title: 'WEBSITE_TEXT_STATS',
                        description: 'WEBSITE_TEXT_STATS_DESCRIPTION',
                    },
                    {
                        image: OfferCustomizable,
                        title: 'WEBSITE_TEXT_CUSTOMIZABLE',
                        description: 'WEBSITE_TEXT_CUSTOMIZABLE_DESCRIPTION',
                    },
                    {
                        image: OfferBusiness,
                        title: 'WEBSITE_TEXT_BUSINESS',
                        description: 'WEBSITE_TEXT_BUSINESS_DESCRIPTION',
                    },
                ],
            })

        }

        componentDidMount() {

        }

        render() {

            const { t } = this.props

            return (

                <>

                <section className="hero is-large firstSectionContainer">

                    <div className="hero-body firstSectionContent">

                        <div className="container firstSectionTextContent">

                            <h1 className="title firstSectionTextContentTitle">

                                {t('PLATFORM_NAME')}

                            </h1>

                            <h1 className="title firstSectionTextContentTitle">

                                {t('WEBSITE_TEXT_THE_TOOL_TO_TEACH_ONLINE')}

                            </h1>

                            <h2 className="subtitle firstSectionTextContentSubtitle">

                                {t('WEBSITE_TEXT_YOUR_KNOWLED_TO_THE_WHOLE_WORLD')}

                            </h2>
                            
                            <button className="button is-medium is-rounded firstSectionTextContentButton">

                                <a className="firstSectionTextContentButtonText" href="http://panel.eadojo.com/register">{t('TEXT_SIGNUP')}</a>

                            </button>

                        </div>

                    </div>

                </section>

                <div className="container secondSectionInfoBoxContainer">

                    <div className="box secondSectionInfoBox">

                    <h1 className="title secondSectionInfoBoxTitle">
                        
                        {t('TEXT_WEBSITE_MADE_FOR_YOU')}
                        
                    </h1>

                    <article className="media columns">

                           {

                                this.state.items.map((item, index) => {

                                    return (

                                        <div key={index} className="column mainPageBoxInfo">

                                            <div className="mainPageBoxInfoIcon">

                                                <img alt="icon" src={item.icon} />

                                            </div>

                                            <div className="mainPageBoxInfoText">

                                                <div className="mainPageBoxInfoTitle">

                                                    {t(item.title)}

                                                </div>

                                                <div className="mainPageBoxInfoDescription">

                                                    {t(item.description)}

                                                </div>

                                            </div>

                                        </div>

                                    )

                                })

                            }

                            </article>

                    </div>

                </div>

                {/*

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

                                        <a className="mainPagePresentationButton" href="http://panel.ead.vairli.com/#/register">

                                            {t('TEXT_SIGNUP')}

                                        </a>

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

                                                    {t(item.title)}

                                                </div>

                                                <div className="mainPageBoxInfoDescription">

                                                    {t(item.description)}

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

                    */}

                    <PlatformCourseCreation />

                    <PlatformPresentation />

                    {/*

                    <div className="mainOffersContainer">

                            {

                                this.state.offers.map((offer, index) => {

                                    return (

                                        <div key={index} className={index % 2 ? "mainOffersContent reverse" : "mainOffersContent"}>
                            
                                            <div className="mainOffersContentText">

                                                <div className="mainOfferTitle">
                
                                                    {t(offer.title)}

                                                </div>

                                                <div className="mainOfferTextBar" />

                                                <div className="mainOfferDescription">

                                                    {t(offer.description)}

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

                    */}

                    <div class="container helpSectionContainer">
                        
                        <div class="helpSectionContent">

                            <h1 className="title firstSectionTextContentTitle">

                                {t('WEBSITE_TEXT_NEED_HELP')}

                            </h1>

                            <h2 className="subtitle firstSectionTextContentSubtitle">

                                {t('WEBSITE_TEXT_NEED_HELP_DESCRIPTION')}

                            </h2>

                            <div className="button mainPageTextButton">

                                {t('WEBSITE_TEXT_FAQ')}

                            </div>

                        </div>

                    </div>

                    {/*

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

                                        {t('WEBSITE_TEXT_FAQ')}
                                        
                                        <i className="fas iconButon fa-chevron-right"></i>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    */}

                    <div className="mainPageTalkWithUsContainer">

                        <div className="mainPageTalkWithUsContent">

                            <div className="mainPageTalkWithUs">

                                {t('WEBSITE_TEXT_EMAIL')}

                            </div>

                        </div>

                    </div>

                    <footer class="footer">
                        <div class="content has-text-centered">
                            <p>
                            Footer
                            </p>
                        </div>
                    </footer>

                </>

            )

        }

    }

    export default withNamespaces()(MainPage);