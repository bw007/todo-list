<template>
  <Transition name="dialog-overlay-fade" class="transition-all">
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 z-10" @click="closeDialog"></div>
  </Transition>
  <Transition name="dialog-content-fade">
    <div v-if="isVisible" class="fixed inset-0 w-full flex items-center z-20 justify-center" @click="closeDialog">
      <div class="bg-white p-5 rounded-md w-full max-w-md relative" @click.stop>
        <X class="absolute top-4 right-4 opacity-50 hover:opacity-90 cursor-pointer" :size="18" @click="closeDialog" />
        <h3 class="text-lg font-medium">{{ title }}</h3>
        <slot></slot>
        <div class="actions mt-4 flex items-center justify-end gap-3">
          <button v-if="showCancelButton" class="border text-sm font-medium hover:text-amber-500 hover:bg-amber-50 rounded w-20 p-1" @click="cancel">{{ cancelButtonText }}</button>
          <button v-if="showConfirmButton" class="border border-amber-500 bg-amber-500 hover:opacity-80 text-white text-sm font-medium rounded w-20 p-1" @click="confirm">{{ confirmButtonText }}</button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { X } from 'lucide-vue-next';
import { Transition } from 'vue';

export default {
  components: {
    Transition,
    X
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Dialog'
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    },
    cancelButtonText: {
      type: String,
      default: 'Cancel'
    },
    confirmButtonText: {
      type: String,
      default: 'Confirm'
    }
  },
  emits: ['close', 'cancel', 'confirm'],
  methods: {
    closeDialog() {
      this.$emit('close');
    },
    cancel() {
      this.$emit('cancel');
    },
    confirm() {
      this.$emit('confirm');
    }
  }
}
</script>

<style>

.dialog-content-fade-enter-active,
.dialog-content-fade-leave-active {
  transition: all 0.3s ease;
}

.dialog-content-fade-enter-from,
.dialog-content-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.dialog-content-fade-enter-to,
.dialog-content-fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
