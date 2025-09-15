<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const anuncio = ref({})

onMounted(() => {
  const dados = localStorage.getItem('anuncioPreview')
  anuncio.value = dados ? JSON.parse(dados) : {}
})

function voltarHome() {
  router.push('/')
}
</script>

<template>
  <div class="overlay">
    <div class="anuncio-container">
      <div class="anuncio-page">
        <h2 class="top-message">É assim que as pessoas verão seu anúncio</h2>
        <div class="content">
          <div class="left-column">
            <div v-if="anuncio.imagem" style="margin-bottom:1rem;">
              <img :src="anuncio.imagem" alt="Imagem do imóvel" style="max-width:100%;border-radius:8px;" />
            </div>
            <h2 class="price">{{ anuncio.preco }}</h2>
            <div class="location">📍 {{ anuncio.endereco }} - {{ anuncio.cidade }} - {{ anuncio.estado }}</div>
            <div class="info-box">
              <span>Operação: {{ anuncio.operacao }}</span>
              <span>Tipo: {{ anuncio.tipo }}</span>
              <span>Área útil: {{ anuncio.areaUtil }} m²</span>
              <span>Área total: {{ anuncio.areaTotal }} m²</span>
              <span>Quartos: {{ anuncio.quartos }}</span>
              <span>Suítes: {{ anuncio.suites }}</span>
              <span>Banheiros: {{ anuncio.banheiros }}</span>
              <span>Garagens: {{ anuncio.garagens }}</span>
              <span>CEP: {{ anuncio.cep }}</span>
            </div>
            <h3>{{ anuncio.titulo }}</h3>
            <p class="description">{{ anuncio.descricao }}</p>
            <div class="comodidades">
              <h4>Área privativa</h4>
              <ul>
                <li v-for="a in anuncio.areasPrivativas?.split(',').map(a => a.trim()).filter(a => a)" :key="a">✔ {{ a }}</li>
              </ul>
              <h4>Área comum</h4>
              <ul>
                <li v-for="a in anuncio.areasComuns?.split(',').map(a => a.trim()).filter(a => a)" :key="a">✔ {{ a }}</li>
              </ul>
            </div>
            <button class="btn anunciar" @click="voltarHome">Obrigado!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.55);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  z-index: 1000;
  overflow-y: auto;
  animation: fadeIn 0.3s ease;
}
.anuncio-container {
  width: 100%;
  max-width: 700px;
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 8px 26px rgba(0,0,0,0.25);
  animation: slideUp 0.35s ease;
}
.anuncio-page {
  font-family: 'Inter', sans-serif;
  color: #222;
  background: #fff;
  line-height: 1.6;
}
.top-message {
  text-align: center;
  color: #e60023;
  font-size: 1.3rem;
  margin: 2rem 0 1rem 0;
  font-weight: 600;
}
.content {
  padding: 2rem;
}
.left-column {
  max-width: 500px;
  margin: 0 auto;
}
.price {
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #e60023;
}
.location {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}
.info-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.2rem 0;
}
.info-box span {
  background: #f8f8f8;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.95rem;
  border: 1px solid #eee;
}
.description {
  margin-bottom: 1rem;
}
.comodidades h4 {
  margin-top: 1rem;
  font-size: 1.1rem;
  color: #222;
}
.comodidades ul {
  margin-bottom: 0.5rem;
}
.btn.anunciar {
  background: #e60023;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;
  width: 100%;
}
.btn.anunciar:hover {
  background: #cc001e;
  transform: translateY(-2px);
}
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@media (max-width: 600px) {
  .anuncio-container { max-width: 100%; }
  .content { padding: 1rem; }
}
</style>
