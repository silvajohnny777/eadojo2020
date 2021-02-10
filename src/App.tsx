import React from 'react';
import 'bulma/css/bulma.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainPage from './pages/MainPage/MainPage'
import Pricing from './pages/Pricing/Pricing'
import './App.scss';

class App extends React.Component {

  constructor(props: any) {

    super(props)

    this.state = {}

  }

  render() {

    return (

      <>

        <Router /*basename={process.env.PUBLIC_URL}*/>

            <Route path={"/:language"} render={(routeProps: any) => <Navbar {...routeProps} /> } />

              <Switch>
                  
                <Route path={"/:language"} exact render={(routeProps: any) => <MainPage {...routeProps} /> } />
                <Route path={"/:language/pricing"} render={(routeProps) => <Pricing {...routeProps} /> } />

              </Switch>

          </Router>

        </>

    );

  }
}

export default App;
