<script setup>
const property = {
  title: "Chácara / sítio à venda",
  address: "Rodovia Paulo Rolin Loureiro, 134, Biritiba Ussu, Mogi das Cruzes/SP",
  area: "11.000m²",
  rooms: 2,
  price: "R$ 800.000",
  image: "/img/imovel.jpg", // Coloque o caminho da imagem correta aqui
};
</script>

<template>
<div class="container">
  <div class="property-card">
    <img :src="property.image" alt="Imagem do imóvel" class="property-image" />
    <div class="property-info">
      <p class="property-type">{{ property.title }}</p>
      <h2 class="property-address">{{ property.address }}</h2>
      <div class="property-details">
        <span>📏 {{ property.area }}</span>
        <span>🛏️ {{ property.rooms }}</span>
      </div>
      <div class="property-price">{{ property.price }}</div>
      <button class="contact-button">Contatar</button>
    </div>
  </div>
</div>
</template>

<style scoped>
.container{
    display: flex;
    justify-content: flex-end;
    width: 100%;               
    padding: 40px 20px;  
}

.property-card {
  display: flex;
  background: rgb(168, 168, 168);
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  max-width: 900px;
  margin-top: 5%;
 
  
}

.property-image {
  width: 50%;
  object-fit: cover;
}

.property-info {
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.property-type {
  font-size: 14px;
  color: #777;
}

.property-address {
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0 15px;
}

.property-details span {
  margin-right: 20px;
  font-size: 14px;
}

.property-price {
  font-size: 22px;
  font-weight: bold;
  color: #222;
  margin: 15px 0;
}

.contact-button {
  align-self: start;
  background-color: #e50914;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.contact-button:hover {
  background-color: #c40812;
}
</style>
