// @flow
import React from "react";
import styled from "react-emotion";

const AppContainer = styled("div")`
  height: calc(100vh - 6px);
  width: calc(100vw - 6px);
  border: 3px dashed black;
`;

const App = () => <AppContainer />;

export default App;
