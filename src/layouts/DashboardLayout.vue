<template>
  <div class="flex h-screen">
    <SidebarPart />
    <HeaderPart />
  </div>
</template>
<script>
import SidebarPart from "@/components/dashboard/SidebarPart.vue";
import HeaderPart from "@/components/dashboard/HeaderPart.vue";
export default {
  components: {
    SidebarPart,
    HeaderPart
  }
}
</script>