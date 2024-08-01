<template>
  <aside class="bg-[#F2EAE1] w-64 flex-shrink-0">
    <div class="p-4">
      <h1 class="border-l-4 border-l-[#F8D442] uppercase leading-none px-2 text-2xl font-bold">Crud</h1>
    </div>
    <nav class="p-4">
      <ul class="flex flex-col gap-2 font-medium text-sm">
        <li v-for="item in menu" :key="item.name">
            <router-link
              :to="{name: item.name}"
              href="#" 
              class="flex items-center gap-1 px-3 py-2 rounded hover:bg-[#FEAF0030]" 
              :class="{'bg-[#FEAF00!important]': $route.name == item.name}"
            >
               <component :size="18" :is="item.icon" />
              {{ item.title }}
            </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { menu } from '@/stores/menu';

export default {
  components: {},
  data() {
    return {
      menu
    }
  },
}
</script>