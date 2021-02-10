import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next';

interface Section2Props extends WithTranslation {
    
}

interface Section2State {

}

    class Section2 extends React.Component<Section2Props, Section2State> {

        constructor(props: Section2Props) {

            super(props)

            this.state = {}

        }

        render() {

            const { t } = this.props

            return (

                <>

                    <div className="section creation">

                        <div className="container is-hd has-text-centered">

                            <h2 className="subtitle">

                                {t('TEXT_WEBSITE_CREATING_A_COURSE_IS_SIMPLE')}

                            </h2>

                            <div className="columns creation">

                                <div className="column">

                                    <div className="creationIcon">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>

                                    </div>

                                    <h2 className="title">{t('WEBSITE_TEXT_CREATE_NEW_COURSE')}</h2>

                                    <div className="subtitle is-6">

                                        {t('WEBSITE_TEXT_CREATE_NEW_COURSE_DESCRIPTION')}

                                    </div>

                                </div>

                                <div className="column">

                                    <div className="creationIcon">
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-paragraph" viewBox="0 0 16 16">
                                            <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5z"/>
                                        </svg>

                                    </div>

                                    <h2 className="title">{t('WEBSITE_TEXT_CREATE_COURSE_NAME_DESCRIPTION')}</h2>

                                    <div className="subtitle is-6">

                                        {t('WEBSITE_TEXT_CREATE_COURSE_NAME_DESCRIPTION_DESCRIPTION')}

                                    </div>

                                </div>

                                <div className="column">

                                    <div className="creationIcon">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                                            <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                                        </svg>

                                    </div>

                                    <h2 className="title">{t('WEBSITE_TEXT_CREATE_WRITE_COURSE_CONTENT')}</h2>

                                    <div className="subtitle is-6">

                                        {t('WEBSITE_TEXT_CREATE_WRITE_COURSE_CONTENT_DESCRIPTION')}

                                    </div>

                                </div>

                                <div className="column">

                                    <div className="creationIcon">
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-share-fill" viewBox="0 0 16 16">
                                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                                        </svg>

                                    </div>

                                    <h2 className="title">{t('WEBSITE_TEXT_CREATE_SHARE_WITH_THE_WORLD')}</h2>

                                    <div className="subtitle is-6">

                                        {t('WEBSITE_TEXT_CREATE_SHARE_WITH_THE_WORLD_DESCRIPTION')}

                                    </div>

                                </div>

                            </div>

                            <div className="buttons">

                                <a className="button" href="https://panel.eadojo.com/register">

                                    {t('WEBSITE_TEXT_SIGN_UP')}

                                </a>

                            </div>

                        </div>

                    </div>

                </>

            )

        }

    }

export default withTranslation()(Section2)