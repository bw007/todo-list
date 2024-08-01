<script setup>
import { User2 } from 'lucide-vue-next';
</script>

<template>
  <div class="bg-gray-100 py-3 px-6 shadow">
    <div class="flex justify-end items-center">
      <div class="cursor-pointer">
        <User2 :size="32" class="inline-block p-2 rounded-full ring-2 ring-white" />
      </div>
    </div>
  </div>
</template>