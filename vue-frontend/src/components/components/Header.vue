<script setup>
import { ref } from 'vue'
</script>

<template>
  <header>
    <div class="w-full h-10 flex justify-between items-center p-9">
      <div class="flex justify-center items-center ml-[14rem]">
        <i class="fa-regular fa-calendar text-blue-600 text-3xl"></i>
        <h2 class="font-semibold text-2xl">Event Manager</h2>
      </div>
      <nav>
        <ul class="flex justify-center items-center gap-5 mr-[15rem]">
          <li><a href="#home" class="text-gray-800 hover:text-blue-600">Home</a></li>
          <li><a href="#events" class="text-gray-800 hover:text-blue-600">Events</a></li>
          <li><a href="#contact" class="text-gray-800 hover:text-blue-600">Contact</a></li>
          <li><a href="#login" class="text-gray-800 hover:text-blue-600 border-1 py-1 px-3 rounded-lg font-medium border-gray-400">Login</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
