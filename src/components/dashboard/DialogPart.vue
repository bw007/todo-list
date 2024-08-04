<template>
  <div>
    <!-- Overlay -->
    <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 z-10" @click="closeDialog"></div>

    <!-- Transition for Dialog Content -->
    <Transition name="dialog-content-fade">
      <div v-if="isVisible" class="fixed m-auto left-[calc(50%-(384px/2))] z-20 bg-white p-5 rounded-md w-full max-w-96" @click.stop>
        <span class="absolute top-2 right-2 text-xl cursor-pointer" @click="closeDialog">&times;</span>
        <h3>{{ title }}</h3>
        <slot></slot>
        <div class="actions mt-4 text-right">
          <button v-if="showCancelButton" @click="cancel">{{ cancelButtonText }}</button>
          <button v-if="showConfirmButton" @click="confirm">{{ confirmButtonText }}</button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import { Transition } from 'vue';

export default {
  components: {
    Transition
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
/* .dialog-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
} */
.dialog-content {
  /* background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1001 !important; */
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.actions {
  margin-top: 20px;
  text-align: right;
}

.actions button {
  padding: 10px 20px;
  margin-left: 10px;
}

.dialog-content-fade-enter-active,
.dialog-content-fade-leave-active {
  transition: all 0.3s ease;
  /* Transition duration set to 2 seconds */
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
