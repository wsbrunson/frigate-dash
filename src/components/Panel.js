// @flow
import styled from "react-emotion";

const borderWidth = 6;
const borderStyle = `${borderWidth}px solid black;`;

const Panel = styled("section")`
  padding: 1rem;
  height: 100%;
  border: ${borderStyle};
  overflow-y: scroll;
`;

export default Panel;
