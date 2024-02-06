import React from 'react';
import './App.css';
import Header from './components/header';
import SectionsContact from './components/sections-contact';
import SectionsMissionvision from './components/sections-mission-vision';
import Home from './components/sections-home';
import SectionsPolitics from './components/sections-politics';


function App() {
  return (
  <div>
    <Header/>
    <Home/>
    <SectionsMissionvision/>
    <SectionsPolitics/>
    <SectionsContact/>
  </div>
  );  
}

export default App;
