// @flow
import { Field } from "formik";
import React from "react";
import styled from "react-emotion";

const FormField = styled("div")`
  margin: 0.5rem;
`;

const Label = styled("label")`
  font-size: 1rem;
`;

const Input = styled("input")`
  display: block;
  border: 3px solid black;
  width: 10rem;
  padding: 0.3rem;
`;

type TypeProps = {
  id: string,
  name: string,
  label: string
};

const InputFormField = ({ id, name, label }: TypeProps) => (
  <FormField>
    <Label htmlFor={id}>
      {label}
      <Field name={name}>
        {({ field }) => <Input {...field} id={id} type="text" />}
      </Field>
    </Label>
  </FormField>
);

export default InputFormField;
