import { defineStore } from "pinia";

export const useTestStore = defineStore('test', {
  state: () => {
    return {
      value: 'test'
    }
  }
})