<script setup>
defineOptions({
  name: 'AppHeader'
});
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

      <div class="cta-buttons">
        <div class="cta-button">
          <button>❤️Favoritos</button>
        </div>
        <div class="cta-button">
          <router-link to="/Cadastrousu"><button>Entrar</button></router-link>
        </div>
      </div>
    </div>
  </header>
</template>


<style scoped>
/* Importa fonte moderna */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');

.header-container {
  width: 100%;
  background: linear-gradient(120deg, #002244 70%, #00e1ff 100%);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.13);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Inter', Arial, sans-serif;
}

.header-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.04em;
}
.logo p {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.04em;
}

.navigation {
  display: flex;
  gap: 2.2rem;
  position: relative;
  align-items: center;
}
.navigation a {
  color: #fff;
  font-size: 1.08rem;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  padding: 6px 0;
  border-radius: 6px;
}
.navigation a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2.5px;
  background-color: #00e1ff;
  transition: width 0.3s;
  border-radius: 2px;
}
.navigation a:hover {
  color: #00e1ff;
  background: rgba(255,255,255,0.07);
}
.navigation a:hover::after {
  width: 100%;
}

.cta-buttons {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 0.7rem;
}
.cta-button {
  margin-left: 0;
}
.cta-button button {
  background: linear-gradient(90deg, #00e1ff 80%, #fff 100%);
  color: #002244;
  padding: 10px 22px;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  box-shadow: 0 2px 8px rgba(0,225,255,0.08);
  outline: none;
}
.cta-button button:hover {
  background: linear-gradient(90deg, #002244 80%, #00e1ff 100%);
  color: #fff;
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 4px 16px rgba(0,225,255,0.12);
}

/* Dropdown */
.dropdown {
  position: relative;
}
.dropdown-content {
  position: absolute;
  top: 38px;
  left: 0;
  background: #fff;
  color: #002244;
  border-radius: 12px;
  padding: 18px 24px;
  display: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.13);
  min-width: 220px;
  z-index: 999;
  animation: fadeIn 0.25s;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-column h4 {
  font-size: 1.08rem;
  margin-bottom: 10px;
  color: #002244;
  border-bottom: 1px solid #00e1ff33;
  padding-bottom: 5px;
  font-weight: 700;
}
.dropdown-column a {
  display: block;
  margin: 6px 0;
  font-size: 0.98rem;
  color: #005a87;
  text-decoration: none;
  transition: color 0.3s;
  border-radius: 6px;
  padding: 4px 0;
}
.dropdown-column a:hover {
  color: #00e1ff;
  background: #f2faff;
}

/* Mobile menu */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  margin-left: 1rem;
}

@media (max-width: 900px) {
  .header-content {
    flex-direction: column;
    align-items: stretch;
    padding: 12px 8px;
    gap: 0.7rem;
  }
  .logo {
    justify-content: center;
    font-size: 1.2rem;
  }
  .navigation {
    flex-direction: column;
    gap: 0.7rem;
    align-items: flex-start;
    margin-top: 0.5rem;
  }
  .cta-buttons {
    justify-content: center;
    margin-left: 0;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
  .dropdown-content {
    position: static;
    min-width: 100%;
    box-shadow: none;
    border-radius: 8px;
    padding: 12px 8px;
    margin-top: 4px;
  }
}
@media (max-width: 600px) {
  .header-content {
    padding: 8px 2px;
    gap: 0.3rem;
  }
  .logo {
    font-size: 1rem;
  }
  .cta-button button {
    font-size: 0.95rem;
    padding: 8px 12px;
    border-radius: 8px;
  }
  .dropdown-content {
    padding: 8px 4px;
  }
}
@media (max-width: 400px) {
  .header-content {
    padding: 4px 0;
  }
  .logo {
    font-size: 0.9rem;
  }
  .cta-button button {
    font-size: 0.85rem;
    padding: 6px 8px;
    border-radius: 6px;
  }
}

/* Animação fadeIn */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Scrollbar custom */
::-webkit-scrollbar {
  width: 8px;
  background: #f2faff;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background: #00e1ff;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background: #005a87;
}
</style>
