<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <h1 class="font-bold text-xl">Student List</h1>
      <button @click="showDialog = true" class="bg-amber-400 hover:bg-amber-500 active:bg-amber-400 text-white font-medium text-sm py-2 px-4 rounded">
        ADD NEW STUDENT
      </button>
      <DialogPart
        :isVisible="showDialog" 
        title="Tasdiqlash dialogi"
        @close="showDialog = false"
        @cancel="handleCancel"
        @confirm="handleConfirm"
      >
        <p>Bu dialog oynasida matn bor.</p>
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
      showDialog: false
    }
  },
}
</script>