import React from "react";

import Wrapper from "./components/Wrapper/index";
import Container from "./components/Container";
import Table from "./components/Table";


import './App.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Container>
          <Table />
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;
