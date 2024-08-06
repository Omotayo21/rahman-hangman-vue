import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isModalOpen: false,
    currentCategory: '',
    currentWord: [], // Array of letters including spaces
    correctGuesses: [],
    incorrectGuesses: [],
    gameOver: false,
    gameWon: false,
    correctAnswer: ''
  }),
  actions: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen
    },
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
      if (this.gameOver || this.gameWon) {
        this.gameOver = false
        this.gameWon = false
      }
    },
    checkGameOver() {
      if (this.incorrectGuesses.length >= 8) {
        this.gameOver = true
        this.isModalOpen = true
        this.revealAnswer() // Reveal answer on game over
      }
    },
    checkGameWin() {
      const guessedWord = this.currentWord
        .map((letter) => (this.correctGuesses.includes(letter) || letter === ' ' ? letter : '_'))
        .join('')

      const originalWord = this.currentWord.join('')

      if (guessedWord === originalWord) {
        this.gameWon = true
        this.isModalOpen = true
        this.revealAnswer() // Reveal answer on game win
      }
    },
    setCategory(category) {
      this.currentCategory = category
    },
    setCurrentWord(word) {
      this.currentWord = word.toUpperCase().split('')
      this.correctGuesses = []
      this.incorrectGuesses = []
      this.gameOver = false
      this.gameWon = false
      this.correctAnswer = ''
    },
    addCorrectGuess(letter) {
      if (!this.correctGuesses.includes(letter)) {
        this.correctGuesses.push(letter)
        this.checkGameWin()
      }
    },
    addIncorrectGuess(letter) {
      if (!this.incorrectGuesses.includes(letter)) {
        this.incorrectGuesses.push(letter)
        this.checkGameOver()
      }
    },
    revealAnswer() {
      this.correctAnswer = this.currentWord.join('')
    }
  }
})
