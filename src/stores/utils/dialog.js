import { defineStore } from 'pinia';

export const useDialogStore = defineStore('dialogStore', {
  state: () => ({
    toggle: false,
  }),
  actions: {
    setToggle(value) {
      this.toggle = value
    }
  }
});
