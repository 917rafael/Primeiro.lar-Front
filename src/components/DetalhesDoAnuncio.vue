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
  <div class="anuncio-page">
    <!-- Header de navegação -->
    <div class="nav-header">
      <button class="back-btn">←</button>
      <ul>
        <li class="active">Anúncio</li>
        <li>16 Fotos</li>
        <li>Mapa</li>
      </ul>
    </div>

    <!-- Galeria -->
    <!-- <div class="gallery">
      <div class="main-photo">
        <img src="/img/foto1.jpg" alt="foto imóvel" />
      </div>
      <div class="side-photos">
        <img src="/img/foto2.jpg" alt="foto imóvel" />
        <img src="/img/foto3.jpg" alt="foto imóvel" />
      </div>
    </div> -->

    <div class="content">
      <!-- Coluna esquerda -->
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
</template>
<style scoped>
.anuncio-page {
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #222;
  line-height: 1.6;
}

/* --- Header --- */
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
  background: #fafafa;
  position: sticky;
  top: 0;
  z-index: 10;
}
.nav-header ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav-header li {
  cursor: pointer;
  font-weight: 500;
  padding: 6px 0;
  transition: color 0.2s, border-bottom 0.2s;
}
.nav-header li.active {
  color: #e60023;
  border-bottom: 2px solid #e60023;
}

/* --- Content --- */
.content {
  display: flex;
  gap: 2rem;
  padding: 2rem;
}
.left-column {
  flex: 3;
}
.right-column {
  flex: 1.2;
  position: sticky;
  top: 80px;
  height: fit-content;
}

/* --- Price --- */
.price {
  font-size: 2.4rem;
  font-weight: 700;
  margin: 0.5rem 0;
  color: #e60023;
}

/* --- Buttons --- */
.btn {
  background: #e60023;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.btn:hover {
  background: #cc001e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.btn:active {
  transform: translateY(0);
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

/* --- Chips --- */
.chip {
  border: 1px solid #ddd;
  background: #f7f7f7;
  padding: 8px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}
.chip:hover {
  background: #e60023;
  color: #fff;
  border-color: #e60023;
}

/* --- Info Box --- */
.info-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.2rem 0;
}
.info-box span {
  background: #f8f8f8;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  border: 1px solid #eee;
  transition: all 0.2s;
}
.info-box span:hover {
  background: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

/* --- Comodidades --- */
.comodidades {
  margin: 2rem 0;
}
.comodidades h4 {
  margin-bottom: 0.5rem;
  font-weight: 600;
}
.comodidades ul {
  list-style: none;
  padding: 0;
}
.comodidades li {
  margin: 6px 0;
  padding-left: 4px;
}

/* --- Quick Questions --- */
.quick-questions {
  margin: 2rem 0;
  padding: 1.2rem;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fafafa;
}
.quick-questions h4 {
  margin-bottom: 1rem;
}
.quick-questions .questions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1rem;
}
.quick-questions textarea {
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ddd;
  margin: 0.5rem 0 1rem;
  resize: none;
  font-family: inherit;
}

/* --- Contact Box --- */
.contact-box {
  border: 1px solid #eee;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0,0,0,0.05);
  background: #fff;
  transition: box-shadow 0.3s ease;
}
.contact-box:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
}
.contact-box .tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.contact-box .tabs button {
  flex: 1;
  padding: 10px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s;
}
.contact-box .tabs button.active {
  border-bottom: 2px solid #e60023;
  color: #e60023;
}
.contact-box input,
.contact-box textarea {
  width: 100%;
  margin: 0.5rem 0;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.95rem;
  transition: border 0.2s, box-shadow 0.2s;
}
.contact-box input:focus,
.contact-box textarea:focus {
  border-color: #e60023;
  box-shadow: 0 0 0 3px rgba(230,0,35,0.15);
  outline: none;
}
.contact-box small {
  font-size: 0.8rem;
  color: #666;
  display: block;
  margin-top: 0.5rem;
}
.contact-box .phone {
  margin-top: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: #333;
  transition: color 0.2s;
}
.contact-box .phone:hover {
  color: #e60023;
}

/* --- Alerta --- */
.alerta {
  background: #fff4f4;
  border: 1px solid #ffd1d1;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #a6001a;
}

/* --- Responsividade --- */
@media (max-width: 1024px) {
  .content {
    flex-direction: column;
  }
  .right-column {
    position: relative;
    top: 0;
  }
}
@media (max-width: 600px) {
  .price {
    font-size: 1.8rem;
  }
  .btn {
    width: 100%;
  }
  .nav-header ul {
    gap: 1rem;
    font-size: 0.9rem;
  }
}
</style>
