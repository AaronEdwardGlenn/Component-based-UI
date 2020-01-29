import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';
import { character1, character2, character3, character4, character5, character6, character7, character8 } from '../characters';





class App extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Header />
        <Character data={character1}/>
        <Character data={character2}/>
        <Character data={character3}/>
        <Character data={character4}/>
        <Character data={character5}/>
        <Character data={character6}/>
        <Character data={character7}/>
        <Character data={character8}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
