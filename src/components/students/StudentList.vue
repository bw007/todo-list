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
      <StudentListItem v-for="item in list" :key="item.id" :item="item"/>
    </tbody>
  </table>
</template>

<script>
import StudentListItem from './StudentListItem.vue';

export default {
  components: {
    StudentListItem
  },
  data() {
    return {
      list: [
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