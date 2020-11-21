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
                        'id': 0,
                        'id_name': 'CUSTOMIZED',
                        'functionalities': [
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_1',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_2',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_3',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_4',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_5',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_6',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_7',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_8',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_9',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_10',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_11',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_12',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_13',
                            'CUSTOMIZED_PLAN_FUNCTIONALITY_14',
                        ]
                    },
                    {
                        'name': 'PRO_PLAN_TITLE',
                        'price': 'PRO_PLAN_PRICE',
                        'id': 1,
                        'id_name': 'PRO',
                        'functionalities': [
                            'PRO_PLAN_FUNCTIONALITY_1',
                            'PRO_PLAN_FUNCTIONALITY_2',
                            'PRO_PLAN_FUNCTIONALITY_3',
                            'PRO_PLAN_FUNCTIONALITY_4',
                            'PRO_PLAN_FUNCTIONALITY_5',
                            'PRO_PLAN_FUNCTIONALITY_6',
                            'PRO_PLAN_FUNCTIONALITY_7',
                            'PRO_PLAN_FUNCTIONALITY_8',
                            'PRO_PLAN_FUNCTIONALITY_9',
                            'PRO_PLAN_FUNCTIONALITY_10',
                            'PRO_PLAN_FUNCTIONALITY_11',
                            'PRO_PLAN_FUNCTIONALITY_12',
                            'PRO_PLAN_FUNCTIONALITY_13',
                            'PRO_PLAN_FUNCTIONALITY_14',
                        ]
                    },
                    {
                        'name': 'BASIC_PLAN_TITLE',
                        'price': 'BASIC_PLAN_PRICE',
                        'id': 2,
                        'id_name': 'BASIC',
                        'functionalities': [
                            'BASIC_PLAN_FUNCTIONALITY_1',
                            'BASIC_PLAN_FUNCTIONALITY_2',
                            'BASIC_PLAN_FUNCTIONALITY_3',
                            'BASIC_PLAN_FUNCTIONALITY_4',
                            'BASIC_PLAN_FUNCTIONALITY_5',
                            'BASIC_PLAN_FUNCTIONALITY_6',
                            'BASIC_PLAN_FUNCTIONALITY_7',
                            'BASIC_PLAN_FUNCTIONALITY_8',
                            'BASIC_PLAN_FUNCTIONALITY_9',
                            'BASIC_PLAN_FUNCTIONALITY_10',
                            'BASIC_PLAN_FUNCTIONALITY_11',
                            'BASIC_PLAN_FUNCTIONALITY_12',
                            'BASIC_PLAN_FUNCTIONALITY_13',
                            'BASIC_PLAN_FUNCTIONALITY_14',
                        ]
                    },
                    {
                        'name': 'FREE_PLAN_TITLE',
                        'price': 'FREE_PLAN_PRICE',
                        'id': 3,
                        'id_name': 'FREE',
                        'functionalities': [
                            'FREE_PLAN_FUNCTIONALITY_1',
                            'FREE_PLAN_FUNCTIONALITY_2',
                            'FREE_PLAN_FUNCTIONALITY_3',
                            'FREE_PLAN_FUNCTIONALITY_4',
                            'FREE_PLAN_FUNCTIONALITY_5',
                            'FREE_PLAN_FUNCTIONALITY_6',
                            'FREE_PLAN_FUNCTIONALITY_7',
                            'FREE_PLAN_FUNCTIONALITY_8',
                            'FREE_PLAN_FUNCTIONALITY_9',
                            'FREE_PLAN_FUNCTIONALITY_10',
                            'FREE_PLAN_FUNCTIONALITY_11',
                            'FREE_PLAN_FUNCTIONALITY_12',
                            'FREE_PLAN_FUNCTIONALITY_13',
                            'FREE_PLAN_FUNCTIONALITY_14',
                        ]
                    }
                ]
            }

        }

        componentWillMount() {

           window.scrollTo(0, 0)

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

                    <div className="container is-fluid mt-6 mb-6">

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

                                                        <a href={`http://panel.eadojo.com/register?plan=${plan.id_name}`} className="button is-fullwidth has-text-left is-medium">

                                                            {t('WEBSITE_TEXT_SELECT')}

                                                        </a>
                                                        
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