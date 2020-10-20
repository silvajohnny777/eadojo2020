import React from 'react';
import './App.scss';
import './AppMobile.scss';
import 'bulma/css/bulma.css'
import { BrowserRouter , Route , Switch , useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import PopUpCookie from './components/PopUpCookie'

import { i18nStart } from './i18n'
import i18n from "i18next";

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
      exibeInfoCookie: false,
    }

  }

  componentWillMount() {

    i18nStart('')

  }

  componentDidMount() {

    setTimeout(
      function() {
          this.setState({ 
            exibeInfoCookie: true });
      }
      .bind(this),
      3000
    );

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
            
      <PopUpCookie removeInfoCookie={this.removeInfoCookie} show={this.state.exibeInfoCookie} />

        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar language={this.state.languages} languageId={this.state.userLanguage} />
          <Switch>
            <Route path={"/:language"} exact children={<Child />} />
            <Route path={"/:language?/:id?"} children={<Child />} />
            <Route render={() => <PageNotFound language={this.state.languages} />} />
          </Switch>
        </BrowserRouter>

      </>

    )

  }

}

  function Child() {

    const cookies = new Cookies();

    let { id, language } = useParams();

    if(i18n.isInitialized){

    console.log('pagina > ' +id + ' language > ' +language, i18n)
 }
    cookies.set('language', language, { path: '/' });

    if(!i18n.isInitialized) {

      i18nStart(language)

    }

    var Arraylanguage = []

    switch(id) {
      default:
        return <MainPage language={Arraylanguage} />
      case 'companies':
        return <Companies language={[]} />
    }

  }

export default App;
