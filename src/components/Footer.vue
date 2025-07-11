<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer-container">
    <div class="footer-top">
      <div class="footer-brand">
        <h2>Imobiliária Exemplo</h2>
        <p>Transformando sonhos em realidade com segurança, qualidade e transparência.</p>
        <!--
          <img src="/logo-imobiliaria.png" alt="Logo Imobiliária" class="footer-logo" />
        -->
      </div>

      <div class="footer-contact">
        <h3>Fale Conosco</h3>
        <ul>

            <li><i class="fas fa-envelope"></i> contato@imobiliariaexemplo.com</li>
            <li><i class="fas fa-phone-alt"></i> (11) 1234-5678</li>
            <li><i class="fas fa-map-marker-alt"></i> Av. Central, 123 - São Paulo, SP</li>

        </ul>
      </div>

      <div class="footer-social">
        <h3>Redes Sociais</h3>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-whatsapp"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <div class="footer-newsletter">
        <h3>Receba Nossas Novidades</h3>
        <form @submit.prevent="subscribe">
          <input type="email" placeholder="Digite seu e-mail" required />
          <button type="submit">Inscrever</button>
        </form>
      </div>
    </div>

    <div class="footer-map">
      <!-- Simulando mapa, pode usar iframe real se desejar -->
      <div class="map-placeholder">
        <p>Mapa da Localização</p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-links">
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
        <a href="#">Ajuda</a>
      </div>
      <p>&copy; 2025 Imobiliária Exemplo. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer-container {
  background: linear-gradient(135deg, #002244, #003b5c);
  color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
  z-index: 9999;
}

.footer-top {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  padding: 60px 40px 40px;
  max-width: 1280px;
  margin: 0 auto;
  margin-top: 5%;
}

.footer-brand h2 {
  font-size: 2rem;
  color: #00e1ff;
  margin-bottom: 10px;
}

.footer-brand p {
  font-size: 1rem;
  color: #ffffffcc;
  line-height: 1.6;
  margin-bottom: 20px;
}

.footer-logo {
  width: 120px;
  height: auto;
  margin-top: 10px;
  filter: drop-shadow(0 0 5px #00e1ff88);
}

.footer-contact h3,
.footer-social h3,
.footer-newsletter h3 {
  font-size: 1.3rem;
  color: #00e1ff;
  margin-bottom: 12px;
}

.footer-contact ul {
  list-style: none;
  padding: 0;
}

.footer-contact li {
  margin-bottom: 10px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffffcc;
}

.footer-contact i {
  color: #00e1ff;
  font-size: 1.1rem;
}

.social-icons {
  display: flex;
  gap: 16px;
}

.social-icons a {
  font-size: 1.3rem;
  color: #ffffffcc;
  transition: color 0.3s, transform 0.3s;
}

.social-icons a:hover {
  color: #00e1ff;
  transform: scale(1.2);
}

.footer-newsletter form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-newsletter input {
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
}

.footer-newsletter button {
  background-color: #00e1ff;
  color: #002244;
  padding: 12px 18px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.footer-newsletter button:hover {
  background-color: #00cce1;
}

.footer-map {
  padding: 30px 40px;
  background-color: #001c33;
  display: flex;
  justify-content: center;
}

.map-placeholder {
  background-color: #003b5c;
  border: 2px dashed #00e1ff77;
  color: #00e1ff;
  width: 100%;
  max-width: 1280px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
}

.footer-bottom {
  padding: 20px 30px;
  background-color: #00192c;
  text-align: center;
  border-top: 1px solid #ffffff22;
}

.footer-bottom p {
  margin-top: 10px;
  font-size: 0.95rem;
  color: #ffffff88;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.footer-links a {
  color: #ffffffaa;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #00e1ff;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }

  .footer-map {
    padding: 20px;
  }

  .footer-bottom {
    padding: 20px;
  }
}
</style>
