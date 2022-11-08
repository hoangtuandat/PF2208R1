class Game {
    constructor() {
      this.score = 0
      this.boardWidth = 10
      this.boardHeight = 23
      this.currentBoard = new Array(this.boardHeight).fill(0).map(() => new Array(this.boardWidth).fill(0))
      this.landedBoard = new Array(this.boardHeight).fill(0).map(() => new Array(this.boardWidth).fill(0))
      this.currentTetromino = null /* TODO */
      this.canvas = document.getElementById('tetris-canvas')
      this.ctx = this.canvas.getContext('2d')
    }
  
    draw(blockSize = 30, padding = 3) {
      /* Vẽ khung của board */
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.lineWidth = 2
      this.ctx.rect(padding*100, padding*10, blockSize * this.boardWidth + padding * (this.boardWidth + 1), blockSize * (this.boardHeight - 3) + padding * (this.boardHeight - 3 + 1))
      this.ctx.stroke()
  
      /* Lặp qua các phần tử của mảng board và vẽ các block tại đúng vị trí */
      for (let i = 3; i < this.boardHeight; i++) {
        for (let j = 0; j < this.boardWidth; j++) {
          if (this.currentBoard[i][j] !== 0) {
            this.ctx.fillStyle = 'rgb(0, 0, 0)'
          } else {
            this.ctx.fillStyle = 'rgb(248, 248, 248)'
          }
          this.ctx.fillRect(padding*100 + this.ctx.lineWidth + j * (blockSize + padding), padding*10 + this.ctx.lineWidth + (i - 3) * (blockSize + padding), blockSize, blockSize)
        }
      }
  
      /* Viết ra các đoạn text */
      this.ctx.fillStyle = 'black'
      this.ctx.font = '20px Arial';
      this.ctx.fillText('TIẾP THEO:', 800, 100)
      this.ctx.fillText('ĐIỂM SỐ:', 800, 200)
      this.ctx.fillText(this.score.toString(), 800, 230)
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const game = new Game()
    game.draw()
  })


  // tạo class định nghĩa các Tetromino

  class Tetromino {
    constructor (row, col, angle = 0) {
      this.row = row;
      this.col = col;
      this.angle = angle;
    }
    get shape() {
      return this.constructor.shapes[this.angle]
    }
    get width() {
      return this.shape[0].length;
    }
    get height() {
      return this.shape.length
    }

    fall() {
      this.row +=1;
    }

    rotate() {
      if(this.angle <3) {
        this.angle +=1
      } else {
        this.angle = 0;
      }
    }

    move(direction) {
      if (direction === "left") {
        this.col -= 1;
      } else if (direction === "right") {
        this.col += 1;
      }
    }
  }

  class Lshape extends Tetromino {}

  Lshape.shapes = [
    [ [1, 0],
      [1, 0],
      [1, 1]],

    [ [1, 1, 1],
      [1, 0, 0]],

    [ [1, 1],
      [0, 1],
      [0, 1]],

    [ [0, 0, 1],
      [1, 1, 1]]
  ]
  Lshape.color = "rgb(255, 87, 34)"

  class Jshape extends Tetromino {}

  Jshape.shapes = [
    [ [0, 2],
      [0, 2],
      [2, 2]],

    [ [2, 0, 0],
      [2, 2, 2]],

    [ [2, 2],
      [2, 0],
      [2, 0]],

    [ [2, 2, 2],
      [0, 0, 2]]
  ]
  Jshape.color = "rgb(63, 81, 181)"
  class OShape extends Tetromino { }

OShape.shapes =
  [[[3, 3],
    [3, 3]],

   [[3, 3],
    [3, 3]],

   [[3, 3],
    [3, 3]],

   [[3, 3],
    [3, 3]]]

OShape.color = 'rgb(255, 235, 59)'

class TShape extends Tetromino { }

TShape.shapes =
  [[[0, 4, 0],
    [4, 4, 4]],

   [[4, 0],
    [4, 4],
    [4, 0]],

   [[4, 4, 4],
    [0, 4, 0]],

   [[0, 4],
    [4, 4],
    [0, 4]]]

TShape.color = 'rgb(156, 39, 176)'

class SShape extends Tetromino { }

SShape.shapes =
  [[[0, 5, 5],
    [5, 5, 0]],

   [[5, 0],
    [5, 5],
    [0, 5]],

   [[0, 5, 5],
    [5, 5, 0]],

   [[5, 0],
    [5, 5],
    [0, 5]]]

SShape.color = 'rgb(76, 175, 80)'

class ZShape extends Tetromino { }

ZShape.shapes =
  [[[6, 6, 0],
    [0, 6, 6]],

   [[0, 6],
    [6, 6],
    [6, 0]],

   [[6, 6, 0],
    [0, 6, 6]],

   [[0, 6],
    [6, 6],
    [6, 0]]]

ZShape.color = 'rgb(183, 28, 28)'

class IShape extends Tetromino { }

IShape.shapes =
  [[[7],
    [7],
    [7],
    [7]],

   [[7, 7, 7, 7]],

   [[7],
    [7],
    [7],
    [7]],

   [[7, 7, 7, 7]]]

IShape.color = 'rgb(0, 188, 212)'

// kết thúc tạo Tetromino

// tạo tetromino random

class Game {
  constructor() {
    this.currentTetromino = this.randomTetromino();
  }
  randomTetromino() {
    let ranNum = Math.floor(Math.random() * Math.floor(7))
    switch (ranNum) {
      case 0:
        return 
    }
  }
}