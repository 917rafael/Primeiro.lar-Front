<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue"
import DetalhesDoAnuncio from "./DetalhesDoAnuncio.vue"
import apartamente from '@/assets/img/image.png'

const isOpen = ref(false)

const property = {
  title: "Chácara / sítio à venda",
  address: "Rodovia Paulo Rolin Loureiro, 134, Biritiba Ussu, Mogi das Cruzes/SP",
  area: "11.000m²",
  rooms: 2,
  price: "R$ 800.000",
  image: apartamente
};

function abrirDetalhes() {
  isOpen.value = true;
}
function fecharDetalhes() {
  isOpen.value = false;
}


</script>

<template>
  <div class="container">
    <div class="property-card" @click="abrirDetalhes" tabindex="0" aria-label="Ver detalhes do anúncio">
      <div class="image-section">
        <img :src="property.image" alt="Imagem do imóvel" class="property-image" />
        <span class="price-tag">{{ property.price }}</span>
      </div>
      <div class="info-section">
        <p class="property-type">{{ property.title }}</p>
        <h2 class="property-address">{{ property.address }}</h2>
        <div class="property-details">
          <div class="detail-box">
            <span class="emoji">📏</span>
            <span class="label">Área:</span>
            <span class="value">{{ property.area }}</span>
          </div>
          <div class="detail-box">
            <span class="emoji">🛏️</span>
            <span class="label">Quartos:</span>
            <span class="value">{{ property.rooms }}</span>
          </div>
        </div>
      </div>
    </div>
    <DetalhesDoAnuncio v-if="isOpen" @close="fecharDetalhes" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.container {
  display: flex;
  flex-direction: column;
  gap: 10px; 
  justify-content: flex-end;
  align-items: flex-end;
  min-height: 50vh;
  padding: 30px 10px; 
}

.property-card {
  display: flex;
  flex-direction: row;
  width: 950px;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.10);
  transition: transform 0.35s, box-shadow 0.35s;
  cursor: pointer;
  border: 1.5px solid #e3f6ff;
  position: relative;
  animation: fadeInCard 0.4s;
}
.property-card:focus {
  outline: 2px solid #00b6e0;
  outline-offset: 2px;
}
.property-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.16);
  border-color: #00b6e0;
}

@keyframes fadeInCard {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.image-section {
  position: relative;
  width: 50%;
  overflow: hidden;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.property-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 0 0 24px;
  transition: transform 0.6s;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
}
.property-card:hover .property-image {
  transform: scale(1.05);
}
.price-tag {
  position: absolute;
  bottom: 18px;
  left: 18px;
  background: linear-gradient(90deg, #e50914 80%, #ffb3c1 100%);
  color: #fff;
  padding: 12px 22px;
  font-weight: 700;
  border-radius: 14px;
  font-size: 20px;
  box-shadow: 0 4px 15px rgba(229, 9, 20, 0.18);
  letter-spacing: 0.03em;
  border: 1.5px solid #fff;
}

.info-section {
  width: 50%;
  padding: 38px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  background: #fff;
}
.property-type {
  font-size: 15px;
  font-weight: 600;
  color: #00b6e0;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.property-address {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 26px;
  color: #2b2b2b;
  line-height: 1.4;
  letter-spacing: 0.01em;
}
.property-details {
  display: flex;
  gap: 28px;
  margin-bottom: 32px;
}
.detail-box {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f8f8f8;
  padding: 12px 18px;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0,182,224,0.04);
  font-size: 16px;
  font-weight: 500;
  color: #333;
}
.emoji {
  font-size: 22px;
}
.label {
  font-size: 15px;
  color: #666;
}
.value {
  font-size: 16px;
  font-weight: 700;
  color: #2b2b2b;
}

/* Detalhes extras visuais */
.property-card::after {
  content: "Clique para ver detalhes";
  position: absolute;
  bottom: 12px;
  right: 24px;
  background: #00b6e0;
  color: #fff;
  font-size: 0.95rem;
  padding: 6px 16px;
  border-radius: 8px;
  opacity: 0.85;
  pointer-events: none;
  font-weight: 600;
  letter-spacing: 0.01em;
  box-shadow: 0 1px 4px rgba(0,182,224,0.08);
}
.property-card:hover::after {
  opacity: 1;
}

/* Responsivo */
@media (max-width: 1100px) {
  .property-card {
    width: 98vw;
  }
}
@media (max-width: 900px) {
  .container {
    justify-content: flex-end;
    padding: 30px 4px;
  }
  .property-card {
    flex-direction: column;
    width: 100%;
    min-width: 0;
    border-radius: 18px;
  }
  .image-section,
  .info-section {
    width: 100%;
    min-height: 220px;
    padding: 0;
  }
  .info-section {
    padding: 24px 18px;
  }
  .property-address {
    font-size: 20px;
  }
  .price-tag {
    font-size: 16px;
    padding: 8px 14px;
    left: 12px;
    bottom: 12px;
  }
  .property-card::after {
    right: 12px;
    bottom: 8px;
    font-size: 0.9rem;
    padding: 4px 10px;
  }
}
@media (max-width: 600px) {
  .container {
    justify-content: flex-end;
    padding: 10px 0;
    min-height: 60vh;
  }
  .property-card {
    border-radius: 10px;
    box-shadow: 0 4px 18px rgba(0,0,0,0.10);
  }
  .image-section {
    min-height: 120px;
  }
  .info-section {
    padding: 12px 8px;
  }
  .property-address {
    font-size: 16px;
  }
  .property-type {
    font-size: 12px;
  }
  .detail-box {
    font-size: 13px;
    padding: 8px 10px;
    border-radius: 8px;
  }
  .emoji {
    font-size: 16px;
  }
  .label, .value {
    font-size: 13px;
  }
  .property-card::after {
    font-size: 0.8rem;
    padding: 2px 6px;
    right: 6px;
    bottom: 4px;
  }
}

/* Scrollbar custom */
::-webkit-scrollbar {
  width: 8px;
  background: #e3f6ff;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background: #00b6e0;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background: #e50914;
}
</style>
