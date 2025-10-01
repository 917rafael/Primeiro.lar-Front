<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <!-- Cabeçalho -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-xl font-semibold text-gray-800">
        Saiba como é morar nas principais cidades
      </h1>
      <button class="text-blue-600 hover:underline">Ver mais cidades →</button>
    </div>

    <!-- Grid de cidades -->
    <div class="grid grid-cols-4 gap-6">
      <div
        v-for="(city, index) in cities"
        :key="index"
        class="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition flex flex-col"
      >
        <div class="image-container overflow-hidden rounded-t-xl">
          <img
            :src="city.image"
            :alt="city.name"
            class="w-full h-40 object-cover"
          />
        </div>
        <div class="flex justify-between items-center p-4">
          <h2 class="text-gray-800 font-medium">{{ city.name }}</h2>
          <button
            class="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Ver mais"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imageRio from '../assets/img/image.png';

const cities = [
  {
    name: "Rio de Janeiro",
    image: imageRio,
  },
  {
    name: "Belo Horizonte",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Belo_Horizonte_-_Minas_Gerais.jpg",
  },
  {
    name: "Curitiba",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Jardim_Bot%C3%A2nico_de_Curitiba.jpg",
  },
  {
    name: "Praia Grande",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Praia_Grande_Sunset.jpg",
  },
  {
    name: "Salvador",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Pelourinho_Salvador.jpg",
  },
  {
    name: "São Paulo",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Sao_Paulo_Avenida_Paulista.jpg",
  },
  {
    name: "Campinas",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Campinas_city.jpg",
  },
  {
    name: "Porto Alegre",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Porto_Alegre_city.jpg",
  },
];
</script>

<style>
/* Estilo opcional */
body {
  font-family: "Inter", sans-serif;
}
</style>
