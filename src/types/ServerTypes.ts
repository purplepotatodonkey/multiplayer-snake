export interface ServerToClientEvents {
  noArg: () => void;
  sendBoard: (board: Board, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
  sendMove: (move: Move) => void;
}
