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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.filtro {
  font-family: 'Inter', sans-serif;
  max-width: 360px;
  width: 100%;
  height: 100vh;
  padding: 1.5rem;
  background: var(--bg-light);
  border-right: 1px solid var(--gray-border);
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.filtro__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filtro__header h2 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filtro__header button {
  font-size: 0.9rem;
  color: var(--danger-color);
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.filtro__etapas {
  display: flex;
  background: var(--gray-light);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.filtro__etapas button {
  flex: 1;
  padding: 0.8rem;
  font-weight: 500;
  color: var(--text-light);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background var(--transition), color var(--transition);
}

.filtro__etapas button.active {
  background: var(--primary-color);
  color: #fff;
  font-weight: 600;
}

.filtro__campo {
  background: #fff;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.filtro__campo label {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filtro__campo input[type="text"],
.filtro__campo input[type="number"] {
  background: #f4f4f4;
  border: 1px solid var(--gray-border);
  border-radius: var(--radius);
  padding: 0.75rem;
  font-size: 0.9rem;
  color: var(--text-main);
  width: 100%;
}

.filtro__campo input::placeholder {
  color: var(--text-disabled);
}

.filtro__checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: var(--text-main);
}

.filtro__tipos {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.filtro__tipos button {
  flex: 1 1 calc(33% - 0.7rem);
  background: #f0f0f0;
  border: 1.5px solid var(--border-color);
  border-radius: var(--radius);
  padding: 0.75rem;
  font-size: 0.85rem;
  color: var(--text-light);
  text-align: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.filtro__tipos button.active {
  border-color: var(--primary-color);
  background: #fff;
  color: var(--primary-color);
  font-weight: 600;
}

.filtro__inputs {
  display: flex;
  gap: 0.5rem;
}

.filtro__inputs input {
  flex: 1;
}

.filtro__comodos {
  display: flex;
  gap: 0.6rem;
}

.filtro__comodos select {
  flex: 1;
  padding: 0.65rem;
  font-size: 0.9rem;
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
  background-color: #f9f9f9;
}

.filtro__mais-tipos {
  font-size: 0.85rem;
  color: var(--primary-color);
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.4rem;
}

.filtro__selecao-atual {
  background: var(--gray-light);
  padding: 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-main);
}

.filtro__selecao-atual span {
  color: var(--primary-color);
  font-weight: 600;
}

@media (max-width: 768px) {
  .filtro {
    position: relative;
    height: auto;
    max-width: 100%;
    box-shadow: none;
  }

  .filtro__tipos button {
    flex: 1 1 48%;
  }
}
</style>
