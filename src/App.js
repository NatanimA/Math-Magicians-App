// eslint-disable-next-line
import React,{ Component } from 'react';
// eslint-disable-next-line
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Quotes from './components/Quotes';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';

class App extends Component {
  // eslint-disable-next-line
  render() {
    return (
      <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
        
      </div>
    );
  }
}

export default App;
