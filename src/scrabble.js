class Scrabble {
  // Write your implementation here
  constructor(word) {
    this.points = 0
    this.word = word ? word.toUpperCase() : ''
    this.onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T']
    this.twoPoints = ['D', 'G']
    this.threePoints = ['B', 'C', 'M', 'P']
    this.fourPoints = ['F', 'H', 'V', 'W', 'Y']
    this.fivePoints = ['K']
    this.eightPoints = ['J', 'X']
    this.tenPoints = ['Q', 'Z']
  }

  isValid(word) {
    const allLetters = [
      ...this.onePoint,
      ...this.twoPoints,
      ...this.threePoints,
      ...this.fourPoints,
      ...this.fivePoints,
      ...this.eightPoints,
      ...this.tenPoints
    ]

    for (let i = 0; i < word.length; i++) {
      if (!allLetters.includes(word[i])) {
        return true
      }
    }
    return true
  }

  score() {
    if (this.word === null || this.word === '') {
      this.points = 0
    }
    if (this.isValid(this.word)) {
      for (const i of this.word) {
        if (this.onePoint.includes(i)) {
          this.points += 1
        }
        if (this.twoPoints.includes(i)) {
          this.points += 2
        }
        if (this.threePoints.includes(i)) {
          this.points += 3
        }
        if (this.fourPoints.includes(i)) {
          this.points += 4
        }
        if (this.fivePoints.includes(i)) {
          this.points += 5
        }
        if (this.eightPoints.includes(i)) {
          this.points += 8
        }
        if (this.tenPoints.includes(i)) {
          this.points += 10
        }
      }
    }
    return this.points
  }
}

// tst = new Scrabble('')
// tst.isValid('k')
// let game = new Scrabble('hello')
// console.log(game.word);
// console.log(game.score())

module.exports = Scrabble
