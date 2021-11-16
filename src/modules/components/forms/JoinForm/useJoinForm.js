import { useState } from "react";

export default function useJoinForm() {
  const [code, setCode] = useState("");

  function onChangeCode(newCode) {
    setCode(newCode);
  }

  function onSubmit() {
    console.log("onSubmit " + code);
  }

  return { code, onChangeCode, onSubmit };
}
