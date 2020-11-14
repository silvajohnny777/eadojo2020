import React from 'react'
import { withNamespaces } from 'react-i18next';

    class Pricing extends React.Component {

        constructor() {

            super()

            this.state = {
                plans: [
                    {
                        'name': 'CUSTOMIZED_PLAN_TITLE',
                        'price': 'CUSTOMIZED_PLAN_PRICE',
                        'functionalities': [
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_1',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_2',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_3',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_4',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_5',
                        ]
                    },
                    {
                        'name': 'PRO_PLAN_TITLE',
                        'price': 'PRO_PLAN_PRICE',
                        'functionalities': [
                            'PRO_PLAN_FUNCTIONALITY_1',
                            'PRO_PLAN_FUNCTIONALITY_2',
                            'PRO_PLAN_FUNCTIONALITY_3',
                            'PRO_PLAN_FUNCTIONALITY_4',
                            'PRO_PLAN_FUNCTIONALITY_5',
                        ]
                    },
                    {
                        'name': 'BASIC_PLAN_TITLE',
                        'price': 'BASIC_PLAN_PRICE',
                        'functionalities': [
                            'BASIC_PLAN_FUNCTIONALITY_1',
                            'BASIC_PLAN_FUNCTIONALITY_2',
                            'BASIC_PLAN_FUNCTIONALITY_3',
                            'BASIC_PLAN_FUNCTIONALITY_4',
                            'BASIC_PLAN_FUNCTIONALITY_5',
                        ]
                    },
                    {
                        'name': 'FREE_PLAN_TITLE',
                        'price': 'FREE_PLAN_PRICE',
                        'functionalities': [
                            'FREE_PLAN_FUNCTIONALITY_1',
                            'FREE_PLAN_FUNCTIONALITY_2',
                            'FREE_PLAN_FUNCTIONALITY_3',
                            'FREE_PLAN_FUNCTIONALITY_4',
                            'FREE_PLAN_FUNCTIONALITY_5',
                        ]
                    }
                ]
            }

        }

        render() {

            const { t } = this.props

            return (

                <>

                    <div className="container is-fluid mt-6">

                        <div className="content has-text-centered">

                            <h2 className="title is-2 has-text-centered">

                                {t('WEBSITE_TEXT_PRICE_TITLE')}

                            </h2>

                            <p className="subtitle mt-2">

                                {t('WEBSITE_TEXT_PRICE_DESCRIPTION')}

                            </p>

                        </div>

                    </div>

                    <div className="container is-fluid mt-6">

                        <div className="has-text-centered plans">

                            {

                                this.state.plans.map((plan) => {

                                    return (

                                        <div className={`card ${plan.name.toLowerCase() === 'pro' ? 'recommended' : ''}`}>

                                            <div className="card-content">
                                                
                                                <div className="media">

                                                    <div className="media-content has-text-left">

                                                        <p className="title is-4">{t(plan.name)}</p>

                                                        <p className="title is-2">{t(plan.price)}</p>

                                                        <button className="button is-fullwidth has-text-left is-medium">

                                                            {t('WEBSITE_TEXT_SELECT')}

                                                        </button>
                                                        
                                                    </div>

                                                </div>

                                                <hr />

                                                <div className="content has-text-left">

                                                    {

                                                        plan.functionalities.map((functionality) => {

                                                            return (

                                                                <p>

                                                                    <span className="icon is-small">
                                        
                                                                        <i className="fas fa-check"></i>
                                        
                                                                    </span>

                                                                    <span className="ml-2">{t(functionality)}</span>
                                                                
                                                                </p>

                                                            )

                                                        })

                                                    }

                                                </div>

                                            </div>
                                            
                                        </div>

                                    )

                                })

                            }

                        </div>

                    </div>

                </>

            )

        }

    }

export default withNamespaces()(Pricing);