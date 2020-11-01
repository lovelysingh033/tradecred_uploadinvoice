import React from "react";
import Header from "./Header";
import UploadBox from "./UploadBox/UploadBox";

const App = () => {
  return (
    <div className="App">
      <Header dark={true} className="Header">
        TradeCred
      </Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <UploadBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
