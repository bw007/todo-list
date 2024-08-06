<template>
  <div class="bg-gray-50 py-3 px-6 shadow-sm">
    <div class="flex justify-end items-center">
      <router-link :to="{name: 'Auth'}" class="cursor-pointer">
        <User2 :size="32" class="inline-block p-2 hover:opacity-60 rounded-full ring-2 ring-white" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { User2 } from 'lucide-vue-next';

export default {
  components: {
    User2
  }
}
</script>
