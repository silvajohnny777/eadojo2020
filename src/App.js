import React from 'react';
import './App.scss';
import './AppMobile.scss';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Cookies from 'universal-cookie';

import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Companies from './components/pages/Companies'
import MainPageLoading from './actionComponents/MainPageLoading'
import PopUpCookie from './components/PopUpCookie'

import PageNotFound from './components/PageNotFound'

class App extends React.Component {

  constructor() {

    super()

    this.state = {
      loading: false,
      userLanguage: '',
      activeLanguage: '',
      languages: [],
      exibeInfoCookie: false,
    }

  }

  componentWillMount() {

    var url = window.location.href.split("/")
    var lang = url[url.length - 1]

    this.setState({
      loading: true,
      userLanguage: lang,
    })

  }

  componentDidMount() {
            
    fetch('http://server.ead.vairli.com/public/api/helpers/languages/'+this.state.userLanguage)
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

            setTimeout(
              () => this.setState({ exibeInfoCookie: true }), 
              3000
            );
            

    const cookies = new Cookies();
 
    cookies.set('language', this.state.userLanguage, { path: '/' });
    console.log('language >' +cookies.get('language')); // Pacman

  }

  removeInfoCookie = () => {

    this.setState({
      exibeInfoCookie: false
    })

  }

  render() {

    return (

      this.state.loading ? 

        <MainPageLoading />

      :

      <>

        {

          this.state.exibeInfoCookie &&

            <PopUpCookie removeInfoCookie={this.removeInfoCookie} language={this.state.languages} />

        }
      
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar language={this.state.languages} languageId={this.state.userLanguage} />
          <Switch>
            <Route path={"/"+this.state.userLanguage} render={() => <MainPage language={this.state.languages} />} exact />
            <Route path={"/"+ this.state.userLanguage +"/companies"} render={() => <Companies language={this.state.languages} />} />
            <Route render={() => <PageNotFound language={this.state.languages} />} />
          </Switch>
        </BrowserRouter>

      </>

    )

  }

}

export default App;
