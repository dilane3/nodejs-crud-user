class User {
  constructor(id, name, password, role) {
    this.id = id
    this.name = name
    this.password = password
    this.bestScore = {
      easy: 0,
      arcade: 0,
      hard: 0
    }
    this.pieces = 500
    this.role = role
  }

  // somes getters and setters
  get getId() {
    return this.id
  }

  get getName() {
    return this.name
  }

  get getPassword() {
    return this.password
  }

  get getBestScore() {
    return this.bestscore
  }

  get getPieces() {
    return this.pieces
  }

  get getRole() {
    return this.role
  }

  setBestScore(level, score) {
    switch (level) {
      case "easy":
        this.bestScore.easy = score
        break

      case "arcade":
        this.bestScore.arcade = score
        break

      case "hard":
        this.bestScore.hard = score
        break

      default: // nothing
        break
    }
  }

  addPieces(pieces) {
    this.pieces += pieces
  }
}

export default User
