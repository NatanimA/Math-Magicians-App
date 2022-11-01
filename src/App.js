// eslint-disable-next-line
import React,{ Component } from 'react';
// eslint-disable-next-line
import { Route,Routes } from 'react-router-dom';
// eslint-disable-next-line
import Calculator from './components/Calculator';
// eslint-disable-next-line
import NavBar from './components/NavBar';
// eslint-disable-next-line
import Quotes from './components/Quotes';
// eslint-disable-next-line
import Home from './components/Home';

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
