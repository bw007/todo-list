<template>
  <div class="h-screen bg-amber-400 flex items-center justify-center">
    <div
      class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-[20px] shadow sm:p-6 md:p-8 md:py-11 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" @submit.prevent>
        <h1 class="border-l-4 border-l-[#F8D442] uppercase leading-none px-2 text-2xl font-bold">Crud operations</h1>
        <h1 class="uppercase leading-none text-xl mt-[50px!important] font-semibold">Sign in</h1>
        <p class="text-sm text-gray-400 mt-[10px!important]">Enter your credentials to access your account</p>
        
        <!-- Email va Parol kirish bo'limi -->
        <!-- 
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Email</label>
          <input type="email" name="email" id="email"
            class="bg-transparent border border-gray-300 text-amber-900 text-xs rounded-[4px] focus:ring-amber-500 focus:border-amber-500 block w-full p-3 outline-none dark:bg-amber-600 dark:border-amber-500 dark:placeholder-amber-400 dark:text-white"
            placeholder="Enter your email" required />
        </div>
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password"
            class="bg-transparent border border-gray-300 text-amber-900 outline-none text-xs rounded-[4px] focus:ring-amber-500 focus:border-amber-500 block w-full p-3 dark:bg-amber-600 dark:border-amber-500 dark:placeholder-amber-400 dark:text-white"
            required />
        </div>
        <button type="submit"
          class="w-full text-white bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-amber-500 font-medium rounded-[4px] text-sm p-3 text-center dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus:ring-amber-400 uppercase">
          Sign in
        </button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300 text-center">
          Forgot your password? <a href="#" class="text-amber-500 hover:underline dark:text-amber-500">Reset Password</a>
        </div>
        -->

        <button type="button" @click="handleGoogleSignIn"
          class="flex items-center gap-3 justify-center w-full text-gray-500 border hover:bg-amber-50 border-amber-400 focus:outline-none focus:ring-amber-500 font-medium rounded-[4px] text-sm p-3 text-center dark:bg-amber-500 dark:hover:bg-amber-400 dark:focus:ring-amber-400 uppercase">
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
        // Google bilan kirish funksiyasini chaqirish
        const user = await signInWithGoogle();
        // Foydalanuvchi ma'lumotlarini ishlatish
        console.log('Kirgan foydalanuvchi:', user);
      } catch (error) {
        console.error('Google bilan kirishdagi xatolik:', error);
      }
    }
  }
}
</script>
