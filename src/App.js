import React from 'react';
import './App.scss';
import './AppMobile.scss';
import { BrowserRouter , Route , Switch , useParams } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { i18nStart } from './i18n'

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

    i18nStart('en')

  }

  componentDidMount() {

    const cookies = new Cookies();
 
    cookies.set('language', this.state.userLanguage, { path: '/' });

  

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

        {

          this.state.exibeInfoCookie &&

            <PopUpCookie removeInfoCookie={this.removeInfoCookie} language={this.state.languages} />

        }
      
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar language={this.state.languages} languageId={this.state.userLanguage} />
          <Switch>
            <Route path={"/:language/:id"} children={<Child />} />
            <Route path={"/:language"} children={<Child />} />
            <Route render={() => <PageNotFound language={this.state.languages} />} />
          </Switch>
        </BrowserRouter>

      </>

    )

  }

}

  function Child() {

    let { id, language } = useParams();

    console.log('pagina > ' +id + ' language > ' +language)

    i18nStart(language)

    var Arraylanguage = []

    switch(id) {
      default:
        return <MainPage language={Arraylanguage} />
      case 'companies':
        return <Companies language={[]} />
    }

  }

export default App;
