<script setup lang="ts">
defineProps<{
  name: string;
  description: string;
  technologies: string[];
  repo: string;
}>();
</script>

<template>
  <ClientOnly>
    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1 }"
      :hover="{ scale: 1.05 }"
      class="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <h3 class="text-xl font-bold">{{ name }}</h3>
      <p class="mt-2 text-gray-300 dark:text-gray-700">{{ description }}</p>
      <p class="text-sm mt-2 text-gray-400 dark:text-gray-600">
        <strong>Tecnologías:</strong> {{ technologies.join(", ") }}
      </p>

      <a
        :href="repo"
        target="_blank"
        class="text-blue-400 dark:text-blue-600 mt-4 block hover:underline hover:text-blue-500 dark:hover:text-blue-700 transition"
      >
        🔗 Ver en GitHub
      </a>
    </div>
  </ClientOnly>
</template>
