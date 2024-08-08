<template>
  <div class="h-screen bg-amber-400 flex items-center justify-center">
    <div
      class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-[20px] shadow sm:p-6 md:p-8 md:py-11 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" @submit.prevent>
        <h1 class="border-l-4 border-l-[#F8D442] uppercase leading-none px-2 text-2xl font-bold">Crud operations</h1>
        <h1 class="uppercase leading-none text-xl mt-[50px!important] font-semibold">Sign in</h1>
        <p class="text-sm text-gray-400 mt-[10px!important]">Enter your credentials to access your account</p>
        <button type="button" @click="handleGoogleSignIn"
          class="flex items-center gap-3 justify-center w-full text-gray-500 border hover:bg-amber-50 border-amber-400 focus:outline-none focus:bg-amber-200 focus:ring-amber-500 font-medium rounded-[4px] text-sm p-3 text-center dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus:ring-amber-400 uppercase">
          <img src="@/assets/google.svg" alt="">
          continue with google
        </button>
      </form>
    </div>
    <RouterView />
  </div>
</template>

<script>
import { signInWithGoogle } from '@/stores/auth/auth';
import { RouterView } from 'vue-router';

export default {
  components: {
    RouterView
  },
  methods: {
    async handleGoogleSignIn() {
      try {
        const user = await signInWithGoogle();
        console.log('Kirgan foydalanuvchi:', user);
        this.$router.push('/');
      } catch (error) {
        console.error('Google bilan kirishdagi xatolik:', error);
      }
    }
  }
}
</script>
