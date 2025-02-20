<script setup lang="ts">
import { experience } from "../data/experience";
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <h2 class="text-3xl font-bold text-center mb-6">Experiencia</h2>
    <div v-for="item in experience" :key="item.id" class="bg-gray-800 p-4 rounded-xl shadow-lg mb-4">
      <h3 class="text-xl font-bold text-white">{{ item.title }}</h3>
      <p class="text-sm text-gray-400">{{ item.company }} • {{ item.date }}</p>
      <p class="mt-2 text-gray-300">{{ item.description }}</p>
    </div>
  </div>
</template>
