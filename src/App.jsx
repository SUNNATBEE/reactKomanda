
import React from 'react'
import Header from './components/Header'
import Main from './components/Main';
import Card from './components/Card';
import Section3 from './components/Section3';

import React from 'react';
import Header from './components/Header';
import Section1 from './components/Section1';


const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen w-[90%] mx-auto">
      <Header />

      <Main/>
      <Section3/>
      <Card />


      <Section1 />

    </div>
  );
};

export default App;
