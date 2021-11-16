import React from "react";
import PropTypes from "prop-types";
import useJoinForm from "./useJoinForm";
import Input from "../../../atoms/Input/Input";
import Button from "../../../atoms/Button/Button";

function JoinForm() {
  const { code, onChangeCode, onSubmit } = useJoinForm();

  return (
    <div className="join-form">
      <div className="join-form__wrapper">
        <Input
          placeholder="Add code to join"
          value={code}
          onChange={onChangeCode}
        />
        <Button text="Join!" onClick={onSubmit} />
      </div>
    </div>
  );
}

JoinForm.propTypes = {
  code: PropTypes.string,
  onChangeCode: PropTypes.func,
  onSubmit: PropTypes.func,
};

JoinForm.defaultProps = {
  code: null,
  onChangeCode: () => {},
  onSubmit: () => {},
};

export default JoinForm;
