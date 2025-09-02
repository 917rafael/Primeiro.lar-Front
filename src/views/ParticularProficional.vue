<template>
  <div class="pagina-anuncio">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
        <div class="hero-texto">
          <h1>
            Você está na melhor <br />
            plataforma de anúncios <br />
            imobiliários do <span class="brasil">Brasil!</span>
          </h1>
          <p class="subtexto">
            Feito para imobiliárias, corretores, <br />
            construtoras e proprietários de imóveis!
          </p>

          <div class="botoes">
            <button class="btn profissional">
              <i class="fas fa-briefcase"></i>
              Corretor
            </button>
            <button class="btn particular">
              <i class="fas fa-user"></i>
              Interessado
            </button>
          </div>
        </div>

        <div class="hero-imagem">
          <img src="../img/mulher-poltrona.png" alt="Mulher sentada" />
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section class="beneficios">
      <div class="beneficio-card">
        <div class="icon-circle">
          <i class="fas fa-users"></i>
        </div>
        <div>
          <h3>Milhões de oportunidades</h3>
          <p>de negócio todos os dias</p>
        </div>
      </div>
      <div class="beneficio-card">
        <div class="icon-circle">
          <i class="fas fa-bullhorn"></i>
        </div>
        <div>
          <h3>Anuncie rápido</h3>
          <p>e vire a chave para novas conquistas</p>
        </div>
      </div>
      <div class="beneficio-card">
        <div class="icon-circle">
          <i class="fas fa-desktop"></i>
        </div>
        <div>
          <h3>Plataforma simples</h3>
          <p>e intuitiva</p>
        </div>
      </div>
    </section>

    <!-- Rodapé -->
    <footer class="rodape">
      <p>Perguntas Frequentes</p>
    </footer>
  </div>
</template>

<script setup>
// Ainda sem lógica JS, apenas visual
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.pagina-anuncio {
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
  background: linear-gradient(135deg, #f9f9f9 0%, #ffe6eb 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* HERO */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle at top left, #ff8095, transparent 70%),
              radial-gradient(circle at bottom right, #ffc3cc, transparent 70%);
  z-index: 0;
  opacity: 0.4;
}

.hero-content {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1;
}

.hero-texto {
  flex: 1;
  min-width: 320px;
  animation: fadeInLeft 1s ease forwards;
}

.hero-texto h1 {
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.hero-texto .brasil {
  color: #e60023;
  text-shadow: 0 2px 6px rgba(230, 0, 35, 0.2);
}

.subtexto {
  color: #444;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.botoes {
  display: flex;
  gap: 1rem;
}

.btn {
  background: #e60023;
  color: white;
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 6px 14px rgba(230, 0, 35, 0.25);
}

.btn:hover {
  background: #c4001e;
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(230, 0, 35, 0.35);
}

.hero-imagem img {
  max-width: 340px;
  margin: auto;
  display: block;
  animation: fadeInRight 1s ease forwards;
}

/* BENEFÍCIOS */
.beneficios {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 4rem 2rem;
}

.beneficio-card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  flex: 1;
  min-width: 280px;
  max-width: 340px;
  display: flex;
  gap: 1rem;
  align-items: center;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.beneficio-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

.icon-circle {
  background: #ffe6ea;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: #e60023;
  box-shadow: inset 0 0 8px rgba(230, 0, 35, 0.15);
}

/* RODAPÉ */
.rodape {
  background: #f8f8f8;
  padding: 1.8rem;
  text-align: center;
  color: #444;
  font-weight: 500;
  font-size: 1.1rem;
  border-top: 1px solid #e0e0e0;
}

/* ANIMAÇÕES */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* RESPONSIVO */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  .hero-imagem img {
    margin-top: 2rem;
    max-width: 260px;
  }
  .botoes {
    justify-content: center;
  }
  .beneficios {
    flex-direction: column;
    align-items: center;
  }
}
</style>
