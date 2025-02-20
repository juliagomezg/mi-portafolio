<script setup lang="ts">
import { ref, computed } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { projects } from "../data/projects";

const selectedTech = ref("Todos");

// Obtener todas las tecnologías únicas
const allTechnologies = computed(() => {
  const techs = new Set(projects.flatMap((project) => project.technologies));
  return ["Todos", ...techs];
});

// Filtrar proyectos por tecnología seleccionada
const filteredProjects = computed(() => {
  if (selectedTech.value === "Todos") return projects;
  return projects.filter((project) => project.technologies.includes(selectedTech.value));
});
</script>

<template>
  <div class="text-center">
    <h2 class="text-3xl font-bold mb-6">Proyectos</h2>

    <!-- Filtro por tecnología -->
    <div class="mb-6">
      <label class="text-white mr-2">Filtrar por tecnología:</label>
      <select v-model="selectedTech" class="p-2 bg-gray-800 text-white rounded">
        <option v-for="tech in allTechnologies" :key="tech" :value="tech">
          {{ tech }}
        </option>
      </select>
    </div>

    <!-- Lista de proyectos filtrados -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <ProjectCard v-for="project in filteredProjects" :key="project.id" v-bind="project" />
    </div>
  </div>
</template>
