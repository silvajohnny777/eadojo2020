import React from 'react'
import { WithTranslation, withTranslation } from 'react-i18next';
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import SectionBox from './components/SectionBox'
//import PropTypes from "prop-types";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface MainPageProps extends WithTranslation {
    
}

interface MainPageState {
    languageId: any
}

interface RouteParams {
    language?: string
}

/*

const propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

*/

    class MainPage extends React.Component<RouteComponentProps<RouteParams> & MainPageProps, MainPageState> {

        constructor(props: RouteComponentProps & MainPageProps) {

            super(props)

            this.state = {
                languageId: this.props.match.params.language
            }

        }

        render() {

            return (

                <>

                    <Section1 />

                    <SectionBox />

                    <Section2 />

                    <Section3 />

                    <Section4 />

                    <Section5 />

                    <Section6 languageId={this.state.languageId} />

                </>

            )

        }

    }

export default withRouter(withTranslation("translation")(MainPage))