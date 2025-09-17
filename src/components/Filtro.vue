<template>
  <aside class="filtro-imovel">
    <form @submit.prevent="buscarImoveis">
      <h2>Filtrar Imóveis</h2>
      <div class="grupo-campos">
        <div class="campo">
          <label for="tipo">Tipo</label>
          <select v-model="tipo" id="tipo">
            <option value="">Todos</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Casa">Casa</option>
            <option value="Studio">Studio</option>
            <option value="Kitnet">Kitnet</option>
            <option value="Terreno">Terreno</option>
          </select>
        </div>
        <div class="campo">
          <label for="localizacao">Localização</label>
          <input v-model="localizacao" id="localizacao" type="text" placeholder="Cidade, bairro ou rua" />
        </div>
      </div>
      <div class="grupo-campos">
        <div class="campo">
          <label for="precoMin">Preço Mínimo</label>
          <input v-model="precoMin" id="precoMin" type="number" min="0" placeholder="R$ min" />
        </div>
        <div class="campo">
          <label for="precoMax">Preço Máximo</label>
          <input v-model="precoMax" id="precoMax" type="number" min="0" placeholder="R$ max" />
        </div>
      </div>
      <div class="grupo-campos">
        <div class="campo">
          <label for="quartos">Quartos</label>
          <select v-model="quartos" id="quartos">
            <option value="">Qualquer</option>
            <option v-for="n in 5" :key="n" :value="n">{{ n }}+</option>
          </select>
        </div>
        <div class="campo">
          <label for="banheiros">Banheiros</label>
          <select v-model="banheiros" id="banheiros">
            <option value="">Qualquer</option>
            <option v-for="n in 4" :key="n" :value="n">{{ n }}+</option>
          </select>
        </div>
        <div class="campo">
          <label for="vagas">Vagas</label>
          <select v-model="vagas" id="vagas">
            <option value="">Qualquer</option>
            <option v-for="n in 4" :key="n" :value="n">{{ n }}+</option>
          </select>
        </div>
      </div>
      <div class="grupo-campos">
        <div class="campo">
          <label for="areaMin">Área Mínima (m²)</label>
          <input v-model="areaMin" id="areaMin" type="number" min="0" placeholder="Min" />
        </div>
        <div class="campo">
          <label for="areaMax">Área Máxima (m²)</label>
          <input v-model="areaMax" id="areaMax" type="number" min="0" placeholder="Max" />
        </div>
      </div>
      <div class="botoes">
        <button type="button" class="limpar" @click="limparFiltros">Limpar</button>
        <button type="submit" class="buscar">Buscar</button>
      </div>
    </form>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
const tipo = ref('')
const localizacao = ref('')
const precoMin = ref('')
const precoMax = ref('')
const quartos = ref('')
const banheiros = ref('')
const vagas = ref('')
const areaMin = ref('')
const areaMax = ref('')

function limparFiltros() {
  tipo.value = ''
  localizacao.value = ''
  precoMin.value = ''
  precoMax.value = ''
  quartos.value = ''
  banheiros.value = ''
  vagas.value = ''
  areaMin.value = ''
  areaMax.value = ''
}
function buscarImoveis() {
  // Aqui você pode emitir um evento ou chamar uma função para buscar os imóveis
  // Exemplo: emit('buscar', { tipo, localizacao, precoMin, precoMax, quartos, banheiros, vagas, areaMin, areaMax })
}
</script>

<style scoped>
.filtro-imovel {
  background: var(--cor1, #fff);
  border-radius: 0 18px 18px 0;
  box-shadow: 0 4px 24px rgba(39,25,28,0.08);
  width: 320px;
  min-width: 350px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  font-family: 'Inter', sans-serif;
  border-right: 2px solid var(--color4, #6e9987);
  z-index: 100;
  padding: 2rem 1.2rem;
  margin: 0;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
h2 {
  color: var(--color4, #1e2523);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
}
.grupo-campos {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.campo {
  flex: 1 1 120px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
label {
  font-weight: 600;
  color: var(--color4, #6e9987);
  font-size: 1rem;
}
input, select {
  padding: 0.6rem;
  border-radius: 8px;
  border: 1.5px solid var(--color4, #6e9987);
  background: #f7f7f7;
  font-size: 1rem;
}
input:focus, select:focus {
  border-color: var(--color3, #e60023);
  background: #e6f2ef;
}
.botoes {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}
.limpar {
  background: var(--color4, #6e9987);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.limpar:hover {
  background: var(--color3, #e60023);
}
.buscar {
  background: var(--color3, #e60023);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.buscar:hover {
  background: var(--color4, #6e9987);
}
@media (max-width: 900px) {
  .filtro-imovel {
    position: relative;
    width: 100vw;
    height: auto;
    border-radius: 0;
    border-right: none;
    border-bottom: 2px solid var(--color4, #6e9987);
    box-shadow: none;
    padding: 1rem 0.3rem;
  }
}
@media (max-width: 600px) {
  .filtro-imovel {
    max-width: 98vw;
    padding: 1rem 0.3rem;
    border-radius: 12px;
  }
  .grupo-campos {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
