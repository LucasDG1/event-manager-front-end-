<template>
  <header class="w-full bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <i class="fa-regular fa-calendar text-blue-600 text-3xl"></i>
          <h2 class="font-semibold text-2xl text-gray-800">Event Manager</h2>
        </div>

        <nav class="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a href="#home" class="text-gray-800 hover:text-blue-600 font-medium">Home</a>
          <a href="#events" class="text-gray-800 hover:text-blue-600 font-medium">Events</a>
          <a href="#contact" class="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
          <a
            href="#login"
            class="text-gray-800 hover:text-blue-600 border border-gray-400 py-1 px-3 rounded-lg font-medium"
            >Login</a
          >
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-800 focus:outline-none">
            <i class="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden mt-2 space-y-2">
        <a href="#home" class="block text-gray-800 hover:text-blue-600">Home</a>
        <a href="#events" class="block text-gray-800 hover:text-blue-600">Events</a>
        <a href="#contact" class="block text-gray-800 hover:text-blue-600">Contact</a>
        <a
          href="#login"
          class="block text-gray-800 hover:text-blue-600 border border-gray-400 py-1 px-3 rounded-lg font-medium"
          >Login</a
        >
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
