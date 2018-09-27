// @flow
import styled from "react-emotion";

const borderStyle = `6px solid black;`;

const Button = styled("button")`
  padding: 0.5rem;
  border: ${borderStyle};
  cursor: pointer;
  font-size: 1rem;
  background-color: ${props => (props.warning ? "red" : "white")};
  color: ${props => (props.warning ? "white" : "black")};
  margin: 0;
`;

export default Button;
