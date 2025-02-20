<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");
const success = ref(false);

const sendMessage = () => {
  console.log("Mensaje enviado:", { name: name.value, email: email.value, message: message.value });
  success.value = true;
};
</script>

<template>
  <div class="max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-xl shadow-md">
    <h2 class="text-2xl font-bold mb-4">Contacto</h2>

    <form @submit.prevent="sendMessage">
      <label class="block mb-2">Nombre:</label>
      <input v-model="name" type="text" class="w-full p-2 rounded bg-gray-700 text-white mb-4" required />

      <label class="block mb-2">Email:</label>
      <input v-model="email" type="email" class="w-full p-2 rounded bg-gray-700 text-white mb-4" required />

      <label class="block mb-2">Mensaje:</label>
      <textarea v-model="message" class="w-full p-2 rounded bg-gray-700 text-white mb-4" required></textarea>

      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Enviar Mensaje
      </button>

      <p v-if="success" class="mt-4 text-green-400">Mensaje enviado con éxito 🎉</p>
    </form>
  </div>
</template>
