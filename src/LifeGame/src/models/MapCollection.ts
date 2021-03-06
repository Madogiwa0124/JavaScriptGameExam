type MAP = {
  ROWS: number
  COLS: number
  MAP: number[]
}
export class MapCollection {
  static readonly GINGA: MAP = {
    ROWS: 16,
    COLS: 16,
    MAP: [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,
      0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,
      0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,
      0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,
      0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,
      0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,
      0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    ]
  }
  static readonly GLIDER: MAP = {
    ROWS: 16,
    COLS: 16,
    MAP: [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,
      0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,
      0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,
      0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,
      0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    ]
  }
  static random(rows: number, cols: number): MAP {
    const map = [...Array(rows * cols)].map(() => Math.round(Math.random()) )
    return { ROWS: rows, COLS: cols, MAP: map }
  }
}
