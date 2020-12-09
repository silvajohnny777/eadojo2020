import React from 'react';
import './App.scss';
import './AppMobile.scss';
import 'bulma/css/bulma.css'
import { BrowserRouter , Route , Switch , useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';
import PopUpCookie from './components/PopUpCookie'

//import { i18nStart } from './i18n'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import Companies from './components/pages/Companies'
import Pricing from './components/pages/Pricing'
import MainPageLoading from './actionComponents/MainPageLoading'

import PageNotFound from './components/PageNotFound'



import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

//import { pt } from './locales/pt-BR.js';

// the translations

const resources = {
  en: {
    translation: window.languageWebsite
  }
};

i18n
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

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

    //i18nStart('')

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
            <Route path={"/:language?/pricing"} children={<Pricing />} />
            <Route path={"/:language"} exact children={<Child />} />
            <Route path={"/:language?/:id?"} children={<Child />} />
            <Route render={() => <PageNotFound language={this.state.languages} />} />
          </Switch>
          <Footer />
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

      //i18nStart(language)

    }

    var Arraylanguage = []

    switch(id) {
      default:
        return <MainPage language={Arraylanguage} />
      case 'companies':
        return <Companies language={[]} />
      case 'pricing':
        return <Pricing />
    }

  }

export default App;
