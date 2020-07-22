import React from 'react'
import Loader from '../images/loader.svg'

class MainPageLoading extends React.Component {

    constructor() {
  
      super()
  
      this.state = {
          
      }
  
    }
  
    render() {
  
      return (
          
        <div>

            <img alt="loader" className="loaderTag" src={Loader} />

        </div>
  
      )
  
    }
  
  }
  
  export default MainPageLoading;