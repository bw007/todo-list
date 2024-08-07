<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <h1 class="font-bold text-xl">Student List</h1>
      <button @click="showDialog = true" class="bg-amber-400 hover:bg-amber-500 active:bg-amber-400 text-white font-medium text-sm py-2 px-4 rounded">
        ADD NEW STUDENT
      </button>
      <DialogPart
        :isVisible="showDialog" 
        title="New student"
        @close="showDialog = false"
      >
        <Form @submit="handleSubmit" class="mt-4">
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
            <label for="email" class="block text-xs mb-[2px] font-medium text-gray-700">Phone</label>
            <Field name="phone" placeholder="+998 (__) ___-__-__" v-mask="'+998 (##) ###-##-##'" required v-model="student.phone" class="bg-transparent border outline-none border-gray-300 text-gray-900 text-sm rounded focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          <div class="actions mt-4 flex items-center justify-end gap-3">
            <button class="border text-sm font-medium hover:text-amber-500 hover:bg-amber-50 rounded w-20 p-1" @click="cancel">Yo'q</button>
            <button class="border border-amber-500 bg-amber-500 hover:opacity-80 text-white text-sm font-medium rounded w-20 p-1" @click="confirm">ha</button>
          </div>
        </Form>
      </DialogPart>
    </div>
    <StudentList />
  </div>
</template>

<script>
import DialogPart from '@/components/ui/DialogPart.vue';
import StudentList from '@/components/students/StudentList.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';

export default {
  components: {
    StudentList,
    DialogPart,
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    handleCancel() {
      console.log('Bekor qilindi');
      this.showDialog = false;
      this.student = {}
    },
    handleConfirm() {
      console.log('Tasdiqlandi');
      this.showDialog = false;
      this.student = {}
    },
    handleSubmit(values) {
      console.log(values);
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    },
  },
  data() {
    return {
      showDialog: false,
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