import React from "react";
import PropTypes from "prop-types";
import useJoinForm from "./useJoinForm";
import Input from "../../../atoms/Input/Input";
import Button from "../../../atoms/Button/Button";

function JoinForm({ onSubmit, placeholder }) {
  const { code, onChangeCode, onClickSubmit } = useJoinForm(onSubmit);

  return (
    <div className="join-form">
      <div className="join-form__wrapper">
        <Input placeholder={placeholder} value={code} onChange={onChangeCode} />
        <Button text="Join!" onClick={onClickSubmit} />
      </div>
    </div>
  );
}

JoinForm.propTypes = {
  code: PropTypes.string,
  onChangeCode: PropTypes.func,
  onClickSubmit: PropTypes.func,
};

JoinForm.defaultProps = {
  code: null,
  onChangeCode: () => {},
  onClickSubmit: () => {},
  placeholder: "Add code to join",
};

export default JoinForm;
