import React from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'

interface PricingProps extends WithTranslation {

}

interface PricingState {

}

    class Pricing extends React.Component<PricingProps, PricingState> {

        constructor(props: PricingProps) {

            super(props)

            this.state = {}
        
        }

        render() {

            return (

                <>

                    PRICING

                </>

            )

        }

    }

export default withTranslation()(Pricing)