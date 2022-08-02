import { defineStore } from 'pinia'

const useDemoStore = defineStore({
  id: 'testStore',
  state: () => ({ name: '' }),
  getters: {
    localname(): string {
      return this.name
    },
  },
  actions: {
    getName() {
      return this.name
    },
    getRemoteName() {
      return Promise.resolve('remote-barwe')
    },
  },
})

export default useDemoStore
