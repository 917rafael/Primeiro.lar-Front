<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'

const etapaSelecionada = ref('Alugar')
const tipoSelecionado = ref('Apartamento')
const precoMin = ref('')
const precoMax = ref('')
const incluirCondominio = ref(false)
const quartos = ref(null)
const banheiros = ref(null)
const vagas = ref(null)
const metragemMin = ref('')
const metragemMax = ref('')
const ordenarPor = ref('Relevância')

function limparFiltros() {
  etapaSelecionada.value = 'Alugar'
  tipoSelecionado.value = 'Apartamento'
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
  <div class="filtro-container">
    <div class="filtro-header">
      <h3>🎯 Filtros Avançados</h3>
      <button class="limpar-btn" @click="limparFiltros">Limpar tudo</button>
    </div>

    <div class="filtro-scrollable">
      <!-- Etapas -->
      <div class="etapas">
        <button :class="{ ativo: etapaSelecionada === 'Comprar' }" @click="etapaSelecionada = 'Comprar'">Comprar</button>
        <button :class="{ ativo: etapaSelecionada === 'Alugar' }" @click="etapaSelecionada = 'Alugar'">Alugar</button>
        <button :class="{ ativo: etapaSelecionada === 'Lançamentos' }" @click="etapaSelecionada = 'Lançamentos'">Lançamentos</button>
      </div>

      <!-- Localização -->
      <div class="localizacao">
        <label>📍 Localização</label>
        <div class="perto">
          <span>Perto de mim</span>
        </div>
        <input type="text" placeholder="Digite bairro, rua ou cidade" />
      </div>

      <!-- Tipos -->
      <div class="tipos">
        <label>🏘️ Tipo de imóvel</label>
        <div class="botoes">
          <button :class="{ ativo: tipoSelecionado === 'Apartamento' }" @click="tipoSelecionado = 'Apartamento'">Apartamento</button>
          <button :class="{ ativo: tipoSelecionado === 'Casa' }" @click="tipoSelecionado = 'Casa'">Casa</button>
          <button :class="{ ativo: tipoSelecionado === 'Kitnet' }" @click="tipoSelecionado = 'Kitnet'">Kitnet</button>
          <button :class="{ ativo: tipoSelecionado === 'Terreno' }" @click="tipoSelecionado = 'Terreno'">Terreno</button>
        </div>
      </div>

      <!-- Preço -->
      <div class="preco">
        <label>💰 Faixa de Preço</label>
        <div class="inputs">
          <input type="number" v-model="precoMin" placeholder="Min R$" />
          <input type="number" v-model="precoMax" placeholder="Max R$" />
        </div>
        <label class="condominio">
          <input type="checkbox" v-model="incluirCondominio" />
          Incluir condomínio
        </label>
      </div>

      <!-- Quartos, banheiros, vagas -->
      <div class="atributos">
        <label>🛏️ Quartos</label>
        <select v-model="quartos">
          <option :value="null">Todos</option>
          <option v-for="n in 5" :key="n" :value="n">{{ n }}+</option>
        </select>

        <label>🚿 Banheiros</label>
        <select v-model="banheiros">
          <option :value="null">Todos</option>
          <option v-for="n in 4" :key="n" :value="n">{{ n }}+</option>
        </select>

        <label>🚗 Vagas</label>
        <select v-model="vagas">
          <option :value="null">Todas</option>
          <option v-for="n in 4" :key="n" :value="n">{{ n }}+</option>
        </select>
      </div>

      <!-- Metragem -->
      <div class="metragem">
        <label>📐 Área (m²)</label>
        <div class="inputs">
          <input type="number" v-model="metragemMin" placeholder="Min" />
          <input type="number" v-model="metragemMax" placeholder="Max" />
        </div>
      </div>

      <!-- Ordenar -->
      <div class="ordenar">
        <label>🔽 Ordenar por</label>
        <select v-model="ordenarPor">
          <option>Relevância</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
          <option>Mais recentes</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
:root {
  --primary: #3f51b5;
  --primary-dark: #303f9f;
  --primary-light: #c5cae9;
  --secondary: #5a5a5a;
  --bg-light: #f9f9f9;
  --bg-white: #ffffff;
  --gray-border: #ddd;
  --gray-light: #eee;
  --text-main: #333;
  --text-light: #777;
  --shadow-light: rgba(0, 0, 0, 0.1);
  --shadow-medium: rgba(0, 0, 0, 0.2);
  --radius: 10px;
  --font-base: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  --transition-fast: 0.3s ease;
  --transition-med: 0.4s ease;
  --transition-slow: 0.6s ease;
  --max-width: 420px;
}

/* =========================
   CONTAINER PRINCIPAL
   ========================= */
.filtro-container {
  position: fixed;
  top: 90px;
  left: 0;
  width: var(--max-width);
  height: calc(100vh - 100px);
  background: var(--bg-white);
  border-right: 1px solid var(--gray-border);
  box-shadow: 5px 0 18px var(--shadow-light);
  display: flex;
  flex-direction: column;
  z-index: 1000;
  transition: width var(--transition-fast), transform var(--transition-fast);
  font-family: var(--font-base);
  user-select: none;
  overflow: hidden;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  animation: slideInFromLeft 0.5s ease-out;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

/* =========================
   HEADER - TITULO E BOTÃO LIMPAR
   ========================= */
.filtro-header {
  padding: 24px 28px;
  border-bottom: 1px solid var(--gray-border);
  background: var(--bg-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0 -1px 3px var(--shadow-light);
  border-top-right-radius: var(--radius);
  transition: background-color var(--transition-fast);
}

.filtro-header h3 {
  font-size: 1.5rem;
  color: var(--text-main);
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
}

.limpar-btn {
  background: transparent;
  border: none;
  color: var(--primary);
  font-size: 1rem;
  cursor: pointer;
  font-weight: 700;
  transition: color var(--transition-fast), transform var(--transition-fast);
  padding: 6px 12px;
  border-radius: var(--radius);
}

.limpar-btn:hover {
  color: var(--primary-dark);
  background: var(--primary-light);
  box-shadow: 0 0 8px var(--primary-light);
  transform: scale(1.05);
}

/* =========================
   SEÇÕES DO FILTRO
   ========================= */
.filtro-scrollable {
  flex: 1;
  overflow-y: auto;
  padding: 28px 32px 36px 32px;
  scrollbar-width: thin;
}

.filtro-scrollable::-webkit-scrollbar {
  width: 10px;
}

.filtro-scrollable::-webkit-scrollbar-track {
  background: var(--bg-light);
}

.filtro-scrollable::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 10px;
}

label {
  display: block;
  margin-bottom: 12px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-main);
}

/* =========================
   BOTÕES DE ETAPA E TIPOS DE IMÓVEL
   ========================= */
.etapas button,
.botoes button {
  padding: 14px 0;
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--radius);
  background: linear-gradient(145deg, #f9f9f9, #e8e8e8);
  color: var(--text-main);
  cursor: pointer;
  transition: background-color var(--transition-med), transform var(--transition-fast);
}

.etapas button:hover,
.botoes button:hover {
  background: var(--primary-light);
  color: white;
  transform: scale(1.05);
}

.ativo {
  background: var(--primary);
  color: #fff;
}

/* =========================
   CAMPOS INPUT E SELECT
   ========================= */
input[type="text"],
input[type="number"],
select {
  width: 100%;
  padding: 14px 16px;
  font-size: 1rem;
  border-radius: var(--radius);
  background-color: var(--bg-white);
  border: 1.5px solid var(--gray-border);
  transition: transform var(--transition-fast);
}

input[type="text"]:focus,
input[type="number"]:focus,
select:focus {
  border-color: var(--primary);
  transform: scale(1.02);
}

/* =========================
   FOCUS GLOBAL NOS SELECTS E INPUTS
   ========================= */
input:focus-visible,
select:focus-visible {
  outline-offset: 3px;
  outline: 2px solid var(--primary-light);
}
</style>
