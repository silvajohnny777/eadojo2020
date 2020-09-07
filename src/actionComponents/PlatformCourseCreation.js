import React from 'react'
import { withNamespaces } from 'react-i18next';

    class PlatformCourseCreation extends React.Component {

        constructor() {

            super() 

            this.state = {
                courseSteps: [
                    {
                        title: 'WEBSITE_TEXT_CREATE_ACCOUNT_3_MIN',
                        image: 'WEBSITE_TEXT_CREATE_ACCOUNT_3_MIN_DESCRIPTION',
                        description: 'WEBSITE_TEXT_CREATE_ACCOUNT_3_MIN_ICON',
                    },
                    {
                        title: 'WEBSITE_TEXT_CREATE_NEW_COURSE',
                        image: 'WEBSITE_TEXT_CREATE_NEW_COURSE_DESCRIPTION',
                        description: 'WEBSITE_TEXT_CREATE_NEW_COURSE_ICON',
                    },
                    {
                        title: 'WEBSITE_TEXT_CREATE_COURSE_NAME_DESCRIPTION',
                        image: 'WEBSITE_TEXT_CREATE_COURSE_NAME_DESCRIPTION_DESCRIPTION',
                        description: 'WEBSITE_TEXT_CREATE_COURSE_NAME_DESCRIPTION_ICON',
                    },
                    {
                        title: 'WEBSITE_TEXT_CREATE_WRITE_COURSE_CONTENT',
                        image: 'WEBSITE_TEXT_CREATE_WRITE_COURSE_CONTENT_DESCRIPTION',
                        description: 'WEBSITE_TEXT_CREATE_WRITE_COURSE_CONTENT_ICON',
                    },
                    {
                        title: 'WEBSITE_TEXT_CREATE_SHARE_WITH_THE_WORLD',
                        image: 'WEBSITE_TEXT_CREATE_SHARE_WITH_THE_WORLD_DESCRIPTION',
                        description: 'WEBSITE_TEXT_CREATE_SHARE_WITH_THE_WORLD_ICON',
                    },
                ]
            }

        }

        render() {

            const { t } = this.props

            return (

                <div className="container thirdSectionContainer">

                    <div className="thirdSectionContent">

                    <h1 className="title thirdSectionContentTitle">
                        
                        {t('TEXT_WEBSITE_CREATING_A_COURSE_IS_SIMPLE')}
                        
                    </h1>

                    {

                        this.state.courseSteps.map((step) => {

                            return (

                                <div className="columns is-mobile thirdSectionContentColumnContainer">

                                    <div className="column is-mobile thirdSectionContentColumnImage">
                                        
                                        {step.image}

                                    </div>

                                    <div className="column is-mobile thirdSectionContentColumnText">

                                        <h1 className="title is-4 thirdSectionContentTitle">
                                            
                                            {t(step.title)}
                                            
                                        </h1>

                                        <h1 className="subtitle is-6 thirdSectionContentTitle">
                                            
                                            {t(step.description)}
                                            
                                        </h1>

                                    </div>
                                    
                                </div>

                            )

                        })

                    }

                    <button class="button is-rounded">{t('TEXT_SIGNUP')}</button>
                        
                    </div>
                </div>

            )

        }

    }

export default withNamespaces()(PlatformCourseCreation);