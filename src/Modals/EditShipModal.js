// @flow
import { Dialog } from "@reach/dialog";
import { Form, Formik } from "formik";
import {
  InputFormField,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalHeading
} from "../components";
import { Match, navigate } from "@reach/router";
import Button from "../components/Button";
import Component from "@reach/component-component";
import React from "react";
import ShipStats from "../ShipStats";
import styled from "react-emotion";
import type { TypeAppActions, TypeAppState, TypeShip } from "../types.flow";

const FormContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

type TypeProps = {
  appState: TypeAppState,
  appActions: TypeAppActions,
  id: string
};

const EditShipModal = ({ appState, appActions, id }: TypeProps) => (
  <Match path="/ship/:id">
    {({ match }) => (
      <Component initialState={{ isDialogOpen: match }}>
        {({ state }) => (
          <Dialog isOpen={state.isDialogOpen}>
            <ModalHeader>
              <ModalHeading>View/Edit Ship</ModalHeading>
              <Button type="button" onClick={() => navigate("/")}>
                Close
              </Button>
            </ModalHeader>
            <Formik
              initialValues={{ ...appState.userShips[id] }}
              onSubmit={(shipForm: TypeShip, form, third) => {
                !form.dirty && appActions.updateShip(shipForm);
              }}
            >
              {() => (
                <Form>
                  <ModalContent>
                    <FormContainer>
                      <InputFormField
                        id="call-sign"
                        name="callSign"
                        label="Call Sign"
                      />
                      <InputFormField
                        id="captain-name"
                        name="captainName"
                        label="Captain Name"
                      />
                      <InputFormField
                        id="ship-name"
                        name="shipName"
                        label="Ship Name"
                      />
                    </FormContainer>
                    <ShipStats ship={appState.userShips[id]} />
                  </ModalContent>
                  <ModalFooter>
                    <Button
                      type="button"
                      onClick={() => {
                        appActions.sellShip(appState.userShips[id]);
                        navigate("/");
                      }}
                      warning
                    >
                      Sell Ship
                    </Button>
                    <Button
                      name="submit"
                      type="submit"
                      value="submit-true"
                      onClick={() => navigate("/")}
                    >
                      Finish
                    </Button>
                  </ModalFooter>
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
