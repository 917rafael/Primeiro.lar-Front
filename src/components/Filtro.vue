<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const etapaSelecionada = ref('Alugar')
const tiposSelecionados = ref(['Apartamento'])
const precoMin = ref('')
const precoMax = ref('')
const incluirCondominio = ref(false)
const quartos = ref(null)
const banheiros = ref(null)
const vagas = ref(null)
const metragemMin = ref('')
const metragemMax = ref('')
const ordenarPor = ref('Relevância')

function toggleTipo(tipo) {
  if (tiposSelecionados.value.includes(tipo)) {
    tiposSelecionados.value = tiposSelecionados.value.filter(t => t !== tipo)
  } else {
    tiposSelecionados.value.push(tipo)
  }
}

function limparFiltros() {
  etapaSelecionada.value = 'Alugar'
  tiposSelecionados.value = ['Apartamento']
  precoMin.value = ''
  precoMax.value = ''
  incluirCondominio.value = false
  quartos.value = null
  banheiros.value = null
  vagas.value = null
  metragemMin.value = ''
  metragemMax.value = ''
  ordenarPor.value = 'Relevância'
}
</script>

<template>
  <aside class="filtro animate-slide-in">
    <header class="filtro__header">
      <h2><i class="fa-solid fa-sliders"></i> Filtros Avançados</h2>
      <button @click="limparFiltros">
        <i class="fa-solid fa-broom"></i> Limpar tudo
      </button>
    </header>

    <section class="filtro__etapas">
      <button :class="{ active: etapaSelecionada === 'Comprar' }" @click="etapaSelecionada = 'Comprar'">
        <i class="fa-solid fa-house"></i> Comprar
      </button>
      <button :class="{ active: etapaSelecionada === 'Alugar' }" @click="etapaSelecionada = 'Alugar'">
        <i class="fa-solid fa-key"></i> Alugar
      </button>
      <button :class="{ active: etapaSelecionada === 'Lançamentos' }" @click="etapaSelecionada = 'Lançamentos'">
        <i class="fa-solid fa-building"></i> Lançamentos
      </button>
    </section>

    <section class="filtro__campo">
      <label><i class="fa-solid fa-map-marker-alt"></i> Localização</label>
      <input type="text" placeholder="Digite bairro, rua ou cidade" />
    </section>

    <section class="filtro__campo">
      <label><i class="fa-solid fa-building"></i> Tipos de Imóveis</label>
      <div class="filtro__tipos">
        <button 
          v-for="tipo in ['Apartamento', 'Casa', 'Kitnet', 'Studio', 'Terreno']" 
          :key="tipo" 
          :class="{ active: tiposSelecionados.includes(tipo) }"
          @click="toggleTipo(tipo)"
        >
          <i class="fa-solid fa-home"></i> {{ tipo }}
        </button>
      </div>
    </section>

    <section class="filtro__campo">
      <label><i class="fa-solid fa-money-bill"></i> Faixa de Preço</label>
      <div class="filtro__inputs">
        <input type="number" v-model="precoMin" placeholder="R$ mínimo" />
        <input type="number" v-model="precoMax" placeholder="R$ máximo" />
      </div>
      <label class="filtro__checkbox">
        <input type="checkbox" v-model="incluirCondominio" /> Incluir preço do condomínio
      </label>
    </section>

    <section class="filtro__campo">
      <label><i class="fa-solid fa-bed"></i> Comodos</label>
      <div class="filtro__comodos">
        <select v-model="quartos">
          <option :value="null">Quartos</option>
          <option v-for="n in 5" :key="n" :value="n">{{ n }}+</option>
        </select>
        <select v-model="banheiros">
          <option :value="null">Banheiros</option>
          <option v-for="n in 4" :key="n" :value="n">{{ n }}+</option>
        </select>
        <select v-model="vagas">
          <option :value="null">Vagas</option>
          <option v-for="n in 4" :key="n" :value="n">{{ n }}+</option>
        </select>
      </div>
    </section>

    <section class="filtro__campo">
      <label><i class="fa-solid fa-ruler-combined"></i> Área (m²)</label>
      <div class="filtro__inputs">
        <input type="number" v-model="metragemMin" placeholder="Min" />
        <input type="number" v-model="metragemMax" placeholder="Max" />
      </div>
    </section>

    <section class="filtro__campo">
      <label><i class="fa-solid fa-sort"></i> Ordenar por</label>
      <select v-model="ordenarPor">
        <option>Relevância</option>
        <option>Menor preço</option>
        <option>Maior preço</option>
        <option>Mais recentes</option>
      </select>
    </section>
  </aside>
</template>

<!-- Font Awesome CDN (Adicionado para ícones profissionais) -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-NsmO6C0EN1os0fI3x1BPi6qQX+QkDdFvnyU+DOIzvUQewADfYb13rjUgwtvBRY/TV9fA0UnEBrEcTbGR8Ob3Mg==" crossorigin="anonymous" referrerpolicy="no-referrer" />


<style scoped>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.filtro {
  font-family: 'Inter', sans-serif;
  max-width: 450px;
  width: 100%;
  min-width: 260px;
  height: 100vh;
  padding: 2rem 1.5rem;
  background: linear-gradient(120deg, #fff 80%, #ffe6ea 100%);
  border-right: 1.5px solid #e60023;
  backdrop-filter: blur(8px);
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 8px 32px rgba(230,0,35,0.08);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: slideIn 0.4s cubic-bezier(.25,.8,.25,1);
  z-index: 100;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-40px);}
  to { opacity: 1; transform: translateX(0);}
}

.filtro__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.filtro__header h2 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #e60023;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  letter-spacing: 0.02em;
}

.filtro__header button {
  font-size: 0.95rem;
  color: #e60023;
  background: #fff;
  border: 1.5px solid #e60023;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: 0 1px 4px rgba(230,0,35,0.04);
}
.filtro__header button:hover {
  background: #e60023;
  color: #fff;
  box-shadow: 0 2px 8px rgba(230,0,35,0.12);
}

.filtro__etapas {
  display: flex;
  background: #f7f7f7;
  border-radius: 12px;
  overflow: hidden;
  border: 1.5px solid #e60023;
  box-shadow: 0 1px 4px rgba(230,0,35,0.04);
}

.filtro__etapas button {
  flex: 1;
  padding: 1rem 0.5rem;
  font-weight: 600;
  color: #e60023;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.01em;
}
.filtro__etapas button.active {
  background: linear-gradient(90deg, #e60023 80%, #ffb3c1 100%);
  color: #fff;
  box-shadow: 0 2px 8px rgba(230,0,35,0.08);
}
.filtro__etapas button:not(.active):hover {
  background: #ffe6ea;
  color: #b8001a;
}

.filtro__campo {
  background: #fff;
  border: 1.5px solid #e60023;
  border-radius: 12px;
  padding: 1.2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  box-shadow: 0 1px 4px rgba(230,0,35,0.04);
  transition: box-shadow 0.2s, border-color 0.2s;
}
.filtro__campo:focus-within {
  border-color: #b8001a;
  box-shadow: 0 2px 8px rgba(230,0,35,0.12);
}

.filtro__campo label {
  font-weight: 600;
  font-size: 1rem;
  color: #e60023;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filtro__campo input[type="text"],
.filtro__campo input[type="number"] {
  background: #f7f7f7;
  border: 1.5px solid #e60023;
  border-radius: 10px;
  padding: 0.8rem;
  font-size: 1rem;
  color: #222;
  width: 100%;
  transition: border 0.2s;
}
.filtro__campo input:focus {
  border-color: #b8001a;
  background: #ffe6ea;
}
.filtro__campo input::placeholder {
  color: #bbb;
}

.filtro__checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: #444;
}

.filtro__tipos {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.filtro__tipos button {
  flex: 1 1 45%;
  background: #ffe6ea;
  border: 1.5px solid #e60023;
  border-radius: 10px;
  padding: 0.7rem 0.5rem;
  font-size: 0.95rem;
  color: #e60023;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 500;
  box-shadow: 0 1px 4px rgba(230,0,35,0.04);
}
.filtro__tipos button.active {
  background: linear-gradient(90deg, #e60023 80%, #ffb3c1 100%);
  color: #fff;
  font-weight: 700;
  border-color: #b8001a;
  box-shadow: 0 2px 8px rgba(230,0,35,0.08);
}
.filtro__tipos button:hover {
  background-color: #fff;
  color: #b8001a;
  border-color: #b8001a;
}

.filtro__inputs {
  display: flex;
  gap: 0.7rem;
}
.filtro__inputs input {
  flex: 1;
}

.filtro__comodos {
  display: flex;
  gap: 0.7rem;
}
.filtro__comodos select {
  flex: 1;
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 1.5px solid #e60023;
  background-color: #f7f7f7;
  color: #222;
  font-weight: 500;
  transition: border 0.2s;
}
.filtro__comodos select:focus {
  border-color: #b8001a;
  background: #ffe6ea;
}

.filtro__mais-tipos {
  font-size: 0.95rem;
  color: #e60023;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.4rem;
}

.filtro__selecao-atual {
  background: #f7f7f7;
  padding: 1rem;
  border-radius: 10px;
  border: 1.5px solid #e60023;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  font-weight: 500;
  color: #222;
}
.filtro__selecao-atual span {
  color: #e60023;
  font-weight: 700;
}

select {
  font-family: inherit;
}

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

/* Responsivo */
@media (max-width: 1200px) {
  .filtro {
    max-width: 340px;
    padding: 1.5rem 1rem;
  }
}
@media (max-width: 900px) {
  .filtro {
    position: relative;
    height: auto;
    max-width: 100vw;
    min-width: 0;
    box-shadow: none;
    border-right: none;
    border-bottom: 1.5px solid #e60023;
    padding: 1rem 0.5rem;
    border-radius: 0 0 18px 18px;
  }
  .filtro__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
  }
}
@media (max-width: 600px) {
  .filtro {
    padding: 0.7rem 0.2rem;
    border-radius: 0;
    font-size: 0.95rem;
  }
  .filtro__campo {
    padding: 0.7rem 0.5rem;
    border-radius: 8px;
  }
  .filtro__etapas button {
    font-size: 0.95rem;
    padding: 0.7rem 0.3rem;
  }
  .filtro__tipos button {
    font-size: 0.9rem;
    padding: 0.5rem 0.3rem;
  }
  .filtro__comodos select {
    font-size: 0.95rem;
    padding: 0.5rem;
  }
}
@media (max-width: 400px) {
  .filtro {
    padding: 0.3rem 0.1rem;
    font-size: 0.9rem;
  }
  .filtro__campo {
    padding: 0.4rem 0.2rem;
  }
  .filtro__etapas button {
    font-size: 0.9rem;
    padding: 0.5rem 0.1rem;
  }
}

/* Efeitos extras */
.filtro__campo:active {
  border-color: #b8001a;
  box-shadow: 0 2px 8px rgba(230,0,35,0.12);
}
.filtro__tipos button:active {
  background: #e60023;
  color: #fff;
  border-color: #b8001a;
}
.filtro__etapas button:active {
  background: #e60023;
  color: #fff;
}
.filtro__header button:active {
  background: #e60023;
  color: #fff;
}
.filtro__comodos select:active {
  border-color: #b8001a;
  background: #ffe6ea;
}
.filtro__campo input:active {
  border-color: #b8001a;
  background: #ffe6ea;
}
.filtro__campo input:disabled {
  background: #f7f7f7;
  color: #bbb;
  cursor: not-allowed;
}
.filtro__campo input::placeholder {
  color: #bbb;
  opacity: 1;
}
:focus-visible {
  outline: 2px solid #e60023;
  outline-offset: 2px;
}
</style>