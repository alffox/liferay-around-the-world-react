import React from 'react';
import './App.css';

import AtwHeader from "./modules/AtwHeader.js";


const API = 'https://en.wikipedia.org/api/rest_v1/page/summary/Italy'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      description: []
    };
  }

  componentDidMount() {
    fetch(API)
    .then(response =>  response.json())
    .then(resData => {
       //console.log(JSON.stringify(resData))
       //do your logic here       
       //let person = resData.results
       this.setState({
        isLoaded: true,
        description: resData.extract
      }); //this is an asynchronous function
    })
    .catch(
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, description } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <p>{ description }</p>
        <AtwHeader />
        </div>
      );
    }
  }
}

export default App;


