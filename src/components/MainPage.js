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
                        icon: 'https://img.icons8.com/plasticine/344/teacher.png',
                        title: 'WEBSITE_TEXT_TEACHERS',
                        description: 'mobile_description',
                    },
                    {
                        icon: 'https://img.icons8.com/fluent/452/school.png',
                        title: 'WEBSITE_TEXT_SCHOOLS',
                        description: 'mobile_description',
                    },
                    {
                        icon: 'https://img.icons8.com/plasticine/344/company.png',
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

            console.log('teste', typeof window.languageWebsite, window.languageWebsite)

        }

        render() {

            const { t } = this.props

            return (

                <>

                <section className="hero is-medium">

                    <div className="hero-body">

                        <div className="container">

                            {

                                //<img className="firstSectionLogoContainer" alt="logoImage" src="http://server.eadojo.com/resources/helpers/logo_inverted.png" />

                            }

                            <h1 className="title has-text-centered">

                                {t('WEBSITE_TEXT_THE_TOOL_TO_TEACH_ONLINE')}

                            </h1>

                            <p className="subtitle">

                                {t('WEBSITE_TEXT_YOUR_KNOWLED_TO_THE_WHOLE_WORLD')}

                            </p>

                            {/*
                            
                                <button className="button is-medium">

                                    <a className="firstSectionTextContentButtonText" href="http://panel.eadojo.com/register">{t('TEXT_SIGNUP')}</a>

                                </button>

                            */}

                        </div>

                    </div>

                </section>

                <div className="container secondSectionInfoBoxContainer">

                    <div className="box secondSectionInfoBox">

                    <h2 className="title secondSectionInfoBoxTitle">
                        
                        {t('TEXT_WEBSITE_MADE_FOR_YOU')}
                        
                    </h2>

                    <article className="media columns">

                           {

                                this.state.items.map((item, index) => {

                                    return (

                                        <div key={index} className="column mainPageBoxInfo">

                                            <div className="mainPageBoxInfoIcon">

                                                <img style={{width: '100px'}} className="mainPageBoxInfoIconImageTag" alt="icon" src={item.icon} />

                                            </div>

                                            <div className="mainPageBoxInfoText">

                                                <p className="mainPageBoxInfoTitle">

                                                    {t(item.title)}

                                                </p>

                                                <p className="mainPageBoxInfoDescription">

                                                    {t(item.description)}

                                                </p>

                                            </div>

                                        </div>

                                    )

                                })

                            }

                            </article>

                    </div>

                </div>

                <div className="container is-fluid info">
                    <div className="columns infoColumn is-vcentered">
                        <div className="column is-one-quarter">
                            <figure className="image">
                                <img src="https://server.eadojo.com/resources/helpers/logo.png" alt="logo" />
                            </figure>
                        </div>
                        <div className="column">
                            <h1 className="title">{t('WEBSITE_TEXT_TRANSFORM_WAY_OF_TEACHING')}</h1>
                            <h2 className="subtitle">
                                {t('WEBSITE_TEXT_BEST_PLATFORM_INFO')}
                            </h2>
                            <div className="buttons">
                                <a href="http://panel.eadojo.com/register"><button className="button">{t('TEXT_SIGNUP')}</button></a>
                            </div>
                        </div>
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

                    <div className="container">
                        
                        <div className="content help">

                            <h2 className="title is-1">

                                <p><i className="fas fa-question-circle mb-4"></i></p>

                                {t('WEBSITE_TEXT_NEED_HELP')}

                            </h2>

                            <hr />

                            <p className="subtitle">

                                {t('WEBSITE_TEXT_NEED_HELP_DESCRIPTION')}

                            </p>

                            <div className="button">

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

                    <div className="container is-fluid contact">
                            
                        <p className="subtitle is-5 has-text-right">

                            {t('WEBSITE_TEXT_EMAIL')}
                            
                        </p>
                        
                    </div>

                    <footer className="footer">
                        <div className="content has-text-centered">
                            <div className="columns">
                                <div className="column">
                                    {t('PLATFORM_NAME')}
                                </div>
                                <div className="column">
                                    Footer
                                </div>
                                <div className="column">
                                    Footer
                                </div>
                                <div className="column">
                                    Footer
                                </div>
                            </div>
                        </div>
                    </footer>

                </>

            )

        }

    }

    export default withNamespaces()(MainPage);