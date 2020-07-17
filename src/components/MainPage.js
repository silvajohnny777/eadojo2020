import React from 'react'
import PlatformPresentation from '../actionComponents/PlatformPresentation'

    class MainPage extends React.Component {

        constructor() {

            super()

            this.state = {
                items: [
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/certificate.png',
                        description: 'nice_text_here',
                    },
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/edit-property.png',
                        description: 'nice_text_here',
                    },
                    {
                        icon: 'https://img.icons8.com/nolan/64/000000/upload-to-cloud.png',
                        description: 'nice_text_here',
                    },
                ]
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

                                        Create online courses for free

                                    </div>

                                    <div className="mainPagePresentationDescription">



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

                                            <div className="mainPageBoxInfoDescription">

                                                {item.description}

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

                                <div className="mainPageThirdSectionRightImage">

                                    

                                </div>

                            </div>

                        </div>

                    </div>

                    <PlatformPresentation />

                </>

            )

        }

    }

export default MainPage;