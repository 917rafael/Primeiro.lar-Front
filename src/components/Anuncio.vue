<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
const property = {
  title: "Chácara / sítio à venda",
  address: "Rodovia Paulo Rolin Loureiro, 134, Biritiba Ussu, Mogi das Cruzes/SP",
  area: "11.000m²",
  rooms: 2,
  price: "R$ 800.000",
  image: "/img/imovel.jpg", // Atualize com o caminho correto da imagem
};
</script>

<template>
  <div class="container">
    <div class="property-card">
      <div class="image-section">
        <img :src="property.image" alt="Imagem do imóvel" class="property-image" />
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

        <div class="property-price">{{ property.price }}</div>

        <button class="contact-button">Contatar</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: flex-end; /* Fica à direita */
  padding: 60px 20px;
  background-color: #7a3737;
  width: 100%;
  max-width: 1005px; /* Limite de largura opcional */
  margin-left: auto; /* Para empurrar à direita */
  margin-right: 0;
}


.property-card {
  display: flex;
  width: 900px;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.property-card:hover {
  transform: scale(1.01);
}

.image-section {
  width: 50%;
}

.property-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-section {
  width: 50%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.property-type {
  font-size: 15px;
  font-weight: 600;
  color: #777;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.property-address {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.property-details {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.detail-box {
  display: flex;
  align-items: center;
  gap: 6px;
}

.emoji {
  font-size: 18px;
}

.label {
  font-size: 14px;
  color: #666;
}

.value {
  font-size: 16px;
  font-weight: 600;
  color: #444;
}

.property-price {
  font-size: 26px;
  font-weight: bold;
  color: #2a2a2a;
  margin-bottom: 20px;
}

.contact-button {
  background-color: #e50914;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  align-self: flex-start;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #c40812;
}
</style>
