<template>
  <div class="flex h-screen">
    <SidebarPart />
    <div class="flex-1 flex flex-col">
      <HeaderPart />
      <MainPart class="px-6 py-3" />
    </div>
  </div>
</template>
<script>
import SidebarPart from "@/components/dashboard/SidebarPart.vue";
import HeaderPart from "@/components/dashboard/HeaderPart.vue";
import MainPart from "@/components/dashboard/MainPart.vue";
export default {
  components: {
    SidebarPart,
    HeaderPart,
    MainPart
  }
}
</script>