import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next';

    interface SectionBoxProps extends WithTranslation {

    }

    interface SectionBoxState {
        domain: string
    }

    class SectionBox extends React.Component<SectionBoxProps, SectionBoxState> {

        constructor(props: SectionBoxProps) {

            super(props)

            this.state = {
                domain: ''
            }

        }

        handleChange = (e: any) => {

            this.setState({
                domain: e.target.value
            })

        }

        render() {

            const { t } = this.props

            return (

                <div className="container boxDomain">

                    <div className="box">
                        
                        <div className="columns is-vcentered">

                            <div className="column is-7">

                                <input className="input" type="text" placeholder="Digite o nome perfeito para a sua escola" onChange={(e: any) => this.handleChange(e)} value={this.state.domain} />

                            </div>

                            <div className="column">

                                .eadojo.com

                            </div>

                            <div className="column">

                                <div className="buttons boxDomainButtons">
                                    
                                    <a className={`button is-primary ${this.state.domain.length > 2 ? '' : 'block'}`} href={this.state.domain ? `https://panel.eadojo.com/register?domain=${this.state.domain}.eadojo.com` : ``}>{t('SEARCH_AVAILABILITY')}</a>
                                    
                                </div>

                            </div>
                            
                        </div>

                    </div>

                </div>

            )

        }

    }

export default withTranslation()(SectionBox);