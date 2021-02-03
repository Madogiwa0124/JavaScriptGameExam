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
}
