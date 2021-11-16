import { useEffect, useState } from "react";
import { createGame, getGame } from "../../../server/firebase";
import { getCode } from "../../../utils/general";

export default function useHome() {
  const [game, setGame] = useState("");

  async function onSubmit(data) {
    const game = await getGame(data);
    setGame(game);
  }

  return { onSubmit, game };
}
