<template>
  <DialogPart
    :isVisible="showDialog"
    title="New student"
    @close="closeHandle"
  >
    <FormParent 
      @submit="handleSubmit" 
      class="mt-4"
      :validation-schema="schema"
      @invalid-submit="invalidSubmit"
      v-slot="{ errors }"
    >
      <div class="mb-3 relative">
        <label for="name" class="block text-xs mb-[2px] font-medium text-gray-700">Name</label>
        <Field name="name" placeholder="Name" type="text" required v-model="student.name" :class="{ 'border-red-400': errors.name }" class="bg-transparent border outline-none border-gray-300 text-gray-900 text-sm rounded focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <span v-if="errors.name" class="text-red-500 text-xs absolute right-0">{{ errors.name }}</span>
      </div>
      <div class="mb-3 relative">
        <label for="email" class="block text-xs mb-[2px] font-medium text-gray-700">Email</label>
        <Field name="email" placeholder="someone@example.com" type="email" required v-model="student.email" :class="{ 'border-red-400': errors.email }" class="bg-transparent border outline-none border-gray-300 text-gray-900 text-sm rounded focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <span v-if="errors.email" class="text-red-500 text-xs absolute right-0">{{ errors.email }}</span>
      </div>
      <div class="mb-3 relative">
        <label for="phone" class="block text-xs mb-[2px] font-medium text-gray-700">Phone</label>
        <Field name="phone" placeholder="+998 (__) ___-__-__" v-mask="'+998 (##) ###-##-##'" required v-model="student.phone" :class="{ 'border-red-400': errors.phone }" class="bg-transparent border outline-none border-gray-300 text-gray-900 text-sm rounded focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <span v-if="errors.phone" class="text-red-500 text-xs absolute right-0">{{ errors.phone }}</span>
      </div>
      <div class="actions mt-6 flex items-center justify-end gap-3">
        <button class="border text-sm font-medium hover:text-amber-500 hover:bg-amber-50 rounded w-20 p-1" @click="closeHandle">Cancel</button>
        <button type="submit" :class="['submit-btn', { invalid: isInvalid }]" class="border border-amber-500 bg-amber-500 hover:opacity-80 text-white text-sm font-medium rounded w-20 p-1">Create</button>
      </div>
    </FormParent>
  </DialogPart>
</template>

<script>
import DialogPart from '@/components/ui/DialogPart.vue';
import { Form as FormParent, Field } from 'vee-validate';
import { createDocument } from '@/stores/data/firestore';
import * as Yup from 'yup';

export default {
  components: {
    DialogPart,
    FormParent,
    Field,
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
  data() {
    return {
      schema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().required('Phone is required')
      }),
      student: {
        name: '',
        email: '',
        phone: '',
        createdTime: ''
      },
      isInvalid: false
    };
  },
  methods: {
    invalidSubmit() {
      this.isInvalid = true;
    },
    async handleSubmit(values) {
      try {
        const userData = {
          ...values,
          createdAt: new Date(),
        };

        const docId = await createDocument('users', userData);
        console.log('Foydalanuvchi qo\'shildi: ', docId);
        this.clearForm();
        this.isInvalid = false;
      } catch (error) {
        console.error('Foydalanuvchi qo\'shishda xatolik: ', error);
      }
    },
    closeHandle() {
      this.clearForm();
      this.$emit('close');
    },
    clearForm() {
      this.student.name = '';
      this.student.email = '';
      this.student.phone = '';
    }
  },
  emits: ['close']
};
</script>
