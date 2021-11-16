import { useEffect, useState } from "react";
import { createGame } from "../../../server/firebase";
import { getCode } from "../../../utils/general";

export default function useCode() {
  const [code, setCode] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const code = getCode();
      createGame(code);
      setCode(code);
    }, 4000);
  }, []);

  return { code };
}
