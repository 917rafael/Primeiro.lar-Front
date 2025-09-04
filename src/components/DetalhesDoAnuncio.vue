<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const property = {
  price: "R$ 350.000",
  location: "Oneida Mendes, Uberaba/MG",
  areaUtil: "120m²",
  areaTotal: "200m²",
  quartos: 2,
  suites: 1,
  banheiros: 3,
  garagens: 2,
  title: "Casa 2 dormitórios à venda oneida mendes uberaba/mg",
  description: "Comodidades: Acessibilidade para PCD, Interfone, Muro, Cerca elétrica, Portão eletrônico, Lavanderia, Quintal, Varanda integrada, Área de serviço, Cozinha grande, Sala de almoço, Cozinha, Sala de estar, Varanda, Banheiro social, Churrasqueira, Espaço gourmet, Janela grande.",
  areasPrivativas: ["Churrasqueira", "Quintal", "Cozinha", "Lavanderia", "Sacada", "Varanda gourmet"],
  areasComuns: ["Interfone", "Área de serviço"]
}

const quickQuestions = [
  "Eu posso visitar?",
  "Aceita permuta?",
  "Me retorne no whatsapp!",
  "Tenho interesse, está disponível?"
]

const contact = ref({
  nome: "",
  email: "",
  telefone: "",
  mensagem: "Olá, gostaria de mais informações sobre este imóvel."
})
</script>

<template>
  <!-- Overlay que cobre a tela -->
  <div class="overlay">
    <!-- Caixa centralizada -->
    <div class="anuncio-container">
      <div class="anuncio-page">
        <!-- Header -->
        <div class="nav-header">
          <button @click="$emit('close')" class="close-btn">✕ Fechar</button>
          <ul>
            <li class="active">Anúncio</li>
            <li>16 Fotos</li>
            <li>Mapa</li>
          </ul>
        </div>

        <div class="content">
          <div class="left-column">
            <div class="breadcrumbs">
              Home > Brasil > MG > Uberaba > Oneida Mendes
            </div>

            <h2 class="price">{{ property.price }}</h2>
            <button class="btn parcelas">Ver parcelas</button>

            <div class="location">
              📍 Endereço Indisponível - {{ property.location }}
            </div>

            <div class="info-box">
              <span>Área útil: {{ property.areaUtil }}</span>
              <span>Área total: {{ property.areaTotal }}</span>
              <span>Quartos: {{ property.quartos }}</span>
              <span>Suítes: {{ property.suites }}</span>
              <span>Banheiros: {{ property.banheiros }}</span>
              <span>Garagens: {{ property.garagens }}</span>
            </div>

            <h3>{{ property.title }}</h3>
            <p class="description">{{ property.description }}</p>

            <div class="comodidades">
              <h4>Área privativa</h4>
              <ul>
                <li v-for="a in property.areasPrivativas" :key="a">✔ {{ a }}</li>
              </ul>

              <h4>Área comum</h4>
              <ul>
                <li v-for="a in property.areasComuns" :key="a">✔ {{ a }}</li>
              </ul>
            </div>

            <div class="quick-questions">
              <h4>Perguntas rápidas para o anunciante</h4>
              <div class="questions">
                <button v-for="q in quickQuestions" :key="q" class="chip">{{ q }}</button>
              </div>
              <textarea maxlength="200" placeholder="Escreva sua pergunta..."></textarea>
              <button class="btn enviar">Enviar</button>
            </div>

            <div class="alerta">
              ⚠ Cuidados a serem tomados: Nunca faça nenhum pagamento antecipado...
            </div>
          </div>

          <!-- Coluna direita -->
          <div class="right-column">
            <div class="contact-box">
              <div class="tabs">
                <button class="active">Mensagem</button>
                <button>Agendar visita</button>
              </div>

              <input type="text" v-model="contact.nome" placeholder="Digite seu nome" />
              <input type="email" v-model="contact.email" placeholder="Digite seu email" />
              <input type="tel" v-model="contact.telefone" placeholder="(xx) xxxxx-xxxx" />
              <textarea v-model="contact.mensagem"></textarea>

              <button class="btn enviar">Enviar mensagem</button>
              <small>Ao enviar, você afirma que leu e concorda com os Termos de Uso.</small>

              <div class="phone">📞 (34) 9841... Ver</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* === Overlay === */
.overlay {
  position: fixed;
  inset: 0;
  background: linear-gradient(120deg, #e60023 0%, #fff 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
  z-index: 1000;
  overflow-y: auto;
  animation: fadeIn 0.3s ease;
  min-height: 100vh;
}

/* Caixa branca centralizada */
.anuncio-container {
  width: 100%;
  max-width: 1100px;
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 32px rgba(0,0,0,0.18), 0 1.5px 6px rgba(230,0,35,0.08);
  animation: slideUp 0.35s ease;
  border: 1px solid #f2f2f2;
  transition: box-shadow 0.3s;
}
.anuncio-container:hover {
  box-shadow: 0 16px 40px rgba(230,0,35,0.15), 0 2px 8px rgba(0,0,0,0.08);
}

/* Estilo interno */
.anuncio-page {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  color: #222;
  background: #fff;
  line-height: 1.7;
  font-size: 1rem;
  letter-spacing: 0.01em;
}

/* Header */
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 1.2rem 2rem;
  background: linear-gradient(90deg, #fafafa 80%, #ffe6ea 100%);
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(230,0,35,0.04);
}
.nav-header ul {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-header li {
  cursor: pointer;
  font-weight: 600;
  padding: 8px 0;
  transition: color 0.2s, border-bottom 0.2s;
  font-size: 1.05rem;
  color: #444;
  position: relative;
}
.nav-header li.active {
  color: #e60023;
  border-bottom: 2.5px solid #e60023;
  background: linear-gradient(90deg, #ffe6ea 60%, #fff 100%);
  border-radius: 6px 6px 0 0;
}
.nav-header li:not(.active):hover {
  color: #e60023;
}

/* Botão fechar */
.close-btn {
  background: #e60023;
  color: #fff;
  padding: 10px 18px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(230,0,35,0.08);
  outline: none;
}
.close-btn:hover, .close-btn:focus {
  background: #b8001a;
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(230,0,35,0.12);
}

/* Conteúdo */
.content {
  display: flex;
  gap: 2.5rem;
  padding: 2.5rem;
  background: linear-gradient(120deg, #fff 80%, #ffe6ea 100%);
  border-radius: 0 0 18px 18px;
}
.left-column {
  flex: 3;
  padding-right: 2rem;
  min-width: 0;
}
.right-column {
  flex: 1.2;
  position: sticky;
  top: 100px;
  height: fit-content;
  min-width: 280px;
  max-width: 350px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(230,0,35,0.06);
  border: 1px solid #f3f3f3;
  padding: 1.2rem 1.5rem;
}

/* Breadcrumbs */
.breadcrumbs {
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 1.2rem;
  letter-spacing: 0.02em;
  background: #f7f7f7;
  padding: 6px 14px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(230,0,35,0.03);
}

/* Price */
.price {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0.5rem 0 0.2rem 0;
  color: #e60023;
  letter-spacing: 0.03em;
  text-shadow: 0 2px 8px rgba(230,0,35,0.08);
}

/* Botões */
.btn {
  background: linear-gradient(90deg, #e60023 80%, #ffb3c1 100%);
  color: #fff;
  padding: 14px 24px;
  border: none;
  border-radius: 10px;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  font-weight: 600;
  margin: 0.5rem 0;
  box-shadow: 0 2px 8px rgba(230,0,35,0.08);
  outline: none;
}
.btn:hover, .btn:focus {
  background: linear-gradient(90deg, #b8001a 80%, #ffb3c1 100%);
  transform: translateY(-2px) scale(1.04);
  box-shadow: 0 4px 16px rgba(230,0,35,0.12);
}
.btn.parcelas {
  background: linear-gradient(90deg, #fff 60%, #ffe6ea 100%);
  color: #e60023;
  border: 1.5px solid #e60023;
  margin-left: 0.5rem;
}
.btn.parcelas:hover {
  background: #ffe6ea;
  color: #b8001a;
}

/* Chips */
.chip {
  border: 1.5px solid #e60023;
  background: #fff;
  padding: 10px 18px;
  border-radius: 22px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #e60023;
  margin: 0.3rem 0.5rem 0.3rem 0;
  transition: all 0.2s;
  box-shadow: 0 1px 4px rgba(230,0,35,0.04);
  outline: none;
}
.chip:hover, .chip:focus {
  background: #e60023;
  color: #fff;
  border-color: #b8001a;
  transform: scale(1.07);
}

/* Info Box */
.info-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  margin: 1.2rem 0;
}
.info-box span {
  background: #f8f8f8;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 1rem;
  border: 1.5px solid #eee;
  color: #444;
  font-weight: 500;
  box-shadow: 0 1px 4px rgba(230,0,35,0.03);
}

/* Títulos */
h2, h3, h4 {
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-weight: 700;
  margin: 1.2rem 0 0.7rem 0;
  color: #e60023;
  letter-spacing: 0.02em;
}
h3 {
  font-size: 1.35rem;
  color: #222;
}
h4 {
  font-size: 1.1rem;
  color: #e60023;
  margin-bottom: 0.5rem;
}

/* Descrição */
.description {
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 1.2rem;
  background: #f7f7f7;
  padding: 12px 18px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(230,0,35,0.03);
}

/* Comodidades */
.comodidades {
  margin-bottom: 1.5rem;
}
.comodidades ul {
  list-style: none;
  padding: 0;
  margin: 0 0 0.8rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.2rem;
}
.comodidades li {
  background: #fff;
  color: #e60023;
  font-weight: 500;
  padding: 7px 14px;
  border-radius: 8px;
  border: 1.5px solid #ffe6ea;
  box-shadow: 0 1px 4px rgba(230,0,35,0.04);
  font-size: 0.98rem;
  transition: background 0.2s;
}
.comodidades li:hover {
  background: #ffe6ea;
  color: #b8001a;
}

/* Quick Questions */
.quick-questions {
  margin-bottom: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(230,0,35,0.04);
  padding: 1.2rem 1.5rem;
  border: 1.5px solid #ffe6ea;
}
.quick-questions .questions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  margin-bottom: 1rem;
}
.quick-questions textarea {
  width: 100%;
  min-height: 60px;
  max-height: 120px;
  margin: 0.5rem 0;
  padding: 12px;
  border: 1.5px solid #e60023;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  transition: border 0.2s;
  outline: none;
  background: #fff;
}
.quick-questions textarea:focus {
  border-color: #b8001a;
  background: #ffe6ea;
}
.quick-questions .btn.enviar {
  width: 100%;
  margin-top: 0.5rem;
}

/* Alerta */
.alerta {
  background: #fff4f4;
  border: 1.5px solid #ffd1d1;
  padding: 1.2rem;
  border-radius: 8px;
  margin-top: 2rem;
  font-size: 1rem;
  color: #a6001a;
  font-weight: 500;
  box-shadow: 0 1px 4px rgba(230,0,35,0.04);
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

/* Contact box */
.contact-box {
  border: 1.5px solid #eee;
  padding: 1.5rem 1.2rem;
  border-radius: 14px;
  background: linear-gradient(120deg, #fff 80%, #ffe6ea 100%);
  box-shadow: 0 3px 12px rgba(230,0,35,0.06);
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
.contact-box .tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.contact-box .tabs button {
  background: none;
  border: none;
  font-size: 1.05rem;
  font-weight: 600;
  color: #888;
  padding: 8px 0;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-bottom 0.2s;
  outline: none;
}
.contact-box .tabs button.active {
  border-bottom: 2.5px solid #e60023;
  color: #e60023;
}
.contact-box .tabs button:hover {
  color: #e60023;
}
.contact-box input,
.contact-box textarea {
  width: 100%;
  margin: 0.5rem 0;
  padding: 12px;
  border: 1.5px solid #e60023;
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
  background: #fff;
  transition: border 0.2s;
  outline: none;
}
.contact-box input:focus,
.contact-box textarea:focus {
  border-color: #b8001a;
  background: #ffe6ea;
}
.contact-box textarea {
  min-height: 60px;
  max-height: 120px;
  resize: vertical;
}
.contact-box .btn.enviar {
  width: 100%;
  margin-top: 0.5rem;
}
.contact-box small {
  color: #888;
  font-size: 0.95rem;
  margin-top: 0.5rem;
}
.contact-box .phone {
  margin-top: 1.2rem;
  font-size: 1.1rem;
  color: #e60023;
  font-weight: 600;
  background: #fff4f4;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1.5px solid #ffd1d1;
  box-shadow: 0 1px 4px rgba(230,0,35,0.04);
  cursor: pointer;
  transition: background 0.2s;
}
.contact-box .phone:hover {
  background: #ffe6ea;
  color: #b8001a;
}

/* Scrollbar custom */
::-webkit-scrollbar {
  width: 8px;
  background: #ffe6ea;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background: #e60023;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b8001a;
}

/* Animações */
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Responsivo */
@media (max-width: 1200px) {
  .anuncio-container {
    max-width: 98vw;
  }
  .content {
    gap: 1.2rem;
    padding: 1.5rem;
  }
  .left-column {
    padding-right: 1rem;
  }
  .right-column {
    max-width: 320px;
    padding: 1rem 1rem;
  }
}
@media (max-width: 1024px) {
  .content { flex-direction: column; gap: 2rem; }
  .right-column { position: relative; top: 0; margin-top: 2rem; max-width: 100%; }
  .left-column { padding-right: 0; }
}
@media (max-width: 800px) {
  .anuncio-container { max-width: 100vw; }
  .content { padding: 1rem; gap: 1rem; }
  .nav-header { padding: 1rem 1rem; }
  .right-column { padding: 1rem 0.5rem; }
  .contact-box { padding: 1rem 0.5rem; }
}
@media (max-width: 600px) {
  .anuncio-container { border-radius: 0; }
  .content { padding: 0.5rem; gap: 0.5rem; }
  .nav-header { padding: 0.7rem 0.5rem; font-size: 0.95rem; }
  .breadcrumbs { font-size: 0.85rem; padding: 4px 8px; }
  .price { font-size: 1.5rem; }
  .btn, .chip { font-size: 0.95rem; padding: 10px 12px; }
  .info-box span { font-size: 0.95rem; padding: 7px 10px; }
  h2, h3, h4 { font-size: 1.05rem; }
  .description { font-size: 0.95rem; padding: 8px 10px; }
  .comodidades li { font-size: 0.95rem; padding: 5px 8px; }
  .quick-questions { padding: 0.7rem 0.5rem; }
  .alerta { font-size: 0.95rem; padding: 0.7rem; }
  .right-column { padding: 0.5rem 0.2rem; }
  .contact-box { padding: 0.5rem 0.2rem; }
}
@media (max-width: 400px) {
  .nav-header ul { gap: 0.7rem; }
  .price { font-size: 1.1rem; }
  .btn, .chip { font-size: 0.85rem; padding: 7px 8px; }
  .info-box span { font-size: 0.85rem; padding: 5px 6px; }
}

/* Efeitos extras */
.anuncio-container:focus-within {
  box-shadow: 0 0 0 3px #e60023;
}
.btn:active, .chip:active {
  transform: scale(0.98);
}
input:disabled, textarea:disabled {
  background: #f7f7f7;
  color: #bbb;
  cursor: not-allowed;
}
input::placeholder, textarea::placeholder {
  color: #bbb;
  opacity: 1;
}
.contact-box input[type="email"]:invalid {
  border-color: #ffd1d1;
  background: #fff4f4;
}
.contact-box input[type="tel"]:invalid {
  border-color: #ffd1d1;
  background: #fff4f4;
}
.quick-questions textarea:invalid {
  border-color: #ffd1d1;
  background: #fff4f4;
}

/* Sombras e transições extras */
.anuncio-page, .contact-box, .quick-questions, .alerta, .comodidades li, .info-box span {
  transition: box-shadow 0.2s, background 0.2s, color 0.2s;
}

/* Foco acessível */
:focus-visible {
  outline: 2px solid #e60023;
  outline-offset: 2px;
}

/* Separadores */
.comodidades h4 {
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  border-left: 4px solid #e60023;
  padding-left: 8px;
  background: #ffe6ea;
  border-radius: 0 8px 8px 0;
}

/* Ícones decorativos */
.location {
  font-size: 1.05rem;
  color: #e60023;
  margin-bottom: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.location::before {
  content: "📍";
  margin-right: 0.3rem;
  font-size: 1.1rem;
}

/* Efeito hover para info-box */
.info-box span:hover {
  background: #ffe6ea;
  color: #e60023;
  border-color: #e60023;
}

/* Efeito hover para comodidades */
.comodidades li:active {
  background: #e60023;
  color: #fff;
}

/* Efeito para alerta */
.alerta::before {
  content: "⚠";
  font-size: 1.2rem;
  margin-right: 0.5rem;
  color: #e60023;
}

/* Efeito para telefone */
.contact-box .phone:active {
  background: #e60023;
  color: #fff;
}

/* Efeito para tabs */
.contact-box .tabs button:active {
  color: #b8001a;
  border-bottom: 2.5px solid #b8001a;
}

/* Efeito para botão enviar */
.btn.enviar:active {
  background: #e60023;
  color: #fff;
  box-shadow: 0 1px 4px rgba(230,0,35,0.08);
}

/* Efeito para botão parcelas */
.btn.parcelas:active {
  background: #e60023;
  color: #fff;
}

/* Efeito para overlay */
.overlay:active {
  background: linear-gradient(120deg, #e60023 0%, #ffe6ea 100%);
}

/* Efeito para container */
.anuncio-container:active {
  box-shadow: 0 8px 32px rgba(230,0,35,0.18), 0 1.5px 6px rgba(230,0,35,0.12);
}

/* Efeito para nav-header */
.nav-header:active {
  background: linear-gradient(90deg, #ffe6ea 80%, #fff 100%);
}

/* Efeito para breadcrumbs */
.breadcrumbs:active {
  background: #ffe6ea;
  color: #e60023;
}

/* Efeito para descrição */
.description:active {
  background: #ffe6ea;
  color: #e60023;
}

/* Efeito para quick-questions */
.quick-questions:active {
  background: #ffe6ea;
  border-color: #e60023;
}

/* Efeito para contact-box */
.contact-box:active {
  background: #ffe6ea;
  border-color: #e60023;
}

/* Efeito para alerta */
.alerta:active {
  background: #ffe6ea;
  color: #e60023;
  border-color: #e60023;
}

/* Efeito para right-column */
.right-column:active {
  background: #ffe6ea;
  border-color: #e60023;
}

/* Efeito para left-column */
.left-column:active {
  background: #ffe6ea;
}

/* Efeito para overlay */
.overlay:focus-within {
  background: linear-gradient(120deg, #e60023 0%, #ffe6ea 100%);
}

/* Efeito para container */
.anuncio-container:focus-within {
  box-shadow: 0 0 0 4px #e60023;
}

/* Efeito para nav-header */
.nav-header:focus-within {
  background: linear-gradient(90deg, #ffe6ea 80%, #fff 100%);
}

/* Efeito para breadcrumbs */
.breadcrumbs:focus-within {
  background: #ffe6ea;
  color: #e60023;
}

/* Efeito para descrição */
.description:focus-within {
  background: #ffe6ea;
  color: #e60023;
}

/* Efeito para quick-questions */
.quick-questions:focus-within {
  background: #ffe6ea;
  border-color: #e60023;
}

/* Efeito para contact-box */
.contact-box:focus-within {
  background: #ffe6ea;
  border-color: #e60023;
}

/* Efeito para alerta */
.alerta:focus-within {
  background: #ffe6ea;
  color: #e60023;
  border-color: #e60023;
}

/* Efeito para right-column */
.right-column:focus-within {
  background: #ffe6ea;
  border-color: #e60023;
}

/* Efeito para left-column */
.left-column:focus-within {
  background: #ffe6ea;
}
</style>
