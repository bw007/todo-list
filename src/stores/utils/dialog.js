import { defineStore } from 'pinia';

export const useDialogStore = defineStore('dialogStore', {
  state: () => ({
    toggle: true,
  }),
  actions: {
    setToggle(value) {
      this.toggle = value
    }
  }
});
