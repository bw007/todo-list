<template>
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-300 uppercase dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Name
        </th>
        <th scope="col" class="px-6 py-3">
          Email
        </th>
        <th scope="col" class="px-6 py-3">
          Phone
        </th>
        <th scope="col" class="px-6 py-3">
          Date of admission
        </th>
      </tr>
    </thead>
    <tbody>
      <StudentListItem v-for="item in data" :key="item.id" :item="item" @edit="handleEdit"/>
    </tbody>
  </table>
</template>

<script>
import StudentListItem from './StudentListItem.vue';

export default {
  components: {
    StudentListItem
  },
  props: {
    data: {
      type: Array
    }
  },
  emits: ['edit'],
  methods: {
    handleEdit(id) {
      this.$emit('edit', id)
    }
  },
}
</script>