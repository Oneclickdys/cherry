import { useState } from "react";

export default function useJoinForm(onSubmit) {
  const [code, setCode] = useState("");

  function onChangeCode(newCode) {
    setCode(newCode);
  }

  function onClickSubmit() {
    onSubmit(code);
  }

  return { code, onChangeCode, onClickSubmit };
}
