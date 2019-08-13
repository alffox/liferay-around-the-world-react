import React from 'react';
import locationsData from './locations.json';
import './App.css';

import AtwHeader from "./modules/AtwHeader.js";
import AtwFlags from "./modules/AtwFlags.js";

class App extends React.Component {

  render() {
      return (
        <div className="container-fluid">
        <AtwHeader />
        <AtwFlags />
        </div>
      );
    }
   }

export {locationsData};
export default App;