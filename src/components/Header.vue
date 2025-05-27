<script setup>
</script>

<template>
  <header class="header-container">
    <div class="header-content">

      <div class="logo">
       <p>logo</p> <!-- <img src="/logo-imobiliaria.png" alt="Logo da Imobiliária" /> -->
      </div>

      <nav class="navigation">
        <a href="#">Início</a>
        <a href="#">Comprar</a>
        <a href="#">Alugar</a>
        <a href="#">Lançamentos</a>
        <a href="#">Contato</a>
      </nav>

      <div class="cta-button">
        <button>Agende uma Visita</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  width: 100%;
  background: linear-gradient(135deg, #002244, #005a87);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.logo img {
  height: 50px;
  width: auto;
}

.navigation {
  display: flex;
  gap: 32px;
}

.navigation a {
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
}

.navigation a::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #00e1ff;
  transition: width 0.3s;
}

.navigation a:hover {
  color: #00e1ff;
}

.navigation a:hover::after {
  width: 100%;
}

.cta-button button {
  background-color: #00e1ff;
  color: #002244;
  padding: 12px 22px;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  box-shadow: 0 4px 12px rgba(0, 225, 255, 0.4);
}

.cta-button button:hover {
  background-color: #00cce1;
  transform: translateY(-2px);
}
</style>
