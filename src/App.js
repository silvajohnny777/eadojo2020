import React from 'react';
import './App.scss';
import './AppMobile.scss';
import { BrowserRouter , Route , Switch , Link , useParams } from 'react-router-dom';
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

    const str = window.location.href;

    var mySubString = str.substring(
      str.lastIndexOf(":") + 1, 
      str.lastIndexOf("/")
    );

  }

  componentDidMount() {
            
            

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
            <Route path={"/:language/:id"} children={<Child />} />
            <Route render={() => <PageNotFound language={this.state.languages} />} />
          </Switch>
        </BrowserRouter>

      </>

    )

  }

}

  function Child() {

    let { id, language } = useParams();

    var Arraylanguage = []

    fetch('http://server.ead.vairli.com/public/api/helpers/languages/'+language)
        .then(response => response.json())
            .then(data =>
              Arraylanguage.push(data)
            )
            .catch((error) => {
              console.error('Error:', error)
              
            });

            console.log(Arraylanguage[0])

    switch(id) {
      case 'home':
        return <MainPage language={Arraylanguage} />
      case 'companies':
        return <Companies language={[]} />
    }

    return (
      <>
        {id}
        {language}
      </>
    )

  }

export default App;
