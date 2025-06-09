import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import Section3 from "./components/Section3";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";


const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen w-[90%] mx-auto">
      <Header />
      <Section1 />
      <Section2/>
      <Section3 />
    </div>
  );
};

export default App;
