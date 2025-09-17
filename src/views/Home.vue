<template>
    <!-- Hero -->

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
            <router-link to="/PaginaAnuncio">
              <button class="btn particular">
                Interessado
              </button>
            </router-link>
          </div>
        </div>
        <div class="hero-imagem">
          <!-- <img src="../img/mulher-poltrona.png" alt="Mulher sentada" /> -->
        </div>
      </div>
    </section>

    <!-- ANÚNCIOS -->
    <section class="anuncios">
      <h2 class="anuncios-titulo">Imóveis em destaque</h2>
      <div class="anuncios-lista">
        <div v-for="(anuncio, idx) in anuncios" :key="idx" class="anuncio-card">
          <img :src="anuncio.image" alt="Imagem do imóvel" class="anuncio-img" />
          <div class="anuncio-info">
            <h3>{{ anuncio.title }}</h3>
            <p class="anuncio-address">{{ anuncio.address }}</p>
            <div class="anuncio-details">
              <span>📏 {{ anuncio.area }}</span>
              <span>🛏️ {{ anuncio.rooms }} quartos</span>
              <span>🛁 {{ anuncio.bathrooms }} banheiros</span>
              <span>🚗 {{ anuncio.garage }} vagas</span>
            </div>
            <span class="anuncio-price">{{ anuncio.price }}</span>
            <p class="anuncio-desc">{{ anuncio.description }}</p>
          </div>
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
const anuncios = [
  {
    title: "Chácara à venda",
    address: "Rodovia Paulo Rolin Loureiro, 134, Mogi das Cruzes/SP",
    area: "11.000m²",
    rooms: 2,
    bathrooms: 2,
    garage: 4,
    price: "R$ 800.000",
    image: ('@/assets/img/image.png'),
    description: "Linda chácara com área verde, piscina, churrasqueira e fácil acesso à cidade."
  },
  {
    title: "Apartamento moderno",
    address: "Av. Paulista, 1000, São Paulo/SP",
    area: "120m²",
    rooms: 3,
    bathrooms: 2,
    garage: 2,
    price: "R$ 1.200.000",
    image: ('@/assets/img/apartamento.png'),
    description: "Apartamento com varanda gourmet, lazer completo e ótima localização."
  },
  {
    title: "Casa aconchegante",
    address: "Rua das Flores, 45, Campinas/SP",
    area: "200m²",
    rooms: 4,
    bathrooms: 3,
    garage: 3,
    price: "R$ 950.000",
    image: ('@/assets/img/casa.png'),
    description: "Casa espaçosa, recém-reformada, com quintal e área de lazer."
  }
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

:root {
  --cor1: #fff;
  --cor2: #545454;
}

.pagina-anuncio {
  font-family: 'Inter', sans-serif;
  color: var(--color1);
  background: linear-gradient(135deg, var(--cor1) 0%, var(--cor2) 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* HERO */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem 2rem 2rem;
  position: relative;
  overflow: hidden;
  background: var(--color2);
  box-shadow: 0 8px 32px rgba(17,77,77,0.08);
}

.hero::before {
  content: "";
  position: absolute;
  top: -20%;
  left: -20%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle at top left, var(--color4) 60%, transparent 70%),
              radial-gradient(circle at bottom right, var(--color3) 40%, transparent 70%);
  z-index: 0;
  opacity: 0.25;
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
  color: var(--color5);
  text-shadow: 0 2px 12px rgba(39,25,28,0.12);
}

.hero-texto .brasil {
  color: var(--color4);
  text-shadow: 0 2px 6px rgba(110,153,135,0.2);
}

.subtexto {
  color: var(--color5);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.85;
}

.botoes {
  display: flex;
  gap: 1rem;
}

.btn {
  background: var(--color3);
  color: var(--color5);
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 6px 14px rgba(17,77,77,0.18);
  border: 2px solid var(--color4);
}

.btn.profissional {
  background: var(--color4);
  color: var(--color1);
  border-color: var(--color3);
}

.btn.particular {
  background: var(--color4);
  color: var(--color1);
  border-color: var(--color3);
}

.btn:hover {
  background: var(--color2);
  color: var(--color5);
  box-shadow: 0 8px 18px rgba(17,77,77,0.28);
  transform: translateY(-3px) scale(1.04);
}

.hero-imagem img {
  max-width: 340px;
  margin: auto;
  display: block;
  animation: fadeInRight 1s ease forwards;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(39,25,28,0.10);
  border: 4px solid var(--color4);
}

/* ANÚNCIOS */
.anuncios {
  padding: 3rem 2rem;
  background: rgba(224,228,206,0.7);
  border-radius: 24px;
  margin: 2rem auto;
  max-width: 1200px;
  box-shadow: 0 8px 32px rgba(17,77,77,0.08);
}

.anuncios-titulo {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color3);
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 1px;
}

.anuncios-lista {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.anuncio-card {
  background: var(--color5);
  border-radius: 18px;
  box-shadow: 0 6px 24px rgba(110,153,135,0.10);
  overflow: hidden;
  width: 320px;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color4);
}

.anuncio-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 12px 32px rgba(110,153,135,0.18);
  border-color: var(--color3);
}

.anuncio-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.anuncio-info {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.anuncio-info h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color3);
}

.anuncio-address {
  font-size: 1rem;
  color: var(--color2);
}

.anuncio-details {
  display: flex;
  gap: 1.2rem;
  font-size: 0.95rem;
  color: var(--color1);
  margin: 0.5rem 0;
}

.anuncio-price {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color4);
  margin-top: 0.8rem;
}

.anuncio-desc {
  font-size: 0.98rem;
  color: var(--color2);
  margin-top: 0.5rem;
  opacity: 0.85;
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
  background: var(--color5);
  border-radius: 18px;
  padding: 2rem;
  flex: 1;
  min-width: 280px;
  max-width: 340px;
  display: flex;
  gap: 1rem;
  align-items: center;
  box-shadow: 0 10px 24px rgba(17,77,77,0.10);
  border: 2px solid var(--color4);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}

.beneficio-card:hover {
  transform: translateY(-6px) scale(1.03);
  box-shadow: 0 14px 28px rgba(17,77,77,0.18);
  border-color: var(--color3);
}

.icon-circle {
  background: var(--color4);
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: var(--color5);
  box-shadow: 0 2px 8px rgba(17,77,77,0.10);
}

.beneficio-card h3 {
  color: var(--color3);
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.beneficio-card p {
  color: var(--color2);
  font-size: 1rem;
  opacity: 0.85;
}

/* RODAPÉ */
.rodape {
  background: var(--color2);
  padding: 1.8rem;
  text-align: center;
  color: var(--color5);
  font-weight: 500;
  font-size: 1.1rem;
  border-top: 2px solid var(--color4);
  letter-spacing: 0.5px;
  box-shadow: 0 -2px 12px rgba(17,77,77,0.08);
  border-radius: 24px 24px 0 0;
  margin-top: 2rem;
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
@media (max-width: 900px) {
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
  .anuncios-lista {
    flex-direction: column;
    align-items: center;
  }
  .anuncio-card {
    width: 98vw;
    max-width: 340px;
  }
  .beneficios {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
  }
  .beneficio-card {
    max-width: 98vw;
  }
  .rodape {
    border-radius: 0;
    margin-top: 1rem;
  }
}
</style>