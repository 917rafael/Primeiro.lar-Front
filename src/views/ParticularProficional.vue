<template>
  <div class="pagina-anuncio">
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
              Profissional
            </button>
            <button class="btn particular">
              <i class="fas fa-user"></i>
              Particular
            </button>
          </div>
        </div>

        <div class="hero-imagem">
            
            <!-- <img src="/img/mulher-poltrona.png" alt="Mulher sentada" />-->
        </div> 
      </div>
    </section>

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

    <footer class="rodape">
      <p>Perguntas Frequentes</p>
    </footer>
  </div>
</template>

<script setup>
// Nenhuma lógica JS por enquanto, só estrutura visual
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.pagina-anuncio {
  font-family: 'Inter', sans-serif;
  background: #fff;
  color: #1a1a1a;
  padding: 2rem;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
}

.hero-content {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.hero-texto {
  flex: 1;
  min-width: 320px;
}

.hero-texto h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
}

.hero-texto .brasil {
  color: #e60023;
}

.subtexto {
  color: #666;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.botoes {
  display: flex;
  gap: 1rem;
}

.btn {
  background: #e60023;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn:hover {
  background: #c4001e;
}

.hero-imagem img {
  max-width: 300px;
  margin: auto;
  display: block;
}

.beneficios {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 3rem 0;
}

.beneficio-card {
  background: #fff5f7;
  border: 1px solid #ffd6dd;
  border-radius: 12px;
  padding: 2rem;
  flex: 1;
  min-width: 280px;
  max-width: 360px;
  display: flex;
  gap: 1rem;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.beneficio-card:hover {
  transform: translateY(-5px);
}

.icon-circle {
  background: #ffe6ea;
  border-radius: 50%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #e60023;
}

.rodape {
  background: #f5f5f5;
  padding: 1.5rem;
  text-align: center;
  color: #555;
  font-weight: 500;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  .hero-imagem img {
    margin-top: 2rem;
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
