import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isModalOpen: false,
    currentCategory: '',
    currentWord: '',
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
    checkGameOver() {
      if (this.incorrectGuesses.length >= 8) {
        this.gameOver = true
        this.isModalOpen = true
      }
    },
    closeModal() {
      this.isModalOpen = false
      if (this.gameOver || this.gameWon) {
        this.gameOver = false
        this.gameWon = false
      }
    },
    checkGameWin() {
      if (
        this.currentWord
          .replace(/\s/g, '')
          .split('')
          .every((letter) => this.correctGuesses.includes(letter))
      ) {
        this.gameWon = true
        this.isModalOpen = true
      }
    },
    setCategory(category) {
      this.currentCategory = category
    },
    setCurrentWord(word) {
      this.currentWord = word.toUpperCase()
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
    }
  }
})
