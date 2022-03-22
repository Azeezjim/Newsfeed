import React from "react";
import Topnav from "./components/Topnav/Topnav";
import Leftnav from "./components/Leftnav/Leftnav";
import Rightnav from "./components/Rightnav/Rightnav";
import Cardtop from "./components/Cardtop/Cardtop";
import Profiles from "./components/Profiles/Profiles";
import Cardbody from "./components/Caedbody/Cardbody"; 
import Cardfooter from "./components/Cardfooter/Cardfooter";
import Content from "./components/Content/Content";
import Trending from "./components/Trending/Trending"


function App() {
  return (
    <div className="App bg-gray-50">
        <Topnav />
        <div className="flex justify-between">
          <Leftnav />
          <div className="space-y-4"> 
            <Profiles />
            <div className="flex space-x-5">
              <div>
                <Cardtop />
                <Cardbody />
                <Cardfooter />
              </div>
              <div className="space-y-2">
                <Content />
                <Trending />
              </div>
            </div>
          </div>
          <Rightnav />
        </div>
    </div>
  );
}

export default App;
