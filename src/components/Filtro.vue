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
  max-width: 35%;
  width: 100%;
  height: 100vh;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-right: 1px solid #ddd;
  backdrop-filter: blur(6px);
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.filtro__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.filtro__header h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.filtro__header button {
  font-size: 0.9rem;
  color: #c0392b;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.filtro__header button:hover {
  color: #a52820;
}

.filtro__etapas {
  display: flex;
  background: #f3f3f3;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #ccc;
}

.filtro__etapas button {
  flex: 1;
  padding: 0.9rem;
  font-weight: 500;
  color: #777;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.3s ease, color 0.3s ease;
}

.filtro__etapas button.active {
  background: #e60023;
  color: #fff;
  font-weight: 600;
}

.filtro__campo {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.filtro__campo label {
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.filtro__campo input[type="text"],
.filtro__campo input[type="number"] {
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0.75rem;
  font-size: 0.9rem;
  color: #333;
  width: 100%;
}

.filtro__campo input::placeholder {
  color: #aaa;
}

.filtro__checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #333;
}

.filtro__tipos {
  display: flex;
  gap: 0.7rem;
  flex-wrap: wrap;
}

.filtro__tipos button {
  flex: 1 1 calc(33% - 0.7rem);
  background: #f0f0f0;
  border: 1.5px solid #ccc;
  border-radius: 10px;
  padding: 0.75rem;
  font-size: 0.85rem;
  color: #777;
  text-align: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.filtro__tipos button.active {
  border-color: #e60023;
  background: #fff;
  color: #e60023;
  font-weight: 600;
}

.filtro__tipos button:hover {
  background-color: #eaeaea;
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
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  color: #333;
}

.filtro__mais-tipos {
  font-size: 0.85rem;
  color: #e60023;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.4rem;
}

.filtro__selecao-atual {
  background: #f3f3f3;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  font-weight: 500;
  color: #333;
}

.filtro__selecao-atual span {
  color: #e60023;
  font-weight: 600;
}

@media (max-width: 768px) {
  .filtro {
    position: relative;
    height: auto;
    max-width: 100%;
    box-shadow: none;
    padding: 1.5rem;
  }

  .filtro__tipos button {
    flex: 1 1 48%;
  }
}

</style>