<template>
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between">
      <h1 class="font-bold text-xl">Student List</h1>
      <button class="bg-amber-400 hover:bg-amber-500 active:bg-amber-400 text-white font-medium text-sm py-2 px-4 rounded">
        ADD NEW STUDENT
      </button>
    </div>
    <StudentList />
  </div>
</template>

<script>
import StudentList from '@/components/students/StudentList.vue';

export default {
  components: {
    StudentList
  }
}
</script>