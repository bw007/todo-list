<template>
  <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="px-6 py-4">
      {{ item.name }}
    </td>
    <td class="px-6 py-4">
      {{ item.email }}
    </td>
    <td class="px-6 py-4">
      {{ item.phone }}
    </td>
    <td class="px-6 py-4">
      {{ item.date }}
    </td>
    <td class="px-6 py-4 text-right flex items-center justify-end gap-6">
      <button class="text-amber-400 hover:text-amber-500 active:text-amber-400">
        <Pencil :size="18" />
      </button>
      <button class="text-amber-400 hover:text-amber-500 active:text-amber-400">
        <Trash :size="18" />
      </button>
    </td>
  </tr>
</template>

<script>
import { Trash, Pencil } from 'lucide-vue-next';

export default {
  components: {
    Pencil,
    Trash
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>