import React from 'react'
import { withNamespaces } from 'react-i18next';

    class PlatformCourseCreation extends React.Component {

        constructor() {

            super() 

            this.state = {
                courseSteps: [
                    {
                        title: 'WEBSITE_TEXT_CREATE_ACCOUNT_3_MIN',
                        description: 'WEBSITE_TEXT_CREATE_ACCOUNT_3_MIN_DESCRIPTION',
                        icon: 'https://img.icons8.com/cotton/2x/create-new--v3.png',
                    },
                    {
                        title: 'WEBSITE_TEXT_CREATE_NEW_COURSE',
                        description: 'WEBSITE_TEXT_CREATE_NEW_COURSE_DESCRIPTION',
                        icon: 'https://img.icons8.com/cotton/2x/plus--v3.png',
                    },
                    {
                        title: 'WEBSITE_TEXT_CREATE_COURSE_NAME_DESCRIPTION',
                        description: 'WEBSITE_TEXT_CREATE_COURSE_NAME_DESCRIPTION_DESCRIPTION',
                        icon: 'https://img.icons8.com/doodle/2x/tag-window.png',
                    },
                    {
                        title: 'WEBSITE_TEXT_CREATE_WRITE_COURSE_CONTENT',
                        description: 'WEBSITE_TEXT_CREATE_WRITE_COURSE_CONTENT_DESCRIPTION',
                        icon: 'https://img.icons8.com/ios-filled/2x/table-of-content.png',
                    },
                    {
                        title: 'WEBSITE_TEXT_CREATE_SHARE_WITH_THE_WORLD',
                        description: 'WEBSITE_TEXT_CREATE_SHARE_WITH_THE_WORLD_DESCRIPTION',
                        icon: 'https://img.icons8.com/cotton/2x/cloud-share-symbol.png',
                    },
                ]
            }

        }

        render() {

            const { t } = this.props

            return (

                <div className="container is-fluid creation">

                    <div className="content mt-6">

                        <h2 className="subtitle has-text-centered">
                            
                            {t('TEXT_WEBSITE_CREATING_A_COURSE_IS_SIMPLE')}
                            
                        </h2>

                        <div className="columns is-mobile is-vcentered is-centered">

                            {

                                this.state.courseSteps.map((step, index) => {

                                    return (

                                        <>

                                        <div key={index} className="column">

                                            <figure class="image is-64x64">

                                                <img alt="iconImage" src={step.icon} />

                                            </figure>

                                            <h4 className="title is-5">
                                                
                                                {t(step.title)}
                                                
                                            </h4>

                                            <p className="subtitle is-6">
                                                
                                                {t(step.description)}
                                                
                                            </p>

                                        </div>

                                        {

                                            index < this.state.courseSteps.length - 1 &&

                                                <i className="fas fa-arrow-right mr-4"></i>

                                        }

                                        </>

                                    )

                                })

                            }

                        </div>
                        
                    </div>

                </div>

            )

        }

    }

export default withNamespaces()(PlatformCourseCreation);