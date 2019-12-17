import React from "react";
import { connect } from "react-redux";

import { updateBoard } from "../../../actions/board_actions";
import { openModal, closeModal } from "../../../actions/modal_actions";
import EditBoardForm from "./edit_board_form";

const mapStateToProps = (state) => ({
  board: state.entities.boards[state.ui.objectId],
  errors: state.errors.board,
  formType: "Edit your board"
});

const mapDispatchToProps = dispatch => ({
  processForm: (board) => dispatch(updateBoard(board)),
  deleteBoard: (id) => dispatch(openModal('delete-board', id)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBoardForm);