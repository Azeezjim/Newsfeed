import React from "react";
import Topnav from "./components/Topnav/Topnav";
import Leftnav from "./components/Leftnav/Leftnav";
import Rightnav from "./components/Rightnav/Rightnav";
import Cardtop from "./components/Cardtop";
import Profiles from "./components/Profiles/Profiles";

function App() {
  return (
    <div className="App">
        <Topnav />
        <div className="flex justify-between">
          <Leftnav />
          {/* <Cardtop /> */}
          <Profiles />
          <Rightnav />
        </div>
    </div>
  );
}

export default App;
