<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import DetalhesDoAnuncio from './DetalhesDoAnuncio.vue';

const property = {
  title: "Chácara / sítio à venda",
  address: "Rodovia Paulo Rolin Loureiro, 134, Biritiba Ussu, Mogi das Cruzes/SP",
  area: "11.000m²",
  rooms: 2,
  price: "R$ 800.000",
  image: "/img/imovel.jpg",
};



</script>

<template>
  <div class="container">
    <div class="property-card">
    
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

          <button class="contact-button"
          @click="DetalhesDoAnuncio && $router.push(`/Detalhes`)">Contatar anunciante</button>
       
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.container {
  display: flex;
  justify-content: flex-end; 
  padding: 60px 20px;
  background: #f5f5f5;
}



.property-card {
  display: flex;
  flex-direction: row;
  width: 950px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.property-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.12);
}

.image-section {
  position: relative;
  width: 50%;
  overflow: hidden;
}

.property-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.property-card:hover .property-image {
  transform: scale(1.05);
}

.price-tag {
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: #e50914;
  color: #fff;
  padding: 10px 18px;
  font-weight: 700;
  border-radius: 12px;
  font-size: 18px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
}

.info-section {
  width: 50%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Inter', sans-serif;
}

.property-type {
  font-size: 14px;
  font-weight: 600;
  color: #888;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.property-address {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 22px;
  color: #2b2b2b;
  line-height: 1.4;
}

.property-details {
  display: flex;
  gap: 24px;
  margin-bottom: 28px;
}

.detail-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #f8f8f8;
  padding: 10px 14px;
  border-radius: 10px;
}

.emoji {
  font-size: 18px;
}

.label {
  font-size: 14px;
  color: #666;
}

.value {
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.contact-button {
  background: linear-gradient(135deg, #e50914, #b20710);
  color: white;
  border: none;
  padding: 14px 30px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  align-self: flex-start;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background: linear-gradient(135deg, #b20710, #e50914);
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(229, 9, 20, 0.3);
}

/* Responsivo */
@media (max-width: 768px) {
  .property-card {
    flex-direction: column;
    width: 100%;
  }

  .image-section,
  .info-section {
    width: 100%;
  }

  .price-tag {
    font-size: 16px;
    padding: 8px 14px;
  }

  .property-address {
    font-size: 20px;
  }
}
</style>
