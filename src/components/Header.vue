<script setup>
</script>
<template>
  <header class="header-container">
    <div class="header-content">

      <div class="logo">
        <p>logo</p>
      </div>

      <nav class="navigation">
        <div class="dropdown">
          <a href="#">Comprar</a>
          <div class="dropdown-content">
            <div class="dropdown-column">
              <h4>Apartamentos</h4>
              <a href="#">Casas</a>
              <a href="#">Lançamentos</a>
              <a href="#">Imóveis Comerciais</a>
              <a href="#">Ver todos →</a>
            </div>
          </div>
        </div>

        <div class="dropdown">
          <a href="#">Alugar</a>
          <div class="dropdown-content">
            <div class="dropdown-column">
              <h4>Apartamentos</h4>
              <a href="#">Casas</a>
              <a href="#">Kitnets</a>
              <a href="#">Imóveis Comerciais</a>
              <a href="#">Ver todos →</a>
            </div>
          </div>
        </div>

        <a href="#">Lançamentos</a>
      </nav>

      <div class="cta-button">
        <button>❤️Favoritos</button>
      </div>

      <div class="cta-button">
        <router-link to="/ParticularProficional"><button>Entrar</button></router-link>
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
  position: relative;
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

.cta-button {
  margin-left: 12px;
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

/* Dropdown */
.dropdown {
  position: relative;
}

.dropdown-content {
  position: absolute;
  top: 40px;
  left: 0;
  background: #ffffff;
  color: #002244;
  border-radius: 8px;
  padding: 20px 30px;
  display: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  min-width: 240px;
  z-index: 999;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-column h4 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #002244;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}

.dropdown-column a {
  display: block;
  margin: 6px 0;
  font-size: 0.95rem;
  color: #002244cc;
  text-decoration: none;
  transition: color 0.3s;
}

.dropdown-column a:hover {
  color: #00b6e0;
}
</style>
