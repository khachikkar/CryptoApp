import { makeAutoObservable } from 'mobx'

class UserStore {
  isAuthenticated = false
  username = ''

  constructor() {
    makeAutoObservable(this)
  }

  setAuthenticated(value: boolean) {
    this.isAuthenticated = value
  }

  setUsername(name: string) {
    this.username = name
  }

  signIn(username: string) {
    this.isAuthenticated = true
    this.username = username
  }

  signOut() {
    this.isAuthenticated = false
    this.username = ''
  }
}

export const userStore = new UserStore()

