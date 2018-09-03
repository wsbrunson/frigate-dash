// @flow
import { Dialog } from "@reach/dialog";
import { Field, Formik } from "formik";
import { Match, navigate } from "@reach/router";
import Component from "@reach/component-component";
import React from "react";
import styled from "react-emotion";
import type { TypeAppActions, TypeAppState, TypeShip } from "./types.flow";

const Form = styled("form")`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const FormField = styled("div")`
  margin: 0.5rem;
`;

type TypeProps = {
  appState: TypeAppState,
  appActions: TypeAppActions,
  id: string
};

const EditShipModal = ({ appState, appActions, id }: TypeProps) => (
  <Match path="/ship/:id">
    {props => (
      <Component initialState={{ isDialogOpen: props.match }}>
        {({ state }) => (
          <Dialog isOpen={state.isDialogOpen}>
            <button onClick={() => navigate("/")}>Close</button>
            <Formik
              initialValues={{ ...appState.userShips[id] }}
              onSubmit={(shipForm: TypeShip) => appActions.updateShip(shipForm)}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <FormField>
                    <label htmlFor="call-sign">
                      Call Sign
                      <Field id="call-sign" type="text" name="callSign" />
                    </label>
                  </FormField>
                  <FormField>
                    <label htmlFor="captain-name">
                      Captain Name
                      <Field id="captain-name" type="text" name="captainName" />
                    </label>
                  </FormField>
                  <FormField>
                    <label htmlFor="ship-name">
                      Ship Name
                      <Field id="ship-name" type="text" name="shipName" />
                    </label>
                  </FormField>
                  <button type="submit" onClick={() => navigate("/")}>
                    Finish
                  </button>
                </Form>
              )}
            </Formik>
          </Dialog>
        )}
      </Component>
    )}
  </Match>
);

export default EditShipModal;
