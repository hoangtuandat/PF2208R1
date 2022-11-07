
class Game {
    constructor() {
        this.score = 0;
        this.boardWidth = 10;
        this.boardHeight = 23;
        this.currentBoard = new Array(this.boardHeight).fill(0).map()
        this.landedBoard = new Array(this.boardHeight).fill(0).map()
        this.currenTetromino = null
    }
}

class Game {
    constructor() {
        this.canvas = document.getElementById("tetris-canvas")
        this.ctx = this.canvas.getContext('2d');
    }
}

class Game {
    draw(blockSize = 24, padding =4) {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
        this.ctx.lineWidth = 2;
        this.ctx.rect(padding, padding, blockSize*this.boardWidth)
    }
}