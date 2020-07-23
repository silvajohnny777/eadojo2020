import React from 'react';
import './App.scss';
import './AppMobile.scss';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Companies from './components/pages/Companies'
import MainPageLoading from './actionComponents/MainPageLoading'

import PageNotFound from './components/PageNotFound'

class App extends React.Component {

  constructor() {

    super()

    this.state = {
      loading: false,
      userLanguage: '',
      activeLanguage: '',
      languages: [],
    }

  }

  componentWillMount() {

    this.setState({
      loading: true,
      userLanguage: window.navigator.userLanguage || window.navigator.language === 'en-US' ? 'en' : window.navigator.userLanguage || window.navigator.language
    })

  }

  componentDidMount() {
            
    fetch('https://server.ead.vairli.com/public/api/helpers/languages/'+this.state.userLanguage)
        .then(response => response.json())
            .then(data =>
              this.setState({
                languages: data,
                loading: false
              })
            )
            .catch((error) => {
              console.error('Error:', error)
              this.setState({
                  loading: this.state.languageEn && false,
                  error: true,
              })
            });

  }

  render() {

    return (

      this.state.loading ? 

        <MainPageLoading />

      :
      
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar language={this.state.languages} />
          <Switch>
            <Route path="/" render={() => <MainPage language={this.state.languages} />} exact />
            <Route path="/companies" render={() => <Companies language={this.state.languages} />} />
            <Route render={() => <PageNotFound language={this.state.languages} />} />
          </Switch>
        </BrowserRouter>

    )

  }

}

export default App;
