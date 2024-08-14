<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <h1 class="font-bold text-xl">Student List</h1>
      <button @click="dialogToggle = true" class="bg-amber-400 hover:bg-amber-500 active:bg-amber-400 text-white font-medium text-sm py-2 px-4 rounded">
        ADD NEW STUDENT
      </button>
      <StudentDialog :showDialog="dialogToggle" @close="closeHandle" :data="item" />
    </div>
    <StudentList :data="data" @edit="handleEdit"/>
  </div>
</template>

<script>
import StudentDialog from '@/components/students/StudentDialog.vue';
import StudentList from '@/components/students/StudentList.vue';

export default {
  components: {
    StudentList,
    StudentDialog
  },
  methods: {
    closeHandle() {
      this.dialogToggle = false
    },
    handleEdit(id) {
      this.item = { ...this.data.filter(f => f.id == id) }
      this.dialogToggle = true
    }
  },
  data() {
    return {
      dialogToggle: false,
      item: {},
      data: [
        {
          name: "John Doe",
          email: "example@gmail.com",
          phone: "7305477760",
          date: "08-Dec, 2021",
          id: 1
        },
        {
          name: "John Doe",
          email: "example@gmail.com",
          phone: "7305477760",
          date: "08-Dec, 2021",
          id: 2
        },
        {
          name: "John Doe",
          email: "example@gmail.com",
          phone: "7305477760",
          date: "08-Dec, 2021",
          id: 3
        },
        {
          name: "John Doe",
          email: "example@gmail.com",
          phone: "7305477760",
          date: "08-Dec, 2021",
          id: 4
        },
        {
          name: "John Doe",
          email: "example@gmail.com",
          phone: "7305477760",
          date: "08-Dec, 2021",
          id: 5
        }
      ]
    }
  },
}
</script>