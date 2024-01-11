interface Player {
  id: number;
  name: string;
  color: string;
  score: number;
}

type Cell = {
  isEmpty: boolean;
  isFood: boolean;
  playerBody: number | null; // Player number if it's a body part, otherwise null
  playerHead: number | null; // Player number if it's the head, otherwise null
};

interface Board {
  id: string;
  rows: number;
  cols: number;
  map: number[][];
}

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

interface Move {
  playerId: number;
  direction: Direction;
}