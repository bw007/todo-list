<template>
  <DialogPart
    :isVisible="showDialog"
    title="New student"
    @close="closeHandle"
  >
    <FormParent @submit="handleSubmit" class="mt-4">
      <div class="mb-3">
        <label for="name" class="block text-xs mb-[2px] font-medium text-gray-700">Name</label>
        <Field name="name" placeholder="Name" type="text" required v-model="student.name" class="bg-transparent border outline-none border-gray-300 text-gray-900 text-sm rounded focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div class="mb-3">
        <label for="email" class="block text-xs mb-[2px] font-medium text-gray-700">Email</label>
        <Field name="email" :rules="validateEmail" placeholder="someone@example.com" type="email" required v-model="student.email" class="bg-transparent border outline-none border-gray-300 text-gray-900 text-sm rounded focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <ErrorMessage name="email" />
      </div>
      <div class="mb-3">
        <label for="phone" class="block text-xs mb-[2px] font-medium text-gray-700">Phone</label>
        <Field name="phone" placeholder="+998 (__) ___-__-__" v-mask="'+998 (##) ###-##-##'" required v-model="student.phone" class="bg-transparent border outline-none border-gray-300 text-gray-900 text-sm rounded focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </div>
      <div class="actions mt-4 flex items-center justify-end gap-3">
        <button class="border text-sm font-medium hover:text-amber-500 hover:bg-amber-50 rounded w-20 p-1" @click="cancel">Cancel</button>
        <button class="border border-amber-500 bg-amber-500 hover:opacity-80 text-white text-sm font-medium rounded w-20 p-1" @click="confirm">Create</button>
      </div>
    </FormParent>
  </DialogPart>
</template>

<script>
import DialogPart from '@/components/ui/DialogPart.vue';
import { Form as FormParent, Field, ErrorMessage } from 'vee-validate';
import { createDocument } from '@/stores/data/firestore'; // Import createDocument

export default {
  components: {
    DialogPart,
    FormParent,
    Field,
    ErrorMessage
  },
  props: {
    showDialog: {
      type: Boolean
    },
    data: {
      type: Object
    },
    edit: {
      type: Function
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const userData = {
          name: this.student.name,
          email: this.student.email,
          phone: this.student.phone,
          createdAt: new Date(),
        };

        const docId = await createDocument('users', userData); // createDocument funksiyasini chaqirish
        console.log('Foydalanuvchi qo\'shildi: ', docId);
        this.student.name = '';
        this.student.email = '';
        this.student.phone = '';
      } catch (error) {
        console.error('Foydalanuvchi qo\'shishda xatolik: ', error);
      }
    },
    validateEmail(value) {
      if (!value) {
        return 'This field is required';
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      return true;
    },
    closeHandle() {
      this.$emit('close');
    }
  },
  emits: ['close'],
  data() {
    return {
      student: {
        name: '',
        email: '',
        phone: '',
        createdTime: ''
      }
    }
  },
}
</script>
