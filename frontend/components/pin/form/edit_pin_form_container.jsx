import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import EditPinForm from "./edit_pin_form";

import { updatePin } from "../../../actions/pin_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";


const mapStateToProps = state => ({
  pin: state.entities.pins[state.ui.objectId],
  errors: state.errors.pin,
  formTitle: "Edit this Pin"
});

const mapDispatchToProps = dispatch => ({
  processForm: pin => dispatch(updatePin(pin)),
  openDeletePin: (pinId) => dispatch(openModal('delete-pin')),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPinForm));