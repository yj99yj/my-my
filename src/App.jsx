import React from 'react';
import './App.css';  // Assuming the CSS file is correct
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Main />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
