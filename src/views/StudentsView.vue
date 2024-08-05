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
        confirmButtonText="Yo'q"
        @close="showDialog = false"
        @cancel="handleCancel"
        @confirm="handleConfirm"
      >
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <input id="name" v-model="student.name" type="text" required class="bg-transparent border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input id="email" v-model="student.email" type="email" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
            <input id="phone" v-model="student.phone" type="tel" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          </div>
          <div class="mb-4">
            <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
            <input id="date" v-model="student.date" type="date" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
          </div>
        </form>
      </DialogPart>
    </div>
    <StudentList />
  </div>
</template>

<script>
import DialogPart from '@/components/dashboard/DialogPart.vue';
import StudentList from '@/components/students/StudentList.vue';

export default {
  components: {
    StudentList,
    DialogPart
  },
  methods: {
    handleCancel() {
      console.log('Bekor qilindi');
      this.showDialog = false;
    },
    handleConfirm() {
      console.log('Tasdiqlandi');
      this.showDialog = false;
    }
  },
  data() {
    return {
      showDialog: false,
      student: {
        name: '',
        email: '',
        phone: '',
        date: ''
      }
    }
  },
}
</script>